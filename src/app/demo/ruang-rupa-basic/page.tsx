import React from "react";
import { Metadata } from "next";
import { MessageCircle, MapPin, ArrowRight } from "lucide-react";
import ItemCard from "@/components/demo/ItemCard";
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

export const metadata: Metadata = {
  title: "Ruang & Rupa | Koleksi Lengkap & Lookbook",
  description: "Eksplorasi gaya tanpa batas dengan koleksi eksklusif Ruang & Rupa. Temukan lookbook terbaru dan berbagai pakaian esensial untuk jiwa modern.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Ruang & Rupa | Koleksi Lengkap",
    description: "Koleksi pakaian esensial untuk jiwa modern yang dinamis.",
    type: "website",
  }
};

const DUMMY_WA = "6280000000000";

export default function RuangRupaBasicDemo() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#111111] font-sans selection:bg-[#C34A36] selection:text-white pb-10">
      
      {/* BANNER COMPARISON */}
      <div className="bg-[#111111] text-white py-3 px-4 text-center text-sm font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-gray-400">Sedang melihat versi Basic UMKM Website.</span>
        <a href="/demo/ruang-rupa" className="underline hover:text-[#C34A36] transition-colors">
          Lihat versi Mini Landing Page dari Ruang & Rupa &rarr;
        </a>
      </div>

      <AnchorNav 
        theme="fashion"
        sections={[
          { id: "hero", label: "Beranda" },
          { id: "profil", label: "Filosofi" },
          { id: "koleksi", label: "Koleksi" },
          { id: "lookbook", label: "Lookbook" },
          { id: "testimoni", label: "Ulasan" },
          { id: "lokasi", label: "Studio" },
          { id: "faq", label: "FAQ" }
        ]} 
      />

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
              href="#koleksi"
              className="group inline-flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#C34A36] text-white font-bold uppercase tracking-widest px-8 py-5 transition-all"
            >
              Lihat Koleksi Lengkap
              <ArrowRight className="transition-transform group-hover:translate-y-1 rotate-90" size={18} />
            </a>
            <a 
              href={`https://wa.me/${DUMMY_WA}?text=Halo%20Ruang%20&%20Rupa,%20saya%20ingin%20konsultasi%20style`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#111111] hover:bg-[#111111] hover:text-white font-bold uppercase tracking-widest px-8 py-5 transition-all"
            >
              Tanya Admin <MessageCircle size={18} />
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
          <div className="absolute -bottom-6 -right-6 w-3/4 aspect-[4/5] border border-[#111111] -z-10 hidden md:block"></div>
        </ScrollReveal>
        <ScrollReveal direction="right" className="w-full md:w-7/12">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Filosofi</h2>

          <p className="text-2xl md:text-4xl font-light leading-snug mb-8">
            Bukan sekadar pakaian, tapi <span className="font-bold">kanvas berekspresi</span>. Didesain secara eksklusif dan dijahit langsung di studio kami di Bandung.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed max-w-xl">
            Kami percaya bahwa pakaian adalah perpanjangan dari karakter Anda. Oleh karena itu, kami hanya menggunakan material katun organik pilihan yang ramah lingkungan dan sejuk di kulit. Proses penjahitan (*tailoring*) dilakukan oleh artisan lokal berpengalaman dengan standar kualitas ekspor. Setiap potongan dirancang untuk tahan lama, menolak konsep *fast fashion*, dan memberikan siluet terbaik untuk semua bentuk tubuh.
          </p>
          <div className="h-px w-24 bg-[#C34A36]"></div>
        </ScrollReveal>
      </section>

      {/* 3. KOLEKSI LENGKAP */}
      <section id="koleksi" className="py-24 px-6 md:px-16 lg:px-24 bg-white border-y border-[#111111]/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">Koleksi <span className="text-[#C34A36]">Lengkap</span></h2>
              <p className="text-gray-500">Jelajahi seluruh rilisan (*drop*) eksklusif kami.</p>
            </div>
            
            {/* Simple Tab-like design */}
            <div className="flex gap-4 border-b-2 border-gray-100 pb-2 w-max overflow-x-auto">
              <span className="text-[#111111] font-bold border-b-2 border-[#111111] pb-2 -mb-[10px]">Semua Artikel</span>
              <span className="text-gray-400 hover:text-[#111111] font-medium transition-colors cursor-pointer">Atasan</span>
              <span className="text-gray-400 hover:text-[#111111] font-medium transition-colors cursor-pointer">Bawahan</span>
              <span className="text-gray-400 hover:text-[#111111] font-medium transition-colors cursor-pointer">Outerwear</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            <ItemCard 
              title="Kemeja Oversized Noir" price="Rp 399.000"
              image="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Kemeja%20Oversized%20Noir%20masih%20tersedia?`}
            />
            <ItemCard 
              title="Celana Kulot Earth" price="Rp 349.000"
              image="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Celana%20Kulot%20Earth%20masih%20tersedia?`}
            />
            <ItemCard 
              title="Blazer Terracotta" price="Rp 549.000"
              image="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Blazer%20Terracotta%20masih%20tersedia?`}
            />
            <ItemCard 
              title="Kemeja Linen Putih" price="Rp 389.000"
              image="https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Kemeja%20Linen%20Putih%20masih%20tersedia?`}
            />
            
            <ItemCard 
              title="Cardigan Rajut Abu" price="Rp 429.000"
              image="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Cardigan%20Rajut%20Abu%20masih%20tersedia?`}
            />
            <ItemCard 
              title="Rok Pleated Coklat" price="Rp 319.000"
              image="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Rok%20Pleated%20Coklat%20masih%20tersedia?`}
            />
            <ItemCard 
              title="Vest Wool Hitam" price="Rp 299.000"
              image="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Vest%20Wool%20Hitam%20masih%20tersedia?`}
            />
            <ItemCard 
              title="Wide Leg Pants" price="Rp 379.000"
              image="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=600"
              aspectRatio="portrait" theme="fashion"
              ctaText="Tanya Stok" ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20apakah%20Wide%20Leg%20Pants%20masih%20tersedia?`}
            />
          </ScrollReveal>
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
                { src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800", caption: "Look #5: Office Ready" },
                { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", caption: "Look #6: Weekend Casual" },
                { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800", caption: "Look #7: Vintage Charm" },
                { src: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80&w=800", caption: "Look #8: Terracotta Touch" },
                { src: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&q=80&w=800", caption: "Look #9: Crisp White" },
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

      {/* 6. LOKASI / STUDIO & INFO KONTAK */}
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

      {/* 7. FAQ ACCORDION (New Basic Tier Feature) */}
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
