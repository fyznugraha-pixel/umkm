import React from "react";
import { Metadata } from "next";
import { MessageCircle, MapPin, ArrowRight } from "lucide-react";
import ItemCard from "@/components/demo/ItemCard";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import { FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Ruang & Rupa | Official Store",
  description: "Eksplorasi gaya tanpa batas dengan koleksi eksklusif Ruang & Rupa.",
  robots: "noindex, nofollow",
};

const DUMMY_WA = "6280000000000";
const ACCENT_COLOR = "#C34A36";

export default function RuangRupaDemo() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#111111] font-sans selection:bg-[#C34A36] selection:text-white pb-10">
      {/* BANNER COMPARISON */}
      <div className="bg-[#111111] text-white py-3 px-4 text-center text-sm font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-gray-400">Sedang melihat versi Mini Landing Page.</span>
        <a href="/ruang-rupa-basic" className="underline hover:text-[#C34A36] transition-colors">
          Lihat versi Basic UMKM Website dari Ruang & Rupa &rarr;
        </a>
      </div>

      {/* 1. HERO SECTION (SPLIT SCREEN / EDITORIAL) */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0 z-10 bg-[#FAFAFA]">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Ruang<br/><span className="text-[#C34A36]">&</span> Rupa
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-md font-light leading-relaxed">
            Identitas dalam setiap jahitan. Koleksi pakaian esensial untuk jiwa modern yang dinamis.
          </p>
          <a 
            href={`https://wa.me/${DUMMY_WA}?text=Halo%20Ruang%20&%20Rupa,%20saya%20ingin%20konsultasi%20style`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#C34A36] text-white font-bold uppercase tracking-widest px-8 py-5 transition-all w-max"
          >
            Chat Personal Shopper
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
        </div>
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" 
            alt="Koleksi terbaru Ruang & Rupa" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. PROFIL (FILOSOFI BRAND) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="w-full md:w-5/12 aspect-[4/5] relative">
          <img 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800" 
            alt="Proses jahit Ruang & Rupa" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 w-3/4 aspect-[4/5] border border-[#111111] -z-10 hidden md:block"></div>
        </div>
        <div className="w-full md:w-7/12">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Filosofi</h2>
          <p className="text-2xl md:text-4xl font-light leading-snug mb-8">
            Bukan sekadar pakaian, tapi <span className="font-bold">kanvas berekspresi</span>. Didesain secara eksklusif dan dijahit langsung di studio kami di Bandung dengan material katun organik pilihan.
          </p>
          <div className="h-px w-24 bg-[#C34A36]"></div>
        </div>
      </section>

      {/* 3. PRODUK UNGGULAN (ASYMMETRIC GRID) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">Koleksi <span className="text-[#C34A36]">Esensial</span></h2>
              <p className="text-gray-500">Artikel terbaik yang wajib ada di lemari Anda.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Asymmetrical layout: span 5, span 7, span 6, span 6 */}
            <div className="md:col-span-5 md:mt-24">
              <ItemCard 
                title="Kemeja Oversized Noir"
                price="Rp 399.000"
                description="Potongan longgar berbahan katun linen yang sejuk. Sangat versatile untuk acara kasual maupun semi-formal."
                image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600"
                aspectRatio="portrait"
                theme="fashion"
                ctaText="Tanya Stok"
                ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Kemeja%20Oversized%20Noir%20masih%20tersedia?`}
              />
            </div>
            
            <div className="md:col-span-7">
              <ItemCard 
                title="Celana Kulot Earth"
                price="Rp 349.000"
                description="Nyaman sepanjang hari dengan material organik jatuh yang memberikan siluet ramping."
                image="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
                aspectRatio="portrait"
                theme="fashion"
                ctaText="Tanya Stok"
                ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Celana%20Kulot%20Earth%20masih%20tersedia?`}
              />
            </div>
            
            <div className="md:col-span-4 md:col-start-3">
              <ItemCard 
                title="Blazer Terracotta"
                price="Rp 549.000"
                description="Outerwear statement untuk elevasi gaya seketika. Dilengkapi detail saku tersembunyi."
                image="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80&w=600"
                aspectRatio="portrait"
                theme="fashion"
                ctaText="Tanya Stok"
                ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Blazer%20Terracotta%20masih%20tersedia?`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INFO KONTAK & LOKASI (STUDIO) */}
      <section className="py-24 px-6 md:px-16 lg:px-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Hubungi <span className="text-[#C34A36]">Kami</span></h2>
            <p className="text-gray-400 mb-12 max-w-md font-light leading-relaxed">
              Punya pertanyaan mengenai ukuran, bahan, atau custom order? Tim kami siap membantu Anda dari studio.
            </p>
            
            <div className="space-y-6">
              <a href={`https://wa.me/${DUMMY_WA}`} target="_blank" rel="noreferrer" className="flex items-center gap-6 group w-max">
                <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center group-hover:bg-[#C34A36] transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">WhatsApp CS</p>
                  <p className="text-lg font-medium group-hover:text-[#C34A36] transition-colors">+62 800 0000 0000</p>
                </div>
              </a>
              
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-6 group w-max">
                <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center group-hover:bg-[#C34A36] transition-colors">
                  <FaInstagram size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Katalog & Lookbook</p>
                  <p className="text-lg font-medium group-hover:text-[#C34A36] transition-colors">@ruangrupa.official</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C34A36] -z-10"></div>
            <div className="bg-white p-2">
              <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573117!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714561234567!5m2!1sen!2sid" />
            </div>
            <div className="mt-4 flex gap-3 items-start">
              <MapPin className="text-[#C34A36] shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold uppercase tracking-wider text-sm mb-1">Creative Studio & Workshop</p>
                <p className="text-gray-400 text-sm">Jl. Buah Batu No.123, Bandung, Jawa Barat (Hanya dengan Perjanjian)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#111111] text-center border-t border-white/10">
        <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Ruang & Rupa</h2>
        <p className="text-sm text-gray-500 mb-6">
          &copy; {new Date().getFullYear()} Ruang & Rupa. All rights reserved.
        </p>
      </footer>

      {/* GLOBAL DEMO COMPONENTS */}
      <FloatingWhatsApp 
        phoneNumber={DUMMY_WA} 
        message="Halo Ruang & Rupa, saya mau tanya produk" 
        bgColor="bg-[#C34A36]"
        hoverColor="hover:bg-[#A33D2D]"
      />
      <DemoWatermark />
    </div>
  );
}
