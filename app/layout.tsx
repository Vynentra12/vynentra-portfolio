import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/motion/LenisProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Site-wide defaults. Each page sets its own title/description/canonical via
// pageMetadata() in lib/seo.ts; no canonical here so pages never inherit "/".
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-hidden max-w-[100vw]`} suppressHydrationWarning>
      <body className="antialiased font-sans overflow-x-hidden max-w-[100vw]" suppressHydrationWarning>
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen overflow-x-hidden max-w-[100vw]">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
