import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Talk to Vynentra about your site, energy needs and goals. Our team will help you find the renewable energy solution that fits your project.",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
