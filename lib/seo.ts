import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://vynentra.com").replace(/\/+$/, "");
export const SITE_NAME = "Vynentra";
export const SITE_DESCRIPTION =
  "Vynentra is an integrated renewable energy solutions and project development company delivering wind, solar, hybrid and battery storage projects across India.";
export const DEFAULT_OG_IMAGE = {
  url: "/heroimage.png",
  width: 1717,
  height: 916,
  alt: "Vynentra renewable energy",
};

interface PageMetadataInput {
  /** Page title; " | Vynentra" is appended. */
  title: string;
  description: string;
  /** Canonical path, e.g. "/services". */
  path: string;
  /** Social share image (absolute URL or path under /public). */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
}

/** Clips text to ~160 chars on a word boundary, the length search engines display. */
function clipDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "")}…`;
}

/**
 * Builds per-page metadata. OpenGraph and Twitter objects are replaced (not merged)
 * by child segments in Next.js, so every page sets them in full here.
 */
export function pageMetadata({
  title,
  description: rawDescription,
  path,
  image,
  imageAlt,
  type = "website",
}: PageMetadataInput): Metadata {
  const description = clipDescription(rawDescription);
  const images = image ? [{ url: image, alt: imageAlt ?? title }] : [DEFAULT_OG_IMAGE];
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    // Absolute rather than relying on the root title template: a string title in a
    // route layout (e.g. app/services/layout.tsx) resets the template for its children.
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((img) => img.url),
    },
  };
}
