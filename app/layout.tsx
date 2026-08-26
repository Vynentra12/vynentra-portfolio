import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import LenisProvider from "@/components/motion/LenisProvider";
import { Navbar } from "@/components/navigation/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vynentra",
  description: "Vynentra is an integrated renewable energy solutions and project development company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        <LenisProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
