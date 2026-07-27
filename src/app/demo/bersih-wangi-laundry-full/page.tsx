"use client";

import React, { useState } from "react";
import { MessageCircle, MapPin, Droplet, Wind, Sparkles, Shirt, Clock, ChevronRight, ShoppingBag } from "lucide-react";
import StatusBadge from "@/components/demo/StatusBadge";
import RatingBadge from "@/components/demo/RatingBadge";
import AnchorNav from "@/components/demo/AnchorNav";
import ScrollReveal from "@/components/demo/ScrollReveal";
import GalleryGrid from "@/components/demo/GalleryGrid";
import TestimonialCard from "@/components/demo/TestimonialCard";
import FAQAccordion from "@/components/demo/FAQAccordion";
import ProcessTimeline from "@/components/demo/ProcessTimeline";
import PriceCalculatorWidget from "@/components/demo/PriceCalculatorWidget";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import { FaInstagram } from "react-icons/fa";
import { useLaundryStore, LaundryService } from "@/components/demo/laundry/LaundryContext";
import DropoffForm from "@/components/demo/laundry/DropoffForm";

const DUMMY_WA = "6280000000000";

const NAV_SECTIONS = [
  { label: "Kalkulator", id: "kalkulator" },
  { label: "Proses", id: "proses" },
  { label: "Layanan", id: "layanan" },
  { label: "Testimoni", id: "testimoni" },
  { label: "FAQ", id: "faq" },
  { label: "Galeri", id: "galeri" },
  { label: "Lokasi", id: "lokasi" }
];

const GALLERY_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=800",
    caption: "Proses: Sortir berdasarkan jenis dan warna kain"
  },
  {
    src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
    caption: "Proses: Setrika uap industri anti-kusut dan bebas gosong"
  },
  {
    src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800",
    caption: "Hasil: Handuk dan pakaian terlipat rapi dengan presisi"
  },
  {
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800",
    caption: "Hasil: Pakaian digantung rapi, siap dipick-up pelanggan"
  },
  {
    src: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800",
    caption: "Spotting Treatment: Noda saus & kopi terangkat sempurna"
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
    caption: "Dry Clean: Jas premium kembali ke bentuk dan warna aslinya"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ibu Rina",
    role: "Ibu Rumah Tangga",
    content: "Penyelamat banget waktu musim hujan! Noda lumpur di seragam putih anak saya hilang total tanpa sisa. Wanginya juga soft, beda sama laundry kiloan biasa yang kadang menyengat.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Andi Wijaya",
    role: "Karyawan Swasta",
    content: "Layanan express same-day beneran same-day! Jam 8 pagi naruh kemeja, jam 5 sore udah bisa diambil rapi pakai setrika uap. Gak pernah kecewa sama ketepatan waktunya.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Siska Larasati",
    role: "Mahasiswi",
    content: "Sempet takut dry clean gaun wisuda di sini karena harganya murah, eh pas diambil malah bajunya berasa kayak baru beli. Lipatannya presisi, plastik pembungkusnya juga tebal. Top!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  }
];

const FAQS = [
  {
    question: "Bagaimana jika baju rusak/luntur saat dicuci?",
    answer: "Kami menerapkan prosedur pemisahan pakaian putih dan warna sebelum pencucian. Namun jika terjadi kerusakan yang murni diakibatkan oleh kelalaian standar proses kami, kami memberikan garansi kompensasi sesuai dengan syarat dan ketentuan yang berlaku di nota transaksi."
  },
  {
    question: "Apakah bisa request pewangi tertentu?",
    answer: "Tentu bisa! Kami menyediakan 3 varian pewangi standar (Akasia, Sakura, dan Snappy) serta 1 varian netral/tanpa pewangi yang cocok bagi pelanggan dengan kulit hipersensitif terhadap parfum buatan."
  },
  {
    question: "Berapa lama proses express dibanding reguler?",
    answer: "Layanan Express kami menjamin pakaian selesai di hari yang sama (Same-Day) asalkan pakaian di-drop sebelum jam 10 pagi. Sedangkan layanan Reguler memakan waktu 2-3 hari kerja (48-72 jam) tergantung antrean mesin."
  },
  {
    question: "Apakah ada minimum kiloan?",
    answer: "Minimum berat untuk layanan cuci kiloan adalah 3 Kg per nota transaksi. Jika berat cucian di bawah 3 Kg, maka sistem akan tetap membulatkan tagihan menjadi harga 3 Kg."
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer: "Kami menerima pembayaran tunai di konter, transfer bank (BCA/Mandiri), dan pembayaran digital menggunakan QRIS dari seluruh aplikasi e-wallet (GoPay, OVO, Dana, ShopeePay) atau Mobile Banking."
  }
];

