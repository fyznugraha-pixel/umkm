"use client";

import React from "react";
import Link from "next/link";
import { businessData } from "./data";
import { useBooking } from "@/components/demo/booking/BookingContext";
import AnchorNav from "@/components/demo/AnchorNav";
import ItemCard from "@/components/demo/ItemCard";
import MapEmbed from "@/components/demo/MapEmbed";
import GalleryGrid from "@/components/demo/GalleryGrid";
import TestimonialCard from "@/components/demo/TestimonialCard";
import FAQAccordion from "@/components/demo/FAQAccordion";
import { Scissors, MapPin, Phone, CheckCircle2, ArrowLeft, Calendar, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RapiBarbershopFull() {
  const { services } = useBooking();

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-gray-300 font-sans selection:bg-[#E63946] selection:text-white pb-10">
      
      <AnchorNav 
        theme="barber"
        sections={[
          { id: "hero", label: "Beranda" },
          { id: "profil", label: "Tradisi" },
          { id: "layanan", label: "Layanan" },
          { id: "testimoni", label: "Ulasan" },
          { id: "galeri", label: "Portofolio" },
          { id: "faq", label: "FAQ" },
          { id: "lokasi", label: "Lokasi" }
        ]}
        leftContent={
          <Link href="/demo/rapi-barbershop-full/admin" className="text-xs text-red-500/50 hover:text-red-500 transition-colors uppercase tracking-widest font-bold ml-4">
            Admin
          </Link>
        }
      />
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#333333]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1600" 
            alt="Suasana RAPI Barbershop" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#333333] text-gray-400 text-sm font-bold tracking-widest uppercase mb-6 rounded-sm">
              <Scissors size={14} /> Premium Grooming
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              RAPI <span className="text-[#E63946]">Barbershop</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
              Bukan sekadar potong rambut. Kami mengembalikan versi terbaik dan kepercayaan diri Anda.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/demo/rapi-barbershop-full/booking"
              className="bg-[#E63946] hover:bg-[#D90429] text-white font-black uppercase tracking-wider px-10 py-5 transition-transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
            >
              <CalendarCheck size={24} /> Booking Jadwal
            </Link>
            <a 
              href="#layanan"
              className="bg-[#1A1A1A] hover:bg-[#222222] text-white border border-[#333333] font-black uppercase tracking-wider px-10 py-5 transition-transform hover:scale-105 flex items-center justify-center text-lg"
            >
              Lihat Layanan
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. PROFIL USAHA */}
      <section id="profil" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Tradisi & <span className="text-[#E63946]">Presisi</span></h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto mb-6"></div>
          <p className="text-xl leading-relaxed text-gray-400 mb-8 font-light">
            Berdiri sejak 2018, RAPI Barbershop didedikasikan untuk pria modern yang menghargai kualitas. Kami menggabungkan teknik pangkas klasik (*old-school barbering*) dengan gaya modern masa kini.
          </p>
          <p className="text-lg leading-relaxed text-gray-500 max-w-3xl mx-auto">
            Dengan kapster bersertifikat (*master barber*), kami memastikan setiap helai rambut dipotong dengan tingkat presisi tertinggi. Kebersihan alat adalah prioritas utama kami.
          </p>
        </div>
      </section>

      {/* 2.5 PILIH KAPSTER */}
      <section id="kapster" className="py-24 px-6 bg-[#0A0A0A] border-t border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Pilih <span className="text-[#E63946]">Kapster</span> Anda</h2>
            <p className="text-gray-400">Tim profesional kami siap memberikan servis terbaik sesuai gaya yang Anda inginkan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Barber 1 */}
            <div className="group relative bg-[#111111] border border-[#333333] overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600" alt="Kapster 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[#E63946] font-bold tracking-widest uppercase text-sm mb-1">Master Barber</p>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Bramantyo</h3>
                <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Spesialis Fade, Classic Pompadour, dan Executive Contour.</p>
                <Link href="/demo/rapi-barbershop-full/booking" className="inline-block border-b-2 border-[#E63946] text-white font-bold uppercase tracking-wider text-sm pb-1 hover:text-[#E63946] transition-colors">Pilih Kapster Ini</Link>
              </div>
            </div>
            
            {/* Barber 2 */}
            <div className="group relative bg-[#111111] border border-[#333333] overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" alt="Kapster 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[#E63946] font-bold tracking-widest uppercase text-sm mb-1">Senior Barber</p>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Riko</h3>
                <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Spesialis Korean Crop, Mullet, dan Hair Tattooing.</p>
                <Link href="/demo/rapi-barbershop-full/booking" className="inline-block border-b-2 border-[#E63946] text-white font-bold uppercase tracking-wider text-sm pb-1 hover:text-[#E63946] transition-colors">Pilih Kapster Ini</Link>
              </div>
            </div>

            {/* Barber 3 */}
            <div className="group relative bg-[#111111] border border-[#333333] overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600" alt="Kapster 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[#E63946] font-bold tracking-widest uppercase text-sm mb-1">Stylist / Colorist</p>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Andra</h3>
                <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Spesialis Hair Coloring, Perming, dan Modern Texture.</p>
                <Link href="/demo/rapi-barbershop-full/booking" className="inline-block border-b-2 border-[#E63946] text-white font-bold uppercase tracking-wider text-sm pb-1 hover:text-[#E63946] transition-colors">Pilih Kapster Ini</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN & HARGA LENGKAP */}
      <section id="layanan" className="py-24 px-6 bg-[#111111] border-y border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Layanan <span className="text-[#E63946]">Lengkap</span></h2>
            <p className="text-gray-400 text-lg">Pilih perawatan yang paling sesuai dengan kebutuhan grooming Anda.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ItemCard 
                key={service.id}
                title={service.name} 
                price={service.price} 
                duration={`${service.durationMinutes} Menit`}
                description={service.description}
                image={service.image || businessData.heroImage}
                aspectRatio="square" 
                theme="barber" 
                ctaText="Booking Now"
                ctaLink="/demo/rapi-barbershop-full/booking"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONI */}
      <section id="testimoni" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">The <span className="text-[#E63946]">Gentlemen's</span> Review</h2>
          <p className="text-gray-400">Kepercayaan dari ribuan pelanggan yang telah membuktikan ketajaman pisau cukur kami.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessData.testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} theme="barber" />
          ))}
        </div>
      </section>

      {/* 5. GALERI HASIL KERJA */}
      <section id="galeri" className="py-24 px-6 bg-[#111111] border-y border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Hall of <span className="text-[#E63946]">Fades</span></h2>
            <p className="text-gray-400">Bukti nyata dari presisi kami. *Real cut, real gentleman.*</p>
          </div>
          <GalleryGrid aspectRatio="portrait" theme="barber" images={businessData.gallery} />
        </div>
      </section>
      
      {/* 6. FAQ ACCORDION */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Info <span className="text-[#E63946]">Grooming</span></h2>
          <p className="text-gray-400">Hal-hal yang sering ditanyakan mengenai layanan RAPI Barbershop.</p>
        </div>
        <FAQAccordion items={businessData.faqs} theme="barber" />
      </section>

      {/* 7. LOKASI, JAM OPERASIONAL & KONTAK */}
      <section id="lokasi" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center border-t border-[#333333]">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Kunjungi <span className="text-[#E63946]">Kami</span></h2>
          <p className="text-gray-400 mb-10 text-lg">
            Tempat kami dirancang untuk privasi dan kenyamanan pria sejati. Area parkir luas dan ruang tunggu ber-AC dengan free WiFi.
          </p>
          
          <div className="bg-[#1A1A1A] p-6 border-l-4 border-[#E63946] mb-8">
            <div className="flex items-center gap-4 mb-4 text-white">
              <Clock size={28} className="text-[#E63946]" />
              <h3 className="text-xl font-bold uppercase tracking-wider">Jam Buka</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              {businessData.hours.map((h, i) => (
                <li key={i} className="flex justify-between border-b border-[#333333] pb-2 last:border-0 last:pb-0">
                  <span>{h.day}</span>
                  <span className="font-bold text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`https://wa.me/${businessData.contacts.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#E63946] text-white font-bold uppercase tracking-wider px-6 py-4 hover:bg-[#D90429] transition-colors">
              <MessageCircle size={20} /> Tanya WA
            </a>
            <a href={`https://instagram.com/${businessData.contacts.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#1A1A1A] text-white border border-[#333333] font-bold uppercase tracking-wider px-6 py-4 hover:border-gray-500 transition-colors">
              <FaInstagram size={20} /> {businessData.contacts.instagram}
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-[#1A1A1A] p-2 border border-[#333333]">
            <MapEmbed src={businessData.contacts.mapsUrl} />
          </div>
          <div className="mt-4 flex gap-4 items-start bg-[#111111] border border-[#333333] p-4">
            <MapPin className="text-[#E63946] shrink-0 mt-1" size={24} />
            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-1">RAPI Barbershop Pusat</p>
              <p className="text-gray-400 text-sm">{businessData.contacts.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#050505] text-center border-t border-[#333333]">
        <h2 className="text-3xl font-black uppercase tracking-widest text-[#333333] mb-4">RAPI BARBERSHOP</h2>
        <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Rapi Barbershop.
        </p>
      </footer>
    </div>
  );
}
