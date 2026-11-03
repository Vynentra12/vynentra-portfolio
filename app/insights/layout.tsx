import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Perspectives from Vynentra on wind, solar, hybrid technologies, project engineering and India's clean energy transition.",
  path: "/insights",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
