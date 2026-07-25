"use client";

import React, { useState } from "react";
import { MessageCircle, Menu as MenuIcon, Coffee, Utensils, Info, ShoppingBag, MapPin, Clock, Lock } from "lucide-react";
import Link from "next/link";
import MapEmbed from "@/components/demo/MapEmbed";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import GalleryGrid from "@/components/demo/GalleryGrid";
import TestimonialCard from "@/components/demo/TestimonialCard";
import ReservationForm from "@/components/demo/ReservationForm";
import FAQAccordion from "@/components/demo/FAQAccordion";
import Marquee from "@/components/demo/Marquee";
import AnchorNav from "@/components/demo/AnchorNav";
import StatusBadge from "@/components/demo/StatusBadge";
import RatingBadge from "@/components/demo/RatingBadge";
import ScrollReveal from "@/components/demo/ScrollReveal";
import StoreItemCard from "@/components/demo/StoreItemCard";
import { useStore } from "@/components/demo/StoreContext";

const DUMMY_WA = "6280000000000";

export default function KopiSemestaFullDemo() {
  const { products, cart } = useStore();
  // Removed isCartOpen state
  const [activeTab, setActiveTab] = useState<"Semua" | "Kopi" | "Non-Kopi" | "Snack">("Semua");

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = activeTab === "Semua" 
    ? products 
    : products.filter(p => p.category === activeTab);

  const CartIcon = (
    <Link 
      href="/kopi-semesta-full/keranjang"
      className="relative p-2 bg-[#D4A373] hover:bg-[#B36A5E] text-white rounded-full transition-colors flex items-center justify-center shadow-md"
    >
      <ShoppingBag size={20} />
      {totalCartItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
          {totalCartItems}
        </span>
      )}
    </Link>
  );

  const AdminButton = (
    <a 
      href="/kopi-semesta-full/admin"
      className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white/50 hover:bg-white text-[#3D2B1F] rounded-full transition-colors text-xs font-bold border border-[#E5D3B3] shadow-sm backdrop-blur-sm"
      title="Login Admin"
    >
      <Lock size={14} />
      <span className="hidden sm:inline">Admin</span>
    </a>
  );

  return (
    <div className="bg-[#F5EFE6] min-h-screen text-[#3D2B1F] font-sans pb-10">

      {/* MARQUEE PROMO */}
      <Marquee text="PROMO SPESIAL: DISKON 20% UNTUK PELAJAR & MAHASISWA DENGAN MENUNJUKKAN KARTU PELAJAR • ENJOY LIVE ACOUSTIC SETIAP JUMAT MALAM PKL 19.00" speed={25} />

      {/* BANNER COMPARISON & DEMO MODE */}
      <div className="bg-yellow-100 text-yellow-800 border-b border-yellow-200 py-1.5 px-4 text-center text-xs font-bold uppercase tracking-wider">
        ⚠️ DEMO MODE: INI ADALAH DEMO INTERAKTIF — SEMUA TRANSAKSI BERSIFAT SIMULASI
      </div>
      <div className="bg-[#B36A5E] text-white py-3 px-4 text-center text-sm font-semibold flex flex-col sm:flex-row items-center justify-center gap-4 relative z-50">
        <span>Sedang melihat versi Full Katalog.</span>
        <div className="flex gap-4">
          <a href="/kopi-semesta" className="underline text-yellow-200 hover:text-white transition-colors">
            Versi Mini &rarr;
          </a>
          <a href="/kopi-semesta-basic" className="underline text-yellow-200 hover:text-white transition-colors">
            Versi Basic &rarr;
          </a>
        </div>
      </div>

      <AnchorNav 
        theme="coffee"
        sections={[
          { id: "hero", label: "Beranda" },
          { id: "profil", label: "Tentang" },
          { id: "katalog", label: "Katalog" },
          { id: "galeri", label: "Galeri" },
          { id: "testimoni", label: "Ulasan" },
          { id: "lokasi", label: "Lokasi" }
        ]}
        leftContent={AdminButton}
        rightContent={CartIcon}
      />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#3D2B1F]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1600" 
            alt="Suasana kedai kopi semesta" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <ScrollReveal direction="down">
            <RatingBadge rating={4.8} reviewCount={24} theme="coffee" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif text-[#F5EFE6] mt-6 mb-4 tracking-tight">Kopi Semesta</h1>
            <p className="text-lg md:text-xl text-[#F5EFE6]/90 mb-10 max-w-xl font-light mx-auto">
              Kini pesan kopi favoritmu lebih mudah langsung dari website. Order sekarang, ambil nanti atau dine-in!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => { document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" }) }}
              className="bg-[#D4A373] hover:bg-[#B36A5E] text-[#3D2B1F] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              Order Online <ShoppingBag size={20} />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. PROFIL USAHA DETAIL */}
      <section id="profil" className="py-24 px-4 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-serif mb-6 text-[#B36A5E]">Tentang Semesta</h2>
          <div className="mb-8">
            <StatusBadge theme="coffee" schedule={[
              { days: [1, 2, 3, 4], openHour: 8, closeHour: 22 },
              { days: [5, 6], openHour: 8, closeHour: 23 },
              { days: [0], openHour: 7, closeHour: 21 }
            ]} />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[#3D2B1F]/80 text-justify md:text-center">
            <p>
              Berawal dari kecintaan kami pada kopi lokal di tahun 2020, Kopi Semesta hadir sebagai tempat persinggahan yang nyaman di tengah hiruk-pikuk kota Bandung. Kami percaya bahwa setiap cangkir kopi memiliki cerita dan perjalanannya sendiri, dari tangan petani hingga sampai ke meja Anda.
            </p>
            <p>
              Kami menggunakan 100% biji kopi pilihan langsung dari petani Nusantara, disangrai dengan presisi oleh Roaster berpengalaman untuk menghasilkan cita rasa yang tak terlupakan di setiap tegukannya. Filosofi kami sederhana: menyajikan kopi berkualitas tinggi tanpa kompromi, dalam suasana yang membuat Anda merasa di rumah.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. KATALOG PRODUK (REACTIVE) */}
      <section id="katalog" className="py-24 px-4 bg-white/50 border-y border-[#E5D3B3]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4 text-[#3D2B1F]">Katalog Produk</h2>
            <p className="text-[#3D2B1F]/70 text-lg">Pilih menu favorit Anda dan langsung masukkan ke keranjang belanja.</p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {(["Semua", "Kopi", "Non-Kopi", "Snack"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-bold transition-colors ${
                    activeTab === tab 
                      ? "bg-[#3D2B1F] text-white shadow-md" 
                      : "bg-white text-[#3D2B1F]/70 border border-[#E5D3B3] hover:bg-[#F5EFE6]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={0.1 * (idx % 4)}>
                <StoreItemCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALERI SUASANA */}
      <section id="galeri" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-[#B36A5E]">Sudut Semesta</h2>
            <p className="text-[#3D2B1F]/70 text-lg">Intip suasana hangat yang menanti Anda di kedai kami.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <GalleryGrid 
              theme="coffee"
              aspectRatio="mixed"
              images={[
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. TESTIMONI */}
      <section id="testimoni" className="py-24 px-4 bg-[#3D2B1F] text-[#F5EFE6]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-[#D4A373]">Cerita Mereka</h2>
            <p className="text-[#F5EFE6]/70 text-lg max-w-2xl mx-auto">Apa kata mereka yang sudah pernah singgah dan berbagi cerita di Kopi Semesta.</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <TestimonialCard 
                name="Anya S."
                role="Mahasiswa"
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
                comment="Tempat nugas paling pewe di Bandung! Kopinya enak, wifinya kenceng, dan playlist lagunya selalu pas buat nemenin ngetik skripsi."
                rating={5}
                theme="coffee"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <TestimonialCard 
                name="Dimas Prakoso"
                role="Pekerja Kreatif"
                avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
                comment="Manual brewnya juara. Baristanya ramah dan ngerti banget soal biji kopi. Sering banget ke sini buat cari inspirasi atau sekadar ngobrol."
                rating={5}
                theme="coffee"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <TestimonialCard 
                name="Rina & Keluarga"
                role="Warga Lokal"
                avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
                comment="Weekend selalu mampir ke sini habis lari pagi. Suasananya tenang kalau pagi, cocok buat santai bareng keluarga. Kue coklatnya wajib coba!"
                rating={4}
                theme="coffee"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. LOKASI & KONTAK */}
      <section id="lokasi" className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-4xl font-serif mb-6 text-[#3D2B1F]">Singgah Sebentar</h2>
            <p className="text-[#3D2B1F]/70 text-lg mb-8 leading-relaxed">
              Kami berlokasi di jantung kota, mudah dijangkau namun cukup tersembunyi dari bisingnya jalan raya. Mari mampir, ada kopi hangat yang menunggu.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-[#D4A373]/20 p-3 rounded-full text-[#B36A5E]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Alamat</h4>
                  <p className="text-[#3D2B1F]/70">Jl. Braga No.99, Sumur Bandung<br/>Kota Bandung, Jawa Barat 40111</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#D4A373]/20 p-3 rounded-full text-[#B36A5E]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Jam Buka</h4>
                  <p className="text-[#3D2B1F]/70">Senin - Kamis: 08.00 - 22.00<br/>Jumat - Sabtu: 08.00 - 23.00<br/>Minggu: 07.00 - 21.00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#E5D3B3] shadow-sm">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Info size={20} className="text-[#B36A5E]" />
                Reservasi Tempat
              </h4>
              <p className="text-sm text-[#3D2B1F]/70 mb-4">
                Ingin booking meja untuk meeting atau acara kecil? Hubungi kami langsung via WhatsApp.
              </p>
              <ReservationForm phoneNumber={DUMMY_WA} />
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" className="h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573117!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714561234567!5m2!1sen!2sid" />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-4 bg-white/50 border-t border-[#E5D3B3]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4 text-[#3D2B1F]">Pertanyaan Umum</h2>
            <p className="text-[#3D2B1F]/70">Hal-hal yang sering ditanyakan oleh Sahabat Semesta.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <FAQAccordion 
              theme="coffee"
              items={[
                { question: "Apakah Kopi Semesta menyediakan area smoking?", answer: "Ya, kami memiliki area semi-outdoor di bagian belakang khusus untuk smoking area yang cukup sejuk dan luas." },
                { question: "Ada wifi dan colokan ngga buat nugas?", answer: "Tentu! Kami menyediakan WiFi berkecepatan tinggi gratis untuk pelanggan, dan hampir setiap meja dilengkapi dengan stop kontak." },
                { question: "Bisa bayar pakai QRIS/Debit?", answer: "Bisa banget. Kami menerima pembayaran via QRIS, kartu debit/kredit, dan e-wallet utama. Pembayaran cash juga tetap dilayani." },
                { question: "Apakah order online lewat web ini bisa dikirim ke rumah?", answer: "Saat ini order online via website khusus untuk Pick-up (Ambil di Toko) atau pemesanan dari meja untuk Dine-in." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#2C1E16] text-[#F5EFE6] py-12 px-4 border-t border-[#3D2B1F]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-[#D4A373]">Kopi Semesta</h3>
            <p className="text-[#F5EFE6]/60 max-w-xs mx-auto md:mx-0">
              Menyeduh cerita, merajut asa, satu cangkir kopi dalam satu waktu.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4A373]">Tautan Cepat</h4>
            <ul className="space-y-2 text-[#F5EFE6]/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#katalog" className="hover:text-white transition-colors">Katalog & Order</a></li>
              <li><a href="#galeri" className="hover:text-white transition-colors">Galeri</a></li>
              <li><a href="/kopi-semesta-full/admin" className="hover:text-white font-bold text-[#B36A5E] transition-colors mt-2 inline-block">Login Admin &rarr;</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4A373]">Temukan Kami</h4>
            <p className="text-[#F5EFE6]/70 mb-4">Ikuti perjalanan kami dan dapatkan info promo terbaru di sosial media.</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center hover:bg-[#B36A5E] transition-colors">
                <span className="sr-only">Instagram</span>
                <Coffee size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#3D2B1F] flex items-center justify-center hover:bg-[#B36A5E] transition-colors">
                <span className="sr-only">Facebook</span>
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-[#F5EFE6]/40 text-sm pt-8 border-t border-[#3D2B1F]">
          &copy; {new Date().getFullYear()} Kopi Semesta. Dibuat dengan cinta. (Ini adalah demo website UMKM)
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-24 right-6 z-40 bg-white px-3 py-1.5 rounded-full shadow-md text-xs font-bold text-gray-500 border border-gray-100 flex items-center gap-2 animate-bounce">
        <span className="w-2 h-2 rounded-full bg-green-500"></span> Admin membalas dlm 5 mnt
      </div>
      <FloatingWhatsApp phoneNumber={DUMMY_WA} message="Halo Kopi Semesta! Saya mau pesan kopi nih." />
    </div>
  );
}