export default function BersihWangiFull() {
  const { services, cart, addToCart } = useLaundryStore();
  const [selectedService, setSelectedService] = useState<LaundryService | null>(null);
  const [isDropoffOpen, setIsDropoffOpen] = useState(false);
  
  const perKgServices = services.filter(s => s.category === "perKg");
  const perItemServices = services.filter(s => s.category === "perItem");

  const handleDropoff = (service: LaundryService) => {
    setSelectedService(service);
    setIsDropoffOpen(true);
  };

  const handleAddToCart = (service: LaundryService) => {
    addToCart(service.id, 1);
    alert(`${service.name} ditambahkan ke keranjang`);
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#0EA5E9] selection:text-white pb-10">
      
      {/* BANNER DEMO MODE */}
      <div className="bg-[#0B1121] border-b border-slate-800 text-slate-300 py-3 px-4 text-center text-sm font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-amber-400 font-bold">DEMO MODE: FULL KATALOG</span>
        <a href="/demo/bersih-wangi-laundry-basic" className="text-white border-b border-transparent hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all">
          Kembali ke versi Basic &rarr;
        </a>
      </div>

      <AnchorNav 
        sections={NAV_SECTIONS} 
        theme="fashion"
      />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-24 pb-12 md:py-0">
        <div className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 z-10 pr-0 md:pr-12">
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] rounded-full">
                  <Droplet className="fill-[#0284C7]" size={14} />
                  <span className="font-bold tracking-widest uppercase text-xs">Laundry Premium</span>
                </div>
                <StatusBadge 
                  schedule={[
                    { days: [1, 2, 3, 4, 5, 6], openHour: 7, closeHour: 20 },
                    { days: [0], openHour: 8, closeHour: 17 }
                  ]} 
                />
                <RatingBadge rating={4.8} reviewCount={21} />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Bukan Sekadar <br/>
                <span className="relative">
                  Cuci Kering.
                  <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#0EA5E9]" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Mendukung Drop-off Kiloan (Bayar Nanti) dan Pesanan Satuan langsung via sistem kami.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#layanan"
                  className="inline-flex justify-center items-center gap-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 py-4 transition-colors"
                >
                  <MessageCircle size={20} /> Antar Cucian
                </a>
                <a 
                  href="/demo/bersih-wangi-laundry-full/status"
                  className="inline-flex justify-center items-center gap-3 bg-white border-2 border-slate-200 hover:border-[#0EA5E9] text-slate-700 hover:text-[#0EA5E9] font-bold px-8 py-4 transition-colors"
                >
                  Cek Status Pesanan
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-5 relative h-[50vh] md:h-[75vh] w-full">
            <ScrollReveal direction="left" delay={0.2} className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800" 
                alt="Detail tekstur pakaian terlipat rapi" 
                className="absolute inset-0 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
              />
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. KALKULATOR HARGA (New Interactive Widget) */}
      <div id="kalkulator" className="scroll-mt-20">
        <PriceCalculatorWidget />
      </div>

      {/* TIMELINE PROSES */}
      <div id="proses" className="scroll-mt-20">
        <ProcessTimeline />
      </div>

      {/* LAYANAN & HARGA */}
      <section id="layanan" className="py-32 px-6 bg-slate-50 relative scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Daftar <span className="text-[#0EA5E9]">Layanan & Harga</span></h2>
            </div>
          </ScrollReveal>

          {/* BRANCH B: LAYANAN KILOAN (DROPOFF) */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-[#0EA5E9] inline-block pb-2">Layanan Kiloan (Drop-off)</h3>
            <p className="text-slate-500 mb-8">Harga dihitung berdasarkan berat aktual setelah ditimbang di konter kami.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {perKgServices.map(service => (
                <div key={service.id} className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col h-full">
                  <div className="h-48 w-full rounded-2xl overflow-hidden mb-6">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h4>
                  <p className="text-slate-600 mb-6 flex-1">{service.description}</p>
                  
                  <div className="bg-slate-50 p-4 rounded-xl mb-6">
                    <p className="text-sm font-bold text-slate-900 mb-2">Pilihan Kecepatan:</p>
                    <ul className="space-y-2">
                      {service.speedOptions?.map(opt => (
                        <li key={opt.label} className="flex justify-between items-center text-sm">
                          <span className="text-slate-600">{opt.label} ({opt.estimasiHari})</span>
                          <span className="font-bold text-sky-600">Rp {opt.pricePerKg.toLocaleString()}/kg</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => handleDropoff(service)}
                    className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-2xl transition-colors"
                  >
                    Antar Cucian Sekarang
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* BRANCH A: LAYANAN SATUAN (CART) */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-500 inline-block pb-2">Layanan Satuan</h3>
            <p className="text-slate-500 mb-8">Harga pasti per item. Langsung masukkan keranjang dan checkout.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {perItemServices.map(service => (
                <div key={service.id} className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col h-full">
                  <div className="h-48 w-full rounded-2xl overflow-hidden mb-6">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h4>
                  <p className="text-slate-600 mb-6 flex-1">{service.description}</p>
                  
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-slate-500">Harga per {service.unit}</span>
                    <span className="text-3xl font-black text-amber-500">Rp {service.priceFlat?.toLocaleString()}</span>
                  </div>
                  
                  <button 
                    onClick={() => handleAddToCart(service)}
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl transition-colors flex justify-center items-center gap-2"
                  >
                    <ShoppingBag size={20} /> Tambah ke Pesanan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONI PELANGGAN */}
      <section id="testimoni" className="py-24 px-6 bg-white scroll-mt-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Kisah <span className="text-[#0EA5E9]">Pakaian Bersih</span></h2>
                <p className="text-lg text-slate-600 font-light">
                  Pengalaman nyata mereka yang mempercayakan noda membandelnya pada kami.
                </p>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-5xl font-black text-slate-900">4.8<span className="text-2xl text-slate-400">/5</span></span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">Berdasarkan 21 Ulasan Google</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <TestimonialCard 
                  name={testimonial.name}
                  avatar={testimonial.avatar}
                  comment={testimonial.content}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  theme="laundry"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section id="faq" className="py-24 px-6 bg-[#0EA5E9] text-white scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Pertanyaan <span className="text-[#BAE6FD]">Populer</span></h2>
              <p className="text-lg text-sky-100 font-light">
                Ada keraguan? Temukan jawaban tentang garansi, waktu proses, hingga jenis deterjen di bawah ini.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <FAQAccordion 
              items={FAQS} 
              theme="laundry"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. GALERI PROSES & HASIL */}
      <section id="galeri" className="py-24 px-6 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Standard <span className="text-[#0EA5E9]">Output Kami</span></h2>
              <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                Transparansi adalah kunci. Kami tidak ragu menunjukkan detail proses pencucian hingga lipatan akhir yang akan Anda terima.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <GalleryGrid images={GALLERY_PHOTOS} theme="fashion" aspectRatio="landscape" />
          </ScrollReveal>
        </div>
      </section>


      {/* 7 & 8. LOKASI & KONTAK */}
      <section id="lokasi" className="py-24 px-6 bg-[#0B1121] text-white scroll-mt-20 border-t-8 border-[#0EA5E9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <Shirt className="w-16 h-16 text-[#0EA5E9] mb-8" strokeWidth={1} />
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Drop-off <br/><span className="text-[#0EA5E9]">Cucian Anda</span></h2>
              
              <ul className="space-y-4 text-slate-300 font-light mb-10 text-lg">
                <li className="flex items-start gap-4">
                  <Droplet className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9] shrink-0 mt-1" />
                  <span>Pemisahan pakaian luntur & putih di konter.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Droplet className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9] shrink-0 mt-1" />
                  <span>Timbang transparan langsung di depan Anda.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Droplet className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9] shrink-0 mt-1" />
                  <span>Langsung terima e-Nota via WhatsApp.</span>
                </li>
              </ul>

              <div className="p-6 border border-slate-700/50 bg-slate-800/30 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white uppercase tracking-wider text-sm">Status Toko</h3>
                  <StatusBadge 
                    schedule={[
                      { days: [1, 2, 3, 4, 5, 6], openHour: 7, closeHour: 20 },
                      { days: [0], openHour: 8, closeHour: 17 }
                    ]} 
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-slate-400 font-light text-sm flex items-center gap-3">
                    <Clock size={16} className="text-[#0EA5E9]" /> 
                    Senin - Sabtu: 07.00 - 20.00 | Minggu: 08.00 - 17.00
                  </p>
                  <p className="text-slate-400 font-light text-sm flex items-start gap-3">
                    <MapPin size={16} className="text-[#0EA5E9] shrink-0 mt-1" /> 
                    Jl. Sudirman No. 88, Kav. Bersih Indah, Jakarta Pusat, 10220
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href={`https://wa.me/${DUMMY_WA}`}
                  className="flex items-center gap-3 bg-[#0EA5E9] text-white font-bold px-8 py-4 hover:bg-[#0284C7] transition-colors"
                >
                  <MessageCircle size={20} /> Hubungi via WhatsApp
                </a>
                <a 
                  href="https://instagram.com/"
                  className="flex items-center justify-center w-14 h-14 border border-slate-700 text-white hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="h-full">
            <div className="h-[500px] w-full border border-slate-800 bg-slate-900 p-2">
              <div className="w-full h-full opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5053155700876!2d106.8249641!3d-6.175392399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1714902170362!5m2!1sid!2sid" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-[#040814] text-slate-500 py-12 px-6 text-center border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="mb-8 font-light">Bersih & Wangi Laundry © {new Date().getFullYear()}. Garansi kepuasan 100%.</p>
        </div>
      </footer>

      {/* 10. FLOATING WHATSAPP */}
      <FloatingWhatsApp 
        phoneNumber={DUMMY_WA}
        message="Halo Admin Bersih & Wangi Laundry, saya mau tanya layanan laundry."
        label="Tanya Sekarang"
      />

      {/* DROPOFF MODAL */}
      <DropoffForm 
        isOpen={isDropoffOpen} 
        onClose={() => setIsDropoffOpen(false)} 
        service={selectedService} 
      />
    </div>
  );
}
