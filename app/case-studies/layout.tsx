import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Real renewable energy projects by Vynentra: hybrid wind-solar and vertical-axis wind turbine installations designed for real-world conditions across India.",
  path: "/case-studies",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
