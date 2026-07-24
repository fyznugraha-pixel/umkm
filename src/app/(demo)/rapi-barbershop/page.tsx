import React from "react";
import { Metadata } from "next";
import { MessageCircle, MapPin, Clock, Scissors, CalendarCheck } from "lucide-react";
import ItemCard from "@/components/demo/ItemCard";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import { FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "RAPI Barbershop",
  description: "Bukan sekadar potong rambut, ini tentang mengembalikan kepercayaan diri Anda.",
  robots: "noindex, nofollow",
};

const DUMMY_WA = "6280000000000";
const ACCENT_COLOR = "bg-[#E63946]";

export default function RapiBarbershopDemo() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-gray-300 font-sans selection:bg-[#E63946] selection:text-white pb-10">
      
      {/* BANNER COMPARISON */}
      <div className="bg-[#1A1A1A] border-b border-[#333333] text-gray-300 py-3 px-4 text-center text-sm font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-gray-500">Sedang melihat versi Mini Landing Page.</span>
        <a href="/rapi-barbershop-basic" className="text-white underline hover:text-[#E63946] transition-colors">
          Lihat versi Basic UMKM Website &rarr;
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#333333]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1600" 
            alt="Suasana RAPI Barbershop" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#333333] text-gray-400 text-sm font-bold tracking-widest uppercase mb-6 rounded-sm">
            <Scissors size={14} /> Premium Grooming
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            RAPI <span className="text-[#E63946]">Barbershop</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
            Bukan sekadar potong rambut. Kami mengembalikan versi terbaik dan kepercayaan diri Anda.
          </p>
          <a 
            href={`https://wa.me/${DUMMY_WA}?text=Halo%20RAPI%20Barbershop,%20saya%20mau%20booking%20jadwal`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#E63946] hover:bg-[#D90429] text-white font-black uppercase tracking-wider px-10 py-5 transition-transform hover:scale-105 flex items-center gap-3 text-lg"
          >
            <CalendarCheck size={24} /> Booking via WhatsApp
          </a>
        </div>
      </section>

      {/* 2. PROFIL USAHA & JAM OPERASIONAL */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Tradisi & <br/><span className="text-[#E63946]">Presisi</span></h2>
            <p className="text-lg leading-relaxed text-gray-400 mb-6">
              Berdiri sejak 2018, RAPI Barbershop didedikasikan untuk pria modern yang menghargai kualitas. Dengan kapster berpengalaman dan peralatan standar premium, kami memastikan setiap potongan rambut dan cukuran jenggot dieksekusi dengan tingkat presisi tertinggi.
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] p-8 border-l-4 border-[#E63946] shadow-2xl">
            <div className="flex items-center gap-4 mb-6 text-white">
              <Clock size={32} className="text-[#E63946]" />
              <h3 className="text-2xl font-bold uppercase tracking-wider">Jam Operasional</h3>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex justify-between border-b border-[#333333] pb-2">
                <span className="text-gray-400">Senin - Jumat</span>
                <span className="font-bold text-white">10.00 - 21.00</span>
              </li>
              <li className="flex justify-between border-b border-[#333333] pb-2">
                <span className="text-gray-400">Sabtu - Minggu</span>
                <span className="font-bold text-white">09.00 - 22.00</span>
              </li>
              <li className="flex justify-between pt-2 text-[#E63946] font-bold">
                <span>Hari Libur Nasional</span>
                <span>TETAP BUKA</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN & HARGA */}
      <section className="py-24 px-6 bg-[#111111] border-y border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Layanan <span className="text-[#E63946]">Kami</span></h2>
            <p className="text-gray-400 text-lg">Pilih perawatan yang paling sesuai dengan kebutuhan Anda hari ini.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ItemCard 
              title="Premium Haircut"
              price="Rp 70.000"
              duration="45 Menit"
              description="Konsultasi gaya, potong rambut presisi, cuci rambut air hangat, pijat ringan, dan styling pomade premium."
              image="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square"
              theme="barber"
              ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20saya%20mau%20booking%20Premium%20Haircut`}
            />
            <ItemCard 
              title="Gentleman Shave"
              price="Rp 50.000"
              duration="30 Menit"
              description="Cukur kumis dan jenggot tradisional menggunakan handuk hangat (hot towel) dan pisau cukur tajam presisi."
              image="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square"
              theme="barber"
              ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20saya%20mau%20booking%20Gentleman%20Shave`}
            />
            <ItemCard 
              title="Full Grooming Package"
              price="Rp 150.000"
              duration="90 Menit"
              description="Paket lengkap: Haircut, Shaving, Hair Spa/Creambath, pijat kepala dan pundak intensif, serta black mask."
              image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square"
              theme="barber"
              ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20saya%20mau%20booking%20Full%20Grooming%20Package`}
            />
          </div>
        </div>
      </section>

      {/* 4. INFO KONTAK & LOKASI */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Lokasi <span className="text-[#E63946]">Kamise</span></h2>
          <p className="text-gray-400 mb-10 text-lg">
            Tempat kami dirancang untuk privasi dan kenyamanan pria sejati. Area parkir luas dan ruang tunggu ber-AC dengan free WiFi.
          </p>
          
          <div className="bg-[#1A1A1A] p-6 border border-[#333333] mb-8">
            <div className="flex gap-4 items-start mb-6">
              <MapPin className="text-[#E63946] shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold text-white text-xl uppercase tracking-wider mb-2">RAPI Barbershop Pusat</p>
                <p className="text-gray-400 leading-relaxed">Jl. Sudirman No. 45, Kecamatan Pusat Kota, Jakarta Selatan, 12345 (Samping Kedai Kopi Semesta)</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`https://wa.me/${DUMMY_WA}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white text-[#0A0A0A] font-bold uppercase tracking-wider px-6 py-4 hover:bg-gray-200 transition-colors">
              <MessageCircle size={20} /> Chat Admin
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#1A1A1A] text-white border border-[#333333] font-bold uppercase tracking-wider px-6 py-4 hover:border-gray-500 transition-colors">
              <FaInstagram size={20} /> @rapibarbershop
            </a>
          </div>
        </div>
        
        <div className="w-full bg-[#1A1A1A] p-2 border border-[#333333]">
          <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573117!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714561234567!5m2!1sen!2sid" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#050505] text-center border-t border-[#333333]">
        <h2 className="text-3xl font-black uppercase tracking-widest text-[#333333] mb-4">RAPI BARBERSHOP</h2>
        <p className="text-sm text-gray-600 mb-6 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Rapi Barbershop.
        </p>
      </footer>

      {/* GLOBAL DEMO COMPONENTS */}
      <FloatingWhatsApp 
        phoneNumber={DUMMY_WA} 
        message="Halo RAPI Barbershop, saya mau reservasi potong rambut" 
        bgColor="bg-[#E63946]"
        hoverColor="hover:bg-[#D90429]"
        label="Booking Sekarang"
      />
      <DemoWatermark />
    </div>
  );
}
