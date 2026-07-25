"use client";

import React, { useState } from "react";
import { MessageCircle, ShoppingBag, ArrowRight, Info, MapPin } from "lucide-react";
import StoreItemCard from "@/components/demo/StoreItemCard";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import GalleryGrid from "@/components/demo/GalleryGrid";
import TestimonialCard from "@/components/demo/TestimonialCard";
import AnchorNav from "@/components/demo/AnchorNav";
import StatusBadge from "@/components/demo/StatusBadge";
import RatingBadge from "@/components/demo/RatingBadge";
import ScrollReveal from "@/components/demo/ScrollReveal";
import FAQAccordion from "@/components/demo/FAQAccordion";
import { FaInstagram } from "react-icons/fa";
import { useStore } from "@/components/demo/StoreContext";
import Link from "next/link";

const DUMMY_WA = "6280000000000";

export default function RuangRupaFullDemo() {
  const { products, cart } = useStore();
  // Removed isCartOpen state
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#111111] font-sans selection:bg-[#C34A36] selection:text-white pb-10">
      
      {/* BANNER COMPARISON */}
      <div className="bg-[#111111] text-white py-3 px-4 text-center text-sm font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-gray-400">Sedang melihat versi Full Catalog UMKM Website.</span>
        <div className="flex items-center gap-4">
          <Link href="/demo/ruang-rupa" className="underline hover:text-[#C34A36] transition-colors">
            Lihat versi Mini
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/demo/ruang-rupa-basic" className="underline hover:text-[#C34A36] transition-colors">
            Lihat versi Basic
          </Link>
        </div>
      </div>

      <AnchorNav 
        theme="fashion"
        sections={[
          { id: "hero", label: "Beranda" },
          { id: "profil", label: "Filosofi" },
          { id: "katalog", label: "Katalog" },
          { id: "lookbook", label: "Lookbook" },
          { id: "testimoni", label: "Ulasan" },
          { id: "faq", label: "FAQ" }
        ]} 
      />

      {/* Floating Cart Button */}
      <Link 
        href="/demo/ruang-rupa-full/keranjang"
        className="fixed bottom-32 right-6 z-40 bg-[#111111] text-white p-4 rounded-full shadow-2xl hover:bg-[#C34A36] hover:scale-110 transition-all group flex items-center justify-center"
      >
        <ShoppingBag size={24} />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#C34A36] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#FAFAFA]">
            {cartItemCount}
          </span>
        )}
      </Link>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0 z-10 bg-[#FAFAFA]">
          <ScrollReveal direction="right">
            <RatingBadge rating={4.9} reviewCount={18} theme="fashion" />
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mt-6 mb-6">
              Ruang<br/><span className="text-[#C34A36]">&</span> Rupa
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-md font-light leading-relaxed">
              Identitas dalam setiap jahitan. Temukan seluruh koleksi esensial kami untuk jiwa modern yang dinamis.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="right" className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#katalog"
              className="group inline-flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#C34A36] text-white font-bold uppercase tracking-widest px-8 py-5 transition-all"
            >
              Lihat Katalog Produk
              <ArrowRight className="transition-transform group-hover:translate-y-1 rotate-90" size={18} />
            </a>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200" 
            alt="Koleksi terbaru Ruang & Rupa" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. PROFIL (FILOSOFI BRAND) */}
      <section id="profil" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <ScrollReveal direction="left" className="w-full md:w-5/12 aspect-[4/5] relative">
          <img 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800" 
            alt="Proses jahit Ruang & Rupa" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#111111] text-white p-6 w-48 shadow-2xl">
            <h4 className="font-bold text-xl mb-1">Sejak 2021</h4>
            <p className="text-sm text-gray-400">Jakarta, Indonesia</p>
          </div>
        </ScrollReveal>
        <div className="w-full md:w-7/12">
          <ScrollReveal direction="right">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Mendefinisikan Ulang <span className="text-[#C34A36]">Esensi.</span></h2>
            <p className="text-gray-500 mb-6 text-lg leading-relaxed font-light">
              Kami percaya bahwa pakaian bukan sekadar penutup tubuh, melainkan ruang bagi rupa dan karakter Anda untuk berbicara. Ruang & Rupa hadir untuk menciptakan *staple pieces* yang melampaui tren sesaat.
            </p>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed font-light">
              Setiap potongan dirancang dengan presisi, menggunakan material pilihan yang menjamin kenyamanan tanpa mengorbankan estetika. Karena bagi kami, gaya terbaik adalah saat Anda menjadi diri sendiri.
            </p>
            <div className="flex gap-8 border-t border-gray-200 pt-8 mt-8">
              <div>
                <h4 className="font-bold text-3xl text-[#111111]">100%</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Lokal</p>
              </div>
              <div>
                <h4 className="font-bold text-3xl text-[#111111]">50+</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Koleksi</p>
              </div>
              <div>
                <h4 className="font-bold text-3xl text-[#111111]">Eco</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Friendly</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. KATALOG PRODUK INTERAKTIF */}
      <section id="katalog" className="py-24 px-6 md:px-16 lg:px-24 bg-white border-y border-[#111111]/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Katalog <span className="text-[#C34A36]">Pilihan</span></h2>
              <p className="text-gray-500 max-w-xl">Pilih ukuran Anda dan tambahkan ke keranjang. Fitur Checkout lengkap mendukung COD dan Transfer Bank.</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111]">
              <span className="w-8 h-[2px] bg-[#C34A36]"></span> Semua Kategori
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {products.map(product => (
              <div key={product.id} className="w-full">
                <StoreItemCard 
                  product={product} 
                />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-200 p-6 flex items-start gap-4 text-sm text-gray-600">
            <Info size={24} className="shrink-0 text-[#111111]" />
            <p>
              <strong>Demo E-Commerce:</strong> Ini adalah simulasi toko online yang sesungguhnya. Coba pilih ukuran (S/M/L) lalu klik tombol tambah ke keranjang, dan lakukan simulasi proses checkout hingga selesai.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LOOKBOOK / GALERI */}
      <section id="lookbook" className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Official <span className="text-[#C34A36]">Lookbook</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Inspirasi styling langsung dari studio kami untuk referensi OOTD harian Anda.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <GalleryGrid 
              aspectRatio="portrait" 
              theme="fashion"
              images={[
                { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800", caption: "Look #1: Urban Monochrome" },
                { src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800", caption: "Look #2: Summer Noir" },
                { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800", caption: "Look #3: Earth Tones" },
                { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=800", caption: "Look #4: Minimalist Day" },
                { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800", caption: "Look #5: Office Ready" }
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. TESTIMONI */}
      <section id="testimoni" className="py-24 px-6 md:px-16 lg:px-24 bg-[#FAFAFA] border-t border-[#111111]/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Apa Kata <span className="text-[#C34A36]">Mereka?</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Kisah dan kepuasan pelanggan setia yang telah menjadikan Ruang & Rupa bagian dari gaya hidup mereka.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Sarah G."
              role="Fashion Blogger"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
              comment="Kemeja oversized-nya jatuh sempurna! Bahannya tidak mudah lecek dan sangat adem dipakai seharian. Definitely my go-to piece."
              theme="fashion"
            />
            <TestimonialCard 
              name="Michelle A."
              role="Freelance Designer"
              avatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
              comment="Susah banget cari celana kulot yang pas panjangnya di saya. Ruang & Rupa bikin kulot yang siluetnya bikin kaki terlihat lebih jenjang!"
              theme="fashion"
            />
            <TestimonialCard 
              name="Anya P."
              role="Creative Director"
              avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
              comment="Jahitannya rapi layaknya butik mahal. Sangat worth it untuk harganya. Nggak sabar nunggu koleksi berikutnya!"
              theme="fashion"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section id="faq" className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Pertanyaan <span className="text-[#C34A36]">Umum</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Informasi seputar ukuran, pengiriman, dan kebijakan Ruang & Rupa.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <FAQAccordion theme="fashion" items={[
              {
                question: "Bagaimana cara mengetahui ukuran yang pas?",
                answer: "Setiap halaman produk kami menyertakan Size Guide yang mendetail (Lingkar Dada, Panjang Lengan, Panjang Badan). Kami sarankan Anda mengukur pakaian favorit Anda dan membandingkannya dengan panduan kami."
              },
              {
                question: "Apakah bisa melakukan custom size?",
                answer: "Saat ini kami fokus memproduksi koleksi ready-to-wear dengan sizing S hingga XXL. Untuk custom size (made to order), kami hanya membuka slot terbatas sebulan sekali. Pantau terus Instagram kami untuk info pembukaan slot."
              },
              {
                question: "Berapa lama estimasi pengiriman?",
                answer: "Order yang masuk sebelum jam 15.00 WIB akan dikirim pada hari yang sama. Pengiriman reguler memakan waktu 2-3 hari kerja untuk Jabodetabek, dan 3-5 hari untuk luar daerah."
              },
              {
                question: "Apakah melayani penukaran (retur) jika kekecilan/kebesaran?",
                answer: "Tentu! Anda dapat menukar size dalam batas waktu 3 hari setelah barang diterima, dengan syarat tag belum dilepas, belum dicuci, dan belum dipakai beraktivitas. Ongkos kirim retur ditanggung oleh pembeli."
              }
            ]} />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. LOKASI / STUDIO & INFO KONTAK */}
      <section id="lokasi" className="py-24 px-6 md:px-16 lg:px-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Kunjungi <span className="text-[#C34A36]">Studio</span></h2>
            <div className="mb-6">
              <StatusBadge theme="fashion" schedule={[
                { days: [1, 2, 3, 4, 5], openHour: 10, closeHour: 18 },
                { days: [0, 6], openHour: 12, closeHour: 16 }
              ]} />
            </div>
            <p className="text-gray-400 mb-12 max-w-md font-light leading-relaxed">
              Punya pertanyaan mengenai ukuran, bahan, atau custom order? Ingin mencoba koleksi secara langsung? Tim kami siap membantu Anda dari studio.
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
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Katalog & Lookbook IG</p>
                  <p className="text-lg font-medium group-hover:text-[#C34A36] transition-colors">@ruangrupa.official</p>
                </div>
              </a>
              
              <div className="mt-8 pt-8 border-t border-white/10 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Jam Operasional (By Appointment)</p>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Senin - Jumat</span>
                  <span>10:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Sabtu - Minggu</span>
                  <span>12:00 - 16:00</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C34A36] -z-10"></div>
            <div className="bg-white p-2">
              <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573117!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714561234567!5m2!1sen!2sid" />
            </div>
            <div className="mt-4 flex gap-3 items-start">
              <MapPin className="text-[#C34A36] shrink-0 mt-1" size={20} />
              <div>
                <p className="font-bold uppercase tracking-wider text-sm mb-1">Creative Studio & Workshop</p>
                <p className="text-gray-400 text-sm">Jl. Buah Batu No.123, Bandung, Jawa Barat</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white pt-20 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black uppercase tracking-widest mb-6">Ruang & Rupa</h3>
            <p className="text-gray-400 font-light mb-8 max-w-sm">Mendefinisikan ulang esensi berpakaian untuk jiwa modern yang dinamis.</p>
            <a href="/demo/ruang-rupa-full/admin" className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wider underline">Akses Dashboard Admin Demo</a>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Kontak</h4>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li>0812 3456 7890</li>
              <li>hello@ruangrupa.id</li>
              <li>Jl. Senopati No. 12, Jakarta Selatan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-400">Sosial Media</h4>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Ruang & Rupa. All rights reserved.</p>
          <p>Demo UMKM Website by Jasa Web UMKM</p>
        </div>
      </footer>
      
      <DemoWatermark />
      <div className="fixed bottom-24 right-6 z-40 bg-white px-3 py-1.5 rounded-none shadow-md text-[10px] font-bold text-[#111111] uppercase tracking-wider border border-[#111111] flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#C34A36]"></span> ADMIN ONLINE (RESPON &lt; 5 MNT)
      </div>
      <FloatingWhatsApp phoneNumber={DUMMY_WA} message="Halo Ruang & Rupa, saya mau tanya soal baju/celana yang ada di website." />
    </div>
  );
}
