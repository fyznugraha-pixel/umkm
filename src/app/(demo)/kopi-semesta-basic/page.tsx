import React from "react";
import { Metadata } from "next";
import { MessageCircle, Clock, MapPin, Menu as MenuIcon, Coffee, Utensils } from "lucide-react";
import ItemCard from "@/components/demo/ItemCard";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
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
import { FaInstagram } from "react-icons/fa";

// 1. ADVANCED SEO (Basic Tier Feature)
export const metadata: Metadata = {
  title: "Kopi Semesta - Kedai Kopi Spesialti di Bandung",
  description: "Ruang hangat untuk berbagi cerita dengan seduhan kopi terbaik dari biji Nusantara pilihan. Kunjungi Kopi Semesta di Bandung.",
  robots: "noindex, nofollow", // Untuk demo tetap noindex
  openGraph: {
    title: "Kopi Semesta | Kedai Kopi Lokal",
    description: "Ruang hangat untuk berbagi cerita, ditemani secangkir kopi yang diseduh dari hati.",
    url: "https://example.com/kopi-semesta",
    siteName: "Kopi Semesta",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

// JSON-LD Structured Data for Local SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Kopi Semesta",
  "image": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
  "@id": "https://example.com/kopi-semesta",
  "url": "https://example.com/kopi-semesta",
  "telephone": "+6280000000000",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Braga No.99",
    "addressLocality": "Bandung",
    "addressRegion": "Jawa Barat",
    "postalCode": "40111",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.9034443,
    "longitude": 107.573117
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/kopisemesta.dummy"
  ]
};

const DUMMY_WA = "6280000000000";

