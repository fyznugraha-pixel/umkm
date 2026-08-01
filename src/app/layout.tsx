import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Buat Website UMKM",
  description: "Bikin UMKM Kamu Punya Rumah Sendiri di Internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", "dark", archivo.variable, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
