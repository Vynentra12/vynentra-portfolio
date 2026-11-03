import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Vynentra is a team of engineers, designers and operators building renewable energy infrastructure to accelerate India's transition to clean energy.",
  path: "/about",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
