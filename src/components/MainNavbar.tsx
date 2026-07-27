"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
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
          <img src="/logo/elvora.webp" alt="Elvora Studio" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        <nav className="flex flex-1 justify-center md:justify-center gap-6 text-sm md:text-base font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors drop-shadow-sm">Home</Link>
          <Link href="/katalog" className="hover:text-white transition-colors drop-shadow-sm">Katalog</Link>
          <a href="#kontak" className="hover:text-white transition-colors drop-shadow-sm">Kontak</a>
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-5 py-2.5 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:scale-105"
        >
          Konsultasi Gratis
        </a>
      </div>
    </header>
  );
}
