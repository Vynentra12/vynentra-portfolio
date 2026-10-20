import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/motion/LenisProvider";
import { Navbar } from "@/components/navigation/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