export default function KopiSemestaBasicDemo() {
  return (
    <div className="bg-[#F5EFE6] min-h-screen text-[#3D2B1F] font-sans pb-10">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* MARQUEE PROMO */}
      <Marquee text="PROMO SPESIAL: DISKON 20% UNTUK PELAJAR & MAHASISWA DENGAN MENUNJUKKAN KARTU PELAJAR • ENJOY LIVE ACOUSTIC SETIAP JUMAT MALAM PKL 19.00" speed={25} />

      {/* BANNER COMPARISON */}
      <div className="bg-[#B36A5E] text-white py-3 px-4 text-center text-sm font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span>Sedang melihat versi Basic UMKM Website.</span>
        <a href="/kopi-semesta" className="underline text-yellow-200 hover:text-white transition-colors">
          Lihat versi Mini Landing Page dari Kopi Semesta &rarr;
        </a>
      </div>

      <AnchorNav 
        theme="coffee"
        sections={[
          { id: "hero", label: "Beranda" },
          { id: "profil", label: "Tentang" },
          { id: "menu", label: "Menu" },
          { id: "galeri", label: "Galeri" },
          { id: "testimoni", label: "Ulasan" },
          { id: "lokasi", label: "Lokasi" }
        ]} 
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
              Ruang hangat untuk berbagi cerita, ditemani secangkir kopi yang diseduh dari hati.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${DUMMY_WA}?text=Halo%20Kopi%20Semesta,%20saya%20ingin%20pesan`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#D4A373] hover:bg-[#B36A5E] text-[#3D2B1F] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              Pesan Sekarang <MessageCircle size={20} />
            </a>
            <a 
              href="#menu"
              className="bg-transparent border border-[#F5EFE6]/50 hover:border-[#F5EFE6] text-[#F5EFE6] font-semibold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Lihat Menu Lengkap <MenuIcon size={20} />
            </a>
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

      {/* 3. MENU LENGKAP */}
      <section id="menu" className="py-24 px-4 bg-white/50 border-y border-[#E5D3B3]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-[#3D2B1F]">Katalog Rasa</h2>
            <p className="text-[#3D2B1F]/70 text-lg">Jelajahi sajian terbaik yang disiapkan sepenuh hati oleh barista kami.</p>
          </ScrollReveal>
          
          {/* Category: Kopi */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E5D3B3]">
              <Coffee className="text-[#D4A373]" size={28} />
              <h3 className="text-2xl font-bold uppercase tracking-wider">Kopi & Susu</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ItemCard 
                title="Es Kopi Susu Semesta" price="Rp 22.000"
                description="Signature drink: Espresso arabika, susu segar, dan gula aren organik."
                image="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"
              />
              <ItemCard 
                title="Latte Hangat" price="Rp 25.000"
                description="Espresso pekat dengan steamed milk lembut dan latte art cantik."
                image="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600"
              />
              <ItemCard 
                title="Japanese Iced Filter" price="Rp 28.000"
                description="Manual brew dingin dengan biji kopi single origin pilihan musiman."
                image="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600"
              />
              <ItemCard 
                title="Caramel Macchiato" price="Rp 30.000"
                description="Perpaduan sempurna espresso, vanilla, susu, dan saus karamel."
                image="https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600"
              />
            </div>
          </div>

          {/* Category: Snack */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E5D3B3]">
              <Utensils className="text-[#D4A373]" size={28} />
              <h3 className="text-2xl font-bold uppercase tracking-wider">Teman Seduh</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ItemCard 
                title="Kue Coklat Lumer" price="Rp 18.000"
                description="Brownies panggang dengan coklat lumer di dalam, disajikan hangat."
                image="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600"
              />
              <ItemCard 
                title="Croissant Butter" price="Rp 20.000"
                description="Classic french pastry yang renyah di luar dan lembut di dalam."
                image="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
              />
              <ItemCard 
                title="Pizza Pepperoni" price="Rp 35.000"
                description="Pizza tipis renyah dengan taburan pepperoni dan keju mozzarella, cocok untuk sharing."
                image="https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600"
              />
              <ItemCard 
                title="Donat Kampung Aren" price="Rp 12.000"
                description="Donat klasik empuk dengan taburan gula aren asli."
                image="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={`https://wa.me/${DUMMY_WA}?text=Halo%20Kopi%20Semesta,%20saya%20ingin%20pesan%20menu`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[#B36A5E] hover:text-[#3D2B1F] transition-colors border-b-2 border-[#B36A5E] hover:border-[#3D2B1F] pb-1"
            >
              Pesan Menu Sekarang via WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 4. GALERI (Baru di Tier Basic) */}
      <section id="galeri" className="py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-[#3D2B1F]">Sudut Semesta</h2>
          <p className="text-[#3D2B1F]/70 text-lg">Intip suasana nyaman di kedai kami, tempat di mana ide dan cerita bermula.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <GalleryGrid images={[
            { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800", caption: "Suasana Interior" },
            { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", caption: "Area Duduk Santai" },
            { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", caption: "Sudut Produktif" },
            { src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=800", caption: "Ruang Bersama" },
            { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800", caption: "Barista Action" },
            { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800", caption: "Tim Barista Kami" },
            { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800", caption: "Tempat Favorit" },
            { src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800", caption: "Manual Brew Station" },
          ]} />
        </ScrollReveal>
      </section>

      {/* 5. TESTIMONI (Baru di Tier Basic) */}
      <section id="testimoni" className="py-24 px-4 bg-[#3D2B1F] text-[#F5EFE6]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-[#D4A373]">Kata Mereka</h2>
            <p className="text-white/70 text-lg">Pengalaman nyata dari mereka yang telah singgah di Kopi Semesta.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Budi Santoso"
              role="Freelancer"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
              comment="Tempat pewe banget buat nugas. Kopi susunya juara, kopinya kerasa banget tapi gak bikin kembung. Croissant-nya juga fresh!"
              rating={5}
            />
            <TestimonialCard 
              name="Siti Aminah"
              role="Mahasiswa"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
              comment="Vibes kedainya tuh dapet banget buat chill sore bareng temen. Playlist lagunya enak, baristanya ramah, harganya juga affordable."
              rating={5}
            />
            <TestimonialCard 
              name="Andi Darmawan"
              role="Coffee Enthusiast"
              avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
              comment="Manual brewnya diseduh dengan proper. Variasi beans-nya lumayan banyak untuk kedai sekelas UMKM. Definitely will come back."
              rating={4}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 6 & 7. LOKASI, JAM BUKA & KONTAK (Lebih Detail) */}
      <section id="lokasi" className="py-24 px-4 max-w-7xl mx-auto">
        <ScrollReveal className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col h-full">
            <h2 className="text-4xl font-serif mb-6 text-[#B36A5E]">Mari Berkunjung</h2>
            <p className="mb-10 text-[#3D2B1F]/80 text-lg">
              Kami siap menyambut Anda. Jangan ragu untuk melakukan reservasi tempat jika Anda berencana datang bersama rombongan agar kami dapat menyiapkan meja terbaik.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E5D3B3]">
                <div className="flex items-center gap-3 mb-4 text-[#B36A5E]">
                  <Clock size={24} />
                  <h3 className="font-bold uppercase tracking-wider text-sm">Jam Operasional</h3>
                </div>
                <ul className="space-y-2 text-[#3D2B1F]">
                  <li className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-500">Senin - Kamis</span>
                    <span className="font-bold">08.00 - 22.00</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-500">Jumat - Sabtu</span>
                    <span className="font-bold">08.00 - 23.00</span>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span className="text-gray-500">Minggu</span>
                    <span className="font-bold text-[#B36A5E]">07.00 - 21.00</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <a href={`https://wa.me/${DUMMY_WA}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#E5D3B3] hover:border-[#D4A373] transition-colors group">
                  <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">WhatsApp CS</p>
                    <p className="font-medium">Reservasi & Delivery</p>
                  </div>
                </a>
                
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#E5D3B3] hover:border-[#D4A373] transition-colors group">
                  <div className="w-12 h-12 bg-[#E1306C]/10 text-[#E1306C] rounded-full flex items-center justify-center group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                    <FaInstagram size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Instagram</p>
                    <p className="font-medium">Katalog & Promo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573117!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714561234567!5m2!1sen!2sid" />
            <div className="flex gap-3 bg-white p-4 rounded-xl border border-[#E5D3B3]">
              <MapPin className="text-[#B36A5E] shrink-0 mt-1" />
              <p className="text-[#3D2B1F]/80">
                <span className="font-bold block mb-1 text-[#3D2B1F]">Kopi Semesta Braga</span>
                Jl. Braga No.99, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 8. RESERVATION FORM (New Basic Tier Feature) */}
      <section className="py-24 px-4 bg-[#3D2B1F] text-[#F5EFE6] border-y border-[#E5D3B3]/20">
        <ScrollReveal className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6 text-[#D4A373]">Reservasi Meja Anda</h2>
            <p className="text-[#F5EFE6]/80 text-lg mb-8 leading-relaxed">
              Pastikan Anda mendapatkan tempat terbaik untuk momen spesial Anda. Silakan isi formulir di samping, dan sistem kami akan langsung menghubungkan Anda ke WhatsApp Admin untuk konfirmasi ketersediaan.
            </p>
            
            {/* MEET THE TEAM */}
            <div className="bg-[#2A1D15] p-6 rounded-2xl border border-[#D4A373]/20 mt-12">
              <h3 className="font-bold text-[#D4A373] uppercase tracking-wider mb-6 text-sm">Bertemu dengan Tim Kami</h3>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Head Barista" className="w-16 h-16 rounded-full object-cover border-2 border-[#D4A373]" />
                <div>
                  <p className="font-bold text-lg">Dimas Pradipta</p>
                  <p className="text-sm text-[#F5EFE6]/60">Head Roaster & Co-Founder</p>
                </div>
              </div>
              <p className="mt-4 text-[#F5EFE6]/70 italic text-sm">"Kami berdedikasi menyeduh setiap cangkir dengan presisi. Sampai jumpa di Semesta!"</p>
            </div>
          </div>
          
          <div>
            <ReservationForm phoneNumber={DUMMY_WA} />
          </div>
        </ScrollReveal>
      </section>

      {/* 9. FAQ ACCORDION (New Basic Tier Feature) */}
      <section className="py-24 px-4 max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-[#B36A5E]">Pertanyaan Umum</h2>
          <p className="text-[#3D2B1F]/70 text-lg">Hal-hal yang sering ditanyakan pengunjung Kopi Semesta.</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <FAQAccordion items={[
          {
            question: "Apakah Kopi Semesta menyediakan area smoking?",
            answer: "Tentu! Kami memiliki area semi-outdoor di bagian belakang yang sejuk dan nyaman khusus untuk pengunjung yang ingin merokok."
          },
          {
            question: "Metode pembayaran apa saja yang diterima?",
            answer: "Kami menerima pembayaran tunai, QRIS, kartu debit/kredit, serta transfer bank (BCA, Mandiri)."
          },
          {
            question: "Apakah kedai ini pet-friendly?",
            answer: "Ya, kami sangat ramah terhadap hewan peliharaan! Anda boleh membawa anjing atau kucing peliharaan ke area outdoor kami, asalkan tetap dijaga dan menggunakan tali leashes."
          },
          {
            question: "Bisa booking untuk acara privat atau ulang tahun?",
            answer: "Bisa sekali. Anda dapat menyewa sebagian atau seluruh area kedai kami. Silakan gunakan formulir reservasi di atas dan cantumkan detail acara Anda di kolom catatan."
          }
        ]} />
        </ScrollReveal>
      </section>

      {/* FOOTER */}
      <footer className="pt-12 pb-8 text-center border-t border-[#E5D3B3]/50 bg-white">
        <p className="font-serif text-2xl text-[#3D2B1F] mb-3">Kopi Semesta</p>
        <p className="text-sm text-[#3D2B1F]/60 max-w-md mx-auto mb-6">
          Menyeduh cerita, menyatukan rasa. Buka setiap hari untuk menemani perjalanan Anda.
        </p>
        <p className="text-xs text-[#3D2B1F]/40 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Kopi Semesta. Hak Cipta Dilindungi.
        </p>
      </footer>

      {/* GLOBAL DEMO COMPONENTS */}
      <FloatingWhatsApp phoneNumber={DUMMY_WA} message="Halo Kopi Semesta!" />
      <DemoWatermark />
    </div>
  );
}
