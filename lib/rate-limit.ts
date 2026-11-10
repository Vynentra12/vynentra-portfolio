/**
 * Minimal fixed-window, in-memory rate limiter.
 *
 * State lives in the server instance's memory, so on serverless hosting each
 * instance counts separately and counts reset on cold start. That is enough to
 * blunt casual abuse of a contact form; for strict guarantees move this to a
 * shared store (e.g. Upstash Redis / Vercel KV).
 */

interface Bucket {
  count: number;
  resetAt: number;
}

interface RateLimitResult {
  allowed: boolean;
  /** Seconds until the current window resets. */
  retryAfterSec: number;
}

const MAX_TRACKED_KEYS = 10_000;

export function createRateLimiter({ limit, windowMs }: { limit: number; windowMs: number }) {
  const buckets = new Map<string, Bucket>();

  return function check(key: string): RateLimitResult {
    const now = Date.now();

    // Keep memory bounded: drop expired buckets, and as a last resort start over.
    if (buckets.size >= MAX_TRACKED_KEYS) {
      for (const [k, b] of buckets) {
        if (b.resetAt <= now) buckets.delete(k);
      }
      if (buckets.size >= MAX_TRACKED_KEYS) buckets.clear();
    }

    let bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + windowMs };
      buckets.set(key, bucket);
    }
    bucket.count += 1;

    return {
      allowed: bucket.count <= limit,
      retryAfterSec: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  };
}

/** Best-effort client IP from proxy headers (Vercel and most proxies set these). */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}
