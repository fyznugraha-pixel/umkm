import React from "react";
import { Metadata } from "next";
import { MessageCircle, Clock, MapPin } from "lucide-react";
import ItemCard from "@/components/demo/ItemCard";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import { FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Kopi Semesta | Kedai Kopi Lokal",
  description: "Menyajikan kopi terbaik untuk menemani cerita Anda.",
  robots: "noindex, nofollow", // Penting untuk halaman demo fiktif
};

const DUMMY_WA = "6280000000000";

export default function KopiSemestaDemo() {
  return (
    <div className="bg-[#F5EFE6] min-h-screen text-[#3D2B1F] font-sans pb-10">
      {/* BANNER COMPARISON */}
      <div className="bg-[#D4A373] text-[#3D2B1F] py-3 px-4 text-center text-sm font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span>Sedang melihat versi Mini Landing Page.</span>
        <a href="/demo/kopi-semesta-basic" className="underline hover:text-white transition-colors">
          Lihat versi Basic UMKM Website dari Kopi Semesta &rarr;
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#3D2B1F]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1600" 
            alt="Suasana kedai kopi semesta" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#F5EFE6] mb-4 tracking-tight">Kopi Semesta</h1>
          <p className="text-lg md:text-xl text-[#F5EFE6]/90 mb-8 max-w-xl font-light">
            Ruang hangat untuk berbagi cerita, ditemani secangkir kopi yang diseduh dari hati.
          </p>
          <a 
            href={`https://wa.me/${DUMMY_WA}?text=Halo%20Kopi%20Semesta,%20saya%20ingin%20pesan`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#D4A373] hover:bg-[#B36A5E] text-[#3D2B1F] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-lg shadow-lg"
          >
            Pesan Sekarang <MessageCircle size={20} />
          </a>
        </div>
      </section>

      {/* 2. PROFIL USAHA */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6 text-[#B36A5E]">Tentang Semesta</h2>
        <p className="text-lg leading-relaxed mb-10 text-[#3D2B1F]/80">
          Berawal dari kecintaan kami pada kopi lokal, Kopi Semesta hadir sebagai tempat persinggahan yang nyaman di tengah hiruk-pikuk kota. Kami menggunakan biji kopi pilihan langsung dari petani Nusantara, disangrai dengan presisi untuk menghasilkan cita rasa yang tak terlupakan di setiap tegukannya.
        </p>
        
        <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-white p-6 rounded-2xl shadow-sm border border-[#E5D3B3]">
          <div className="flex items-center gap-3 text-[#3D2B1F]">
            <Clock className="text-[#D4A373]" />
            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#B36A5E]">Jam Buka</p>
              <p>Setiap Hari: 08.00 - 22.00 WIB</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#E5D3B3]"></div>
          <div className="flex items-center gap-3 text-[#3D2B1F]">
            <MapPin className="text-[#D4A373]" />
            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#B36A5E]">Area</p>
              <p>Bandung, Jawa Barat</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUK UNGGULAN */}
      <section className="py-20 px-4 bg-white/50 border-y border-[#E5D3B3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4 text-[#3D2B1F]">Racikan Andalan</h2>
            <p className="text-[#3D2B1F]/70">Menu favorit yang selalu jadi incaran pelanggan kami.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ItemCard 
              title="Es Kopi Susu Semesta"
              price="Rp 22.000"
              description="Perpaduan espresso arabika, susu segar, dan gula aren organik rahasia."
              image="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"
            />
            <ItemCard 
              title="Latte Hangat"
              price="Rp 25.000"
              description="Espresso pekat dengan steamed milk lembut dan latte art cantik."
              image="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600"
            />
            <ItemCard 
              title="Kue Coklat Lumer"
              price="Rp 18.000"
              description="Teman minum kopi terbaik, brownies panggang dengan coklat lumer di dalam."
              image="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600"
            />
          </div>
        </div>
      </section>

      {/* 4. INFO KONTAK & LOKASI */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-6 text-[#B36A5E]">Mari Berkunjung</h2>
          <p className="mb-8 text-[#3D2B1F]/80">
            Temukan Kopi Semesta di sudut kota. Jangan ragu untuk reservasi tempat jika Anda datang bersama rombongan.
          </p>
          
          <div className="space-y-4">
            <a href={`https://wa.me/${DUMMY_WA}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E5D3B3] hover:border-[#D4A373] transition-colors group">
              <div className="w-12 h-12 bg-[#D4A373]/20 text-[#D4A373] rounded-full flex items-center justify-center group-hover:bg-[#D4A373] group-hover:text-white transition-colors">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#B36A5E]">WhatsApp</p>
                <p className="text-[#3D2B1F]">+62 800 0000 0000</p>
              </div>
            </a>
            
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E5D3B3] hover:border-[#D4A373] transition-colors group">
              <div className="w-12 h-12 bg-[#D4A373]/20 text-[#D4A373] rounded-full flex items-center justify-center group-hover:bg-[#D4A373] group-hover:text-white transition-colors">
                <FaInstagram size={24} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#B36A5E]">Instagram</p>
                <p className="text-[#3D2B1F]">@kopisemesta.dummy</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573117!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714561234567!5m2!1sen!2sid" />
          <p className="text-sm text-center text-[#3D2B1F]/60">Jl. Braga No.99, Bandung, Jawa Barat</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-10 pb-8 text-center border-t border-[#E5D3B3]/50">
        <p className="font-serif text-xl text-[#3D2B1F] mb-2">Kopi Semesta</p>
        <p className="text-sm text-[#3D2B1F]/60">
          &copy; {new Date().getFullYear()} Kopi Semesta. Hak Cipta Dilindungi.
        </p>
      </footer>

      {/* GLOBAL DEMO COMPONENTS */}
      <FloatingWhatsApp phoneNumber={DUMMY_WA} message="Halo Kopi Semesta!" />
      <DemoWatermark />
    </div>
  );
}
