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

const EXTENSION_ATTR_CLEANUP_SCRIPT = `(function(){try{var a=['bis_skin_checked','bis_register'];var w=typeof WeakMap==='function'?new WeakMap():null;var c=function(e){if(!e||e.nodeType!==1)return;for(var i=0;i<a.length;i++){if(e.hasAttribute(a[i])){if(w){var n=w.get(e)||0;if(n>=6)continue;w.set(e,n+1);}e.removeAttribute(a[i]);}}};var s=function(r){if(!r||!r.querySelectorAll)return;var q=r.querySelectorAll('[bis_skin_checked],[bis_register]');for(var i=0;i<q.length;i++)c(q[i]);};s(document);var m=new MutationObserver(function(l){for(var i=0;i<l.length;i++){var t=l[i];if(t.type==='attributes'){c(t.target);}else if(t.type==='childList'){for(var j=0;j<t.addedNodes.length;j++){var n=t.addedNodes[j];c(n);s(n);}}}});m.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:a});document.addEventListener('DOMContentLoaded',function(){s(document);},{once:true});var d=function(){setTimeout(function(){m.disconnect();},2500);};if(document.readyState==='complete'){d();}else{window.addEventListener('load',d,{once:true});}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vynentra.com"),
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: EXTENSION_ATTR_CLEANUP_SCRIPT }} />
      </head>
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
