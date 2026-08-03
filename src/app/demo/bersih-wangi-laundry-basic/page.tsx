import React from "react";
import { Metadata } from "next";
import { MessageCircle, MapPin, Droplet, Wind, Sparkles, Shirt, Clock, ChevronRight } from "lucide-react";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import { FaInstagram } from "react-icons/fa";
import StatusBadge from "@/components/demo/StatusBadge";
import RatingBadge from "@/components/demo/RatingBadge";
import AnchorNav from "@/components/demo/AnchorNav";
import ScrollReveal from "@/components/demo/ScrollReveal";
import GalleryGrid from "@/components/demo/GalleryGrid";
import TestimonialCard from "@/components/demo/TestimonialCard";
import FAQAccordion from "@/components/demo/FAQAccordion";
import PriceCalculatorWidget from "@/components/demo/PriceCalculatorWidget";
import ProcessTimeline from "@/components/demo/ProcessTimeline";

// Real SEO Implementation
export const metadata: Metadata = {
  title: "Bersih & Wangi Laundry - Jasa Cuci Kiloan Premium",
  description: "Laundry kiloan dan satuan dengan deterjen hypoallergenic, garansi cuci ulang gratis, dan layanan express same-day. Ahlinya menghilangkan noda membandel.",
  openGraph: {
    title: "Bersih & Wangi Laundry",
    description: "Laundry kiloan dan satuan dengan deterjen hypoallergenic, garansi cuci ulang gratis, dan layanan express same-day.",
    url: "https://demo.jasawebumkm.com/bersih-wangi-laundry-basic",
    siteName: "Bersih & Wangi Laundry",
    locale: "id_ID",
    type: "website",
  },
  robots: "noindex, nofollow",
};

const DUMMY_WA = "6280000000000";

// Structured Data Schema.org
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Laundry",
  "name": "Bersih & Wangi Laundry",
  "image": "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800",
  "@id": "",
  "url": "https://demo.jasawebumkm.com/bersih-wangi-laundry-basic",
  "telephone": "+6280000000000",
  "priceRange": "Rp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Sudirman No. 88, Kav. Bersih Indah",
    "addressLocality": "Jakarta Pusat",
    "postalCode": "10220",
    "addressCountry": "ID"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "21"
  }
};

const NAV_SECTIONS = [
  { label: "Kalkulator", id: "kalkulator" },
  { label: "Proses", id: "proses" },
  { label: "Layanan", id: "layanan" },
  { label: "Testimoni", id: "testimoni" },
  { label: "FAQ", id: "faq" },
  { label: "Galeri", id: "galeri" },
  { label: "Lokasi", id: "lokasi" }
];

