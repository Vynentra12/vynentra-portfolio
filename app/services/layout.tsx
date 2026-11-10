import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Turnkey clean energy services from Vynentra: battery energy storage (BESS), end-to-end renewable project development and independent power production (IPP).",
  path: "/services",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
