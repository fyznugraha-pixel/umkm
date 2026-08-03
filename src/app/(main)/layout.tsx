import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, LayoutTemplate } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import AuroraBackground from "@/components/AuroraBackground";
import MainNavbar from "@/components/MainNavbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageSuggestionPopup from "@/components/LanguageSuggestionPopup";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const WA_NUMBER = "6287794693241";
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20UMKM`;

  return (
    <LanguageProvider>
      <div className="text-slate-300 bg-slate-950 min-h-screen">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] -z-40 pointer-events-none" style={{ maskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 110%)", WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 110%)" }}></div>
      {/* Navbar */}
      <MainNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        {children}
      </main>

      {/* Footer */}
      <footer id="kontak" className="border-t border-white/10 bg-slate-950 py-12 w-full flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-[1400px] flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div>
            <img src="/logo/elvora.png" alt="Elvora Space" className="h-16 md:h-20 w-auto mb-2 object-contain" />
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
          &copy; {new Date().getFullYear()} Elvora Space. All rights reserved.
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
      <LanguageSuggestionPopup />
    </div>
    </LanguageProvider>
  );
}