const SERVICES = [
  {
    id: "cuci-setrika",
    name: "Cuci + Setrika Reguler",
    price: "8.000",
    priceSuffix: "/kg",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600",
    description: "Proses cuci komplit dengan setrika uap panas tinggi. Efektif membunuh tungau & bakteri. Pakaian langsung siap pakai.",
    highlight: "Selesai 2-3 Hari",
    category: "Reguler"
  },
  {
    id: "cuci-setrika-express",
    name: "Cuci + Setrika Express",
    price: "15.000",
    priceSuffix: "/kg",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=600",
    description: "Prioritas mesin cuci dan setrika uap langsung setelah pakaian masuk. Cocok untuk kebutuhan mendesak tanpa kompromi kualitas.",
    highlight: "Selesai Same-Day",
    category: "Express"
  },
  {
    id: "cuci-lipat",
    name: "Cuci Kering + Lipat",
    price: "6.000",
    priceSuffix: "/kg",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=600",
    description: "Khusus pakaian harian (kaos, celana santai). Kami cuci bersih, keringkan dengan dryer industri anti-kuman, dan lipat rapi.",
    highlight: "Selesai 24 Jam",
    category: "Reguler"
  },
  {
    id: "dry-clean",
    name: "Dry Clean Jas / Gaun",
    price: "35.000",
    priceSuffix: "/pcs",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600",
    description: "Perawatan bahan sensitif (sutra, wol, satin) menggunakan pelarut non-air. Serat kain terjaga, warna tidak pudar, bentuk pakaian aman.",
    highlight: "Satuan (Premium)",
    category: "Satuan"
  },
  {
    id: "cuci-sepatu",
    name: "Deep Clean Sepatu",
    price: "45.000",
    priceSuffix: "/pasang",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    description: "Pembersihan total insole, outsole, dan upper dengan chemical khusus sepatu. Bebas jamur dan bau tak sedap.",
    highlight: "Satuan",
    category: "Satuan"
  },
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

export default function BersihWangiBasic() {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#0EA5E9] selection:text-white pb-10">
      
      {/* STRUCTURED DATA INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BANNER COMPARISON */}
      <div className="bg-[#0B1121] border-b border-slate-800 text-slate-300 py-3 px-4 text-center text-sm font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-slate-400 font-light">Sedang melihat versi Basic UMKM Website.</span>
        <a href="/demo/bersih-wangi-laundry" className="text-white border-b border-transparent hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all">
          Lihat versi Mini Landing Page &rarr;
        </a>
      </div>

      <AnchorNav 
        sections={NAV_SECTIONS} 
        theme="fashion"
      />

      {/* 1. HERO SECTION (Asymmetric Split) */}
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
                Kami menggunakan deterjen <strong className="font-semibold text-slate-900">hypoallergenic</strong> yang aman untuk kulit bayi. Plus garansi 100% cuci ulang gratis jika noda kopi, tinta, atau saus membandel belum tuntas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${DUMMY_WA}?text=Halo%20Admin,%20saya%20mau%20antar%20cucian`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center gap-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 py-4 transition-colors"
                >
                  <MessageCircle size={20} /> Antar Cucian
                </a>
                <a 
                  href="#layanan"
                  className="inline-flex justify-center items-center gap-3 bg-white border-2 border-slate-200 hover:border-[#0EA5E9] text-slate-700 hover:text-[#0EA5E9] font-bold px-8 py-4 transition-colors"
                >
                  <ChevronRight size={20} /> Lihat Semua Layanan
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="md:col-span-5 relative w-full">
            <ScrollReveal direction="left" delay={0.2} className="w-full h-full relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]"></div>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Status Pesanan</p>
                    <h3 className="text-xl font-bold text-slate-900">ID: BW-90214</h3>
                  </div>
                  <div className="bg-[#ECFCCB] text-[#65A30D] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Sparkles size={12} /> Express
                  </div>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-200 before:via-slate-200 before:to-transparent">
                  
                  {/* Step 1: Done */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0EA5E9] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm ml-4 md:ml-0 md:group-odd:pr-8 md:group-even:pl-8 text-left md:group-odd:text-right">
                      <h4 className="font-bold text-slate-900 text-sm">Pick-up Sukses</h4>
                      <p className="text-xs text-slate-500">Kurir telah mengambil cucian (3.2 Kg)</p>
                    </div>
                  </div>
                  
                  {/* Step 2: Active */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-[#0EA5E9] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                      <div className="w-2.5 h-2.5 bg-[#0EA5E9] rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 bg-white rounded-xl border-2 border-[#0EA5E9] shadow-md ml-4 md:ml-0 md:group-odd:pr-8 md:group-even:pl-8 text-left md:group-odd:text-right relative">
                      <h4 className="font-bold text-[#0284C7] text-sm">Proses Cuci & Setrika</h4>
                      <p className="text-xs text-slate-600">Sedang dicuci dengan deterjen khusus.</p>
                      <div className="absolute top-1/2 -right-2 md:group-odd:-left-2 md:group-even:-right-2 w-4 h-4 bg-white border-b-2 border-r-2 border-[#0EA5E9] transform rotate-45 -translate-y-1/2 md:group-odd:border-none md:group-odd:border-t-2 md:group-odd:border-l-2"></div>
                    </div>
                  </div>

                  {/* Step 3: Pending */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-200 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <MapPin size={16} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 ml-4 md:ml-0 md:group-odd:pr-8 md:group-even:pl-8 text-left md:group-odd:text-right">
                      <h4 className="font-bold text-slate-400 text-sm">Siap Diantar</h4>
                      <p className="text-xs text-slate-400">Estimasi tiba pkl 17:00 WIB.</p>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
            
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] bg-[#0EA5E9]/20 blur-3xl rounded-full z-0"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#38BDF8]/30 blur-2xl rounded-full z-0"></div>
          </div>
          
        </div>
      </section>

      {/* 2. KALKULATOR HARGA (New Interactive Widget) */}
      <div id="kalkulator" className="scroll-mt-20">
        <PriceCalculatorWidget />
      </div>

      {/* 3. TIMELINE PROSES (New Widget) */}
      <div id="proses" className="scroll-mt-20">
        <ProcessTimeline />
      </div>

      {/* 4. LAYANAN & HARGA (Paket Langganan) */}
      <section id="layanan" className="py-32 px-6 bg-white relative scroll-mt-20">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0B1121]"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Paket <span className="text-[#0EA5E9]">Langganan Bulanan</span></h2>
              <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                Lebih hemat, bebas repot. Pilih paket langganan cuci bulanan yang sesuai dengan gaya hidup Anda dan keluarga.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paket Personal */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Personal</h3>
                  <p className="text-slate-500 font-light">Cocok untuk mahasiswa atau pekerja single.</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline text-slate-900">
                    <span className="text-2xl font-bold">Rp</span>
                    <span className="text-5xl font-black tracking-tighter">150.000</span>
                    <span className="text-slate-500 font-medium ml-1">/bln</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-1 rounded-full text-[#0EA5E9] shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span className="text-slate-700">Kuota cuci hingga 20 Kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-1 rounded-full text-[#0EA5E9] shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span className="text-slate-700">Cuci lipat rapi (tanpa setrika)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-1 rounded-full text-[#0EA5E9] shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span className="text-slate-700">Deterjen standar antibakteri</span>
                  </li>
                </ul>
                <a href={`https://wa.me/${DUMMY_WA}?text=Halo,%20saya%20mau%20langganan%20Paket%20Personal`} className="block w-full py-4 px-6 text-center rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors">
                  Pilih Personal
                </a>
              </div>
            </ScrollReveal>

            {/* Paket Premium */}
            <ScrollReveal delay={0.2}>
              <div className="bg-[#0EA5E9] border border-[#0EA5E9] rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden transform md:-translate-y-4 shadow-lg text-white">
                <div className="absolute top-0 right-0 bg-[#FDE047] text-[#854D0E] text-xs font-bold px-3 py-1 rounded-bl-lg">TERPOPULER</div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium</h3>
                  <p className="text-sky-100 font-light">Perawatan ekstra untuk pakaian harian.</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">Rp</span>
                    <span className="text-5xl font-black tracking-tighter">280.000</span>
                    <span className="text-sky-200 font-medium ml-1">/bln</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span>Kuota cuci hingga 30 Kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span>Cuci + Setrika uap wangi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span>Gratis pick-up & delivery (radius 5km)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1 rounded-full shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span>Deterjen hypoallergenic premium</span>
                  </li>
                </ul>
                <a href={`https://wa.me/${DUMMY_WA}?text=Halo,%20saya%20mau%20langganan%20Paket%20Premium`} className="block w-full py-4 px-6 text-center rounded-xl font-bold bg-white text-[#0EA5E9] hover:bg-slate-50 transition-colors">
                  Pilih Premium
                </a>
              </div>
            </ScrollReveal>

            {/* Paket Family */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Family</h3>
                  <p className="text-slate-500 font-light">Solusi cucian bersih untuk seluruh anggota keluarga.</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline text-slate-900">
                    <span className="text-2xl font-bold">Rp</span>
                    <span className="text-5xl font-black tracking-tighter">450.000</span>
                    <span className="text-slate-500 font-medium ml-1">/bln</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-1 rounded-full text-[#0EA5E9] shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span className="text-slate-700">Kuota cuci hingga 60 Kg</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-1 rounded-full text-[#0EA5E9] shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span className="text-slate-700">Cuci + Setrika uap wangi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-1 rounded-full text-[#0EA5E9] shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span className="text-slate-700">Prioritas mesin VIP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#E0F2FE] p-1 rounded-full text-[#0EA5E9] shrink-0 mt-0.5"><Sparkles size={14} /></div>
                    <span className="text-slate-700">Gratis cuci 2 pcs bedcover/selimut</span>
                  </li>
                </ul>
                <a href={`https://wa.me/${DUMMY_WA}?text=Halo,%20saya%20mau%20langganan%20Paket%20Family`} className="block w-full py-4 px-6 text-center rounded-xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors">
                  Pilih Family
                </a>
              </div>
            </ScrollReveal>
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

      {/* 7. BEFORE / AFTER (PERBANDINGAN NODA) */}
      <section id="galeri" className="py-24 px-6 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Perbandingan <span className="text-[#0EA5E9]">Before / After</span></h2>
              <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
                Bukan sekadar mencuci, kami melakukan treatment khusus pada noda membandel sebelum masuk mesin cuci.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex overflow-hidden rounded-xl h-64 mb-4">
                <div className="w-1/2 relative bg-slate-200 border-r-4 border-white">
                  <div className="absolute top-2 left-2 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                  <div className="w-full h-full flex items-center justify-center bg-[#FDE047]/20 relative">
                    <img src="https://images.unsplash.com/photo-1544253198-46cb5b161c56?auto=format&fit=crop&q=80&w=400" alt="Baju Kena Kopi" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" />
                    <span className="relative z-10 bg-white/80 p-2 text-sm font-bold shadow-sm rounded text-slate-900">Noda Kopi</span>
                  </div>
                </div>
                <div className="w-1/2 relative bg-white">
                  <div className="absolute top-2 right-2 bg-[#0EA5E9] text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=400" alt="Baju Bersih" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Noda Kopi / Teh</h3>
              <p className="text-slate-500 text-sm">Berhasil dihilangkan 100% tanpa merusak serat kain putih.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex overflow-hidden rounded-xl h-64 mb-4">
                <div className="w-1/2 relative bg-slate-200 border-r-4 border-white">
                  <div className="absolute top-2 left-2 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                  <div className="w-full h-full flex items-center justify-center bg-black/20 relative">
                    <img src="https://images.unsplash.com/photo-1524316634796-0370897b7cb4?auto=format&fit=crop&q=80&w=400" alt="Baju Kena Saus" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" />
                    <span className="relative z-10 bg-white/80 p-2 text-sm font-bold shadow-sm rounded text-slate-900">Tinta / Saus</span>
                  </div>
                </div>
                <div className="w-1/2 relative bg-white">
                  <div className="absolute top-2 right-2 bg-[#0EA5E9] text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                  <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=400" alt="Baju Bersih" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Noda Tinta & Saus</h3>
              <p className="text-slate-500 text-sm">Treatment spotting chemical khusus sebelum masuk mesin cuci utama.</p>
            </div>
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
          <DemoWatermark />
        </div>
      </footer>

      {/* 10. FLOATING WHATSAPP */}
      <FloatingWhatsApp 
        phoneNumber={DUMMY_WA}
        message="Halo Admin Bersih & Wangi Laundry, saya mau tanya layanan laundry."
        label="Tanya Sekarang"
      />

    </div>
  );
}
