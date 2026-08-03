"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const WA_NUMBER = "6287794693241";
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20UMKM`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass-navbar shadow-lg py-2" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 min-h-16 flex items-center justify-between max-w-[1400px]">
        <Link href="/" className="hidden md:flex items-center">
          <img src="/logo/elvora.png" alt="Elvora Space" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        <nav className="flex flex-1 justify-center md:justify-center gap-6 text-sm md:text-base font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors drop-shadow-sm">{t('nav.home')}</Link>
          <Link href="/katalog" className="hover:text-white transition-colors drop-shadow-sm">{t('nav.catalog')}</Link>
          <a href="#kontak" className="hover:text-white transition-colors drop-shadow-sm">{t('nav.contact')}</a>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger render={<button className="glass-pill border border-transparent hover:bg-white/10 text-xs font-bold text-white rounded-full px-3 h-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)] inline-flex items-center justify-center whitespace-nowrap" />}>
              {language === 'id' ? 'ID' : 'EN'}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px] bg-slate-900/95 backdrop-blur-md border-white/10 text-white shadow-xl rounded-xl">
              <DropdownMenuItem onClick={() => setLanguage('id')} className={`cursor-pointer rounded-lg mx-1 my-1 ${language === 'id' ? 'bg-yellow-500/10 text-yellow-500 font-bold' : 'hover:bg-white/10'}`}>
                Indonesia (ID)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')} className={`cursor-pointer rounded-lg mx-1 my-1 ${language === 'en' ? 'bg-yellow-500/10 text-yellow-500 font-bold' : 'hover:bg-white/10'}`}>
                English (EN)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-5 h-9 rounded-full text-sm transition-transform shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:scale-105 items-center justify-center whitespace-nowrap"
          >
            {t('nav.consultation')}
          </a>
        </div>
      </div>
    </header>
  );
}
