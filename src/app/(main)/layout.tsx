import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, LayoutTemplate } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const WA_NUMBER = "6287794693241";
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20UMKM`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-[1400px]">
          <Link href="/" className="hidden md:block font-display font-bold text-xl tracking-tight">
            Faiz<span className="text-yellow-500">.</span> Web UMKM
          </Link>
          <nav className="flex flex-1 justify-center md:justify-center gap-6 text-sm md:text-base font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/katalog" className="hover:text-white transition-colors">Katalog</Link>
            <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-semibold px-4 py-2 rounded-full text-sm transition-all"
          >
            Konsultasi Gratis
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        {children}
      </main>

      {/* Footer */}
      <footer id="kontak" className="border-t border-white/10 bg-slate-950 py-12 w-full flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-[1400px] flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-2">Faiz Web UMKM</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Membantu UMKM Indonesia go digital dengan website profesional dan harga terjangkau.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-400 text-center md:text-right">
            <a href={WA_LINK} className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-500 transition-colors">
              <Phone size={16} /> 0877-9469-3241
            </a>
            <a href="https://instagram.com/faizngraha" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-500 transition-colors">
              <FaInstagram size={16} /> @faizngraha
            </a>
            <Link href="/katalog" className="flex items-center justify-center md:justify-end gap-2 hover:text-yellow-500 transition-colors">
              <LayoutTemplate size={16} /> Lihat Katalog
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-[1400px] mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Jasa Buat Website UMKM. All rights reserved.
        </div>
      </footer>

      {/* Floating WA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg shadow-green-500/20 transition-all hover:-translate-y-1 z-50 flex items-center justify-center group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
