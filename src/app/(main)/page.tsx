"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, MessageCircle, ArrowRight, LayoutTemplate, PenTool, Rocket, Code2, ChevronDown, Coffee, Shirt, Briefcase, Smartphone, Tent, Sparkles, ExternalLink } from "lucide-react";
import { pricingPlans, addOns } from "@/data/pricing";
import { catalogData } from "@/data/catalog";
import SpotlightCard from "@/components/SpotlightCard";
import BlurText from "@/components/BlurText";
import RotatingText from "@/components/RotatingText";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const WA_NUMBER = "6287794693241";
  
  // State for Mockup Carousel
  const [currentMockupIndex, setCurrentMockupIndex] = useState(0);
  const mockupItems = catalogData.filter(c => ["kopi-semesta", "ruang-rupa", "rapi-barbershop", "bersih-wangi-laundry"].includes(c.comparisonGroup || ""));
  // Get unique thumbnails (one per group)
  const uniqueMockups = mockupItems.filter((item, index, self) => 
    index === self.findIndex((t) => t.comparisonGroup === item.comparisonGroup)
  );

  // Dynamic categories from catalogData
  const dynamicCategories = Array.from(new Set(catalogData.map(c => c.category)));
  const getCategoryIcon = (cat: string) => {
    if (cat === "Kuliner") return <Coffee size={16} className="text-yellow-400 drop-shadow-sm" />;
    if (cat === "Fashion") return <Shirt size={16} className="text-yellow-400 drop-shadow-sm" />;
    if (cat === "Jasa") return <Briefcase size={16} className="text-yellow-400 drop-shadow-sm" />;
    return <Sparkles size={16} className="text-yellow-400 drop-shadow-sm" />;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMockupIndex((prev) => (prev + 1) % uniqueMockups.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [uniqueMockups.length]);
  
  return (
    <div className="w-full flex flex-col items-center relative bg-slate-950">
      
      {/* 1. TEKSTUR BACKGROUND (Grain/Noise Halus) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Hero Section */}
      <section className="w-full relative pt-32 pb-16 px-4 flex flex-col items-center text-center z-10 min-h-[95vh] overflow-hidden">
        
        {/* 2. RADIAL GLOW EFFECT (GOLD) */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,rgba(234,179,8,0.05)_40%,transparent_70%)] blur-3xl pointer-events-none"></div>
        {/* Optional Starfield/Particles - subtle gold */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.8)_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none mask-image-b"></div>

        <motion.div 
          className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1] md:leading-[1.1] drop-shadow-sm">
            <BlurText text="Bikin UMKM Kamu Punya" delay={0} /> <br className="hidden md:block"/>
            <BlurText text="Rumah Sendiri di" className="text-yellow-500" delay={0.3} /> <BlurText text="Internet" className="text-blue-400" delay={0.6} />
          </h1>
          <motion.div variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto drop-shadow-sm">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-3 gap-y-3 mb-4">
              <span>Solusi website premium khusus untuk bisnis</span>
              
              {/* 4. ELEVATED BADGE (Glassmorphism) */}
              <div className="relative group rounded-full overflow-hidden glass-pill shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                <RotatingText 
                  texts={dynamicCategories.map((cat, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-white font-bold">
                      {cat} {getCategoryIcon(cat)}
                    </span>
                  ))}
                  className="px-5 py-1.5 rounded-full text-base"
                />
              </div>
            </div>
            Tingkatkan kredibilitas dan jangkau lebih banyak pelanggan tanpa pusing urusan teknis.
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20mau%20konsultasi%20gratis%20untuk%20website%20UMKM%20saya`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-gradient-to-b from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
            >
              Konsultasi Gratis via WhatsApp
              <MessageCircle size={20} />
            </a>
            <a 
              href="#pricelist"
              className="w-full sm:w-auto bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/80 text-white border border-slate-700 font-medium px-8 py-4 rounded-full transition-colors shadow-xl"
            >
              Lihat Paket Harga
            </a>
          </motion.div>

          {/* 5. TRUST INDICATOR RINGAN */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-slate-400 font-medium mb-12">
            <div className="flex items-center gap-1.5">
              <Check size={14} className="text-yellow-500" />
              <span>Sudah dipakai UMKM Kuliner, Fashion & Jasa</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center gap-1.5">
              <Check size={14} className="text-yellow-500" />
              <span>Konsultasi gratis, tanpa komitmen</span>
            </div>
          </motion.div>

          {/* 6. PRODUCT MOCKUP "MENGINTIP" */}
          <motion.div 
            variants={fadeUp}
            className="w-full max-w-4xl relative mt-4 transform translate-y-8 md:translate-y-24 transition-transform duration-700 ease-out"
          >
            {/* Mockup Outer Glow */}
            <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-t-xl md:rounded-t-3xl transform -translate-y-4"></div>
            
            {/* Browser Frame */}
            <div className="relative glass-card border-[rgba(255,255,255,0.12)] rounded-t-xl md:rounded-t-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(234,179,8,0.1)] overflow-hidden flex flex-col h-[250px] md:h-[400px]">
              
              {/* Browser Header */}
              <div className="h-8 md:h-10 bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.08)] flex items-center px-4 gap-2 w-full z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#0B1121] rounded-md px-3 py-1 text-[10px] md:text-xs text-slate-500 flex items-center gap-2 w-1/2 md:w-1/3 max-w-[200px] justify-center truncate shadow-inner">
                    <Check size={10} className="text-green-500" /> elvorastudio.com/demo
                  </div>
                </div>
              </div>
              
              {/* Carousel Content */}
              <div className="relative flex-1 bg-slate-900 w-full h-full overflow-hidden">
                {uniqueMockups.map((item, index) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ 
                      opacity: index === currentMockupIndex ? 1 : 0,
                      scale: index === currentMockupIndex ? 1 : 1.05
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={item.thumbnail} 
                      alt={item.businessName} 
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Dark gradient overlay at bottom of mockup to fade it out slightly */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1121]/80 to-transparent"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full flex items-center justify-center -mb-px relative z-20">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent w-full max-w-5xl"></div>
      </div>

      {/* Trust Section */}
      <section className="w-full py-20 px-4 bg-[#f8f5f0] text-slate-900 flex justify-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shrink-0 bg-slate-800">
            <img 
              src="/profile/fayiz.webp" 
              alt="Faiz - Web Developer" 
              className="w-full h-full object-cover object-top scale-[1.15] translate-y-2"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-display mb-2 text-slate-900">Hai, Saya Faiz!</h2>
            <p className="text-yellow-600 text-sm font-bold uppercase tracking-wider mb-4">Web Developer Khusus UMKM</p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Saya fokus membantu pelaku UMKM lokal memiliki identitas digital yang profesional. 
              Saya percaya bahwa setiap bisnis, sekecil apapun, berhak mendapatkan desain website kualitas agensi dengan harga yang masuk akal.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="w-full py-24 px-4 bg-[#f8f5f0] flex justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">Bagaimana Proses Kerjanya?</h2>
            <p className="text-slate-600 font-medium mb-6">Anti ribet, terima beres. Anda cukup siapkan materi bisnisnya.</p>
            <div className="md:hidden flex items-center justify-center text-xs text-slate-400 font-bold uppercase tracking-wider animate-pulse gap-2">
              <ArrowRight size={14} /> Geser untuk tahap selanjutnya <ArrowRight size={14} />
            </div>
          </div>
          
          <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-4 md:gap-8 relative overflow-x-auto pb-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent -translate-y-1/2 z-0"></div>
            
            {[
              { icon: MessageCircle, title: "1. Konsultasi", desc: "Diskusi via WA tentang kebutuhan bisnis dan fitur.", time: "1-2 Hari" },
              { icon: PenTool, title: "2. Desain & Draft", desc: "Pembuatan struktur dan desain visual website.", time: "3-5 Hari" },
              { icon: Code2, title: "3. Development", desc: "Proses coding dan integrasi fitur interaktif.", time: "4-7 Hari" },
              { icon: Rocket, title: "4. Deploy & Handover", desc: "Website online, optimasi, dan serah terima.", time: "1 Hari" },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 }}}}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 min-w-[80vw] sm:min-w-[300px] md:min-w-0 snap-center shrink-0"
              >
                <div className="w-16 h-16 bg-[#f8f5f0] border border-slate-200 rounded-full flex items-center justify-center text-yellow-600 mb-6 shadow-sm">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{step.desc}</p>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  Estimasi: {step.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricelist */}
      <section id="pricelist" className="w-full py-24 px-4 bg-slate-900/30 border-y border-white/5 flex justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Investasi Digital Anda</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Pilih paket yang paling sesuai dengan skala bisnis dan kebutuhan Anda saat ini. Tidak ada biaya tersembunyi.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16 pt-6 lg:pt-8 px-4 lg:px-0">
            {pricingPlans.map((plan, idx) => (
              <motion.div 
                key={plan.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.15 }}}}
                className={`relative w-full ${plan.isPopular ? 'scale-100 lg:scale-105 z-10' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="whitespace-nowrap bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Paling Direkomendasikan
                    </span>
                  </div>
                )}
                <SpotlightCard 
                  spotlightColor={plan.isPopular ? "rgba(234, 179, 8, 0.2)" : "rgba(255, 255, 255, 0.05)"}
                  className={`flex flex-col p-8 h-full rounded-3xl relative overflow-hidden glass-card ${
                    plan.isPopular 
                      ? 'border-yellow-500/50 shadow-[inset_0_0_20px_rgba(234,179,8,0.2)] shadow-yellow-500/10' 
                      : ''
                  }`}
                >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-display mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg text-slate-500 line-through decoration-red-500/50">{plan.originalPrice}</span>
                        {plan.discountNote && (
                          <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            {plan.discountNote}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-white">{plan.price}</div>
                  </div>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>
                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-0.5 shrink-0 ${feature.included ? 'text-yellow-500' : 'text-slate-700'}`}>
                        <Check size={18} />
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-slate-300' : 'text-slate-600 line-through'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                <a 
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(plan.waMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full text-center py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-yellow-500 hover:bg-yellow-400 text-slate-950' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
                >
                  {plan.ctaText}
                </a>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-3xl mx-auto bg-slate-950 border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Add-Ons / Layanan Tambahan</h3>
            <div className="divide-y divide-white/5">
              {addOns.map((addon, idx) => (
                <div key={idx} className="flex justify-between items-center py-4">
                  <span className="text-slate-300">{addon.name}</span>
                  <span className="text-yellow-500 font-medium">{addon.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full flex items-center justify-center -mt-px relative z-20">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent w-full max-w-5xl"></div>
      </div>

      {/* Preview Katalog Teaser */}
      <section className="w-full py-24 px-4 bg-[#050B14] flex justify-center overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-6xl mx-auto w-full relative text-center"
        >
          {/* Decorative blur */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 mb-16">
            <LayoutTemplate size={48} className="mx-auto text-yellow-500 mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Sudah Dipakai 3 Jenis UMKM</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Contoh nyata, bukan sekadar template. Jelajahi fitur premium yang disesuaikan khusus untuk tiap model bisnis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16 relative z-10">
            {catalogData
              .filter(item => item.packageType === "Full Katalog")
              .slice(0, 3)
              .map((item, idx) => (
                <Link 
                  href={`/demo/${item.slug}`} 
                  key={idx}
                  className="group relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 flex flex-col h-full backdrop-blur-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.businessName} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-slate-950/80 backdrop-blur border border-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        {item.packageType}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{item.businessName}</h3>
                      <ExternalLink size={18} className="text-slate-500 group-hover:text-yellow-500 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-400 line-clamp-2">{item.description}</p>
                  </div>
                </Link>
              ))}
          </div>

          <Link 
            href="/katalog"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl relative z-10"
          >
            Lihat Semua di Katalog <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full flex items-center justify-center -mt-px relative z-20">
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent w-full max-w-5xl"></div>
      </div>

      {/* FAQ */}
      <section className="w-full py-24 px-4 bg-[#FDFBF7] border-t border-slate-200 flex justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">Pertanyaan Seputar Jasa</h2>
            <p className="text-slate-600 font-medium">Yang sering ditanyakan sebelum memulai project.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Berapa lama proses pengerjaannya?", a: "Tergantung paket yang dipilih dan kesiapan materi dari Anda (foto, teks, logo). Rata-rata memakan waktu 3 hingga 10 hari kerja." },
              { q: "Apakah saya bisa menggunakan nama domain sendiri (.com / .id)?", a: "Ya, untuk paket Basic dan Full Katalog sudah termasuk gratis custom domain (misal: namausaha.com) untuk 1 tahun pertama." },
              { q: "Bagaimana sistem pembayarannya?", a: "Pembayaran dilakukan 2 tahap: DP 50% sebelum project dimulai, dan pelunasan 50% setelah website selesai dan siap online." },
              { q: "Apakah ada biaya bulanan/tahunan?", a: "Tidak ada biaya bulanan/tahunan maupun biaya hosting tambahan dari kami. Anda hanya perlu memperpanjang custom domain Anda sendiri setiap tahun (mulai tahun kedua)." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between p-6 font-bold cursor-pointer text-lg text-slate-900 hover:bg-slate-50 transition-colors">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown size={20} className="text-slate-400" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100 leading-relaxed font-medium">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Penutup */}
      <section className="w-full py-32 px-4 flex justify-center text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Mulai Transformasi Digital Bisnis Anda Hari Ini</h2>
          <p className="text-xl text-slate-400 mb-10">
            Masih bingung paket mana yang cocok? Mari diskusi gratis tanpa komitmen apapun.
          </p>
          <a 
            href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20tapi%20masih%20bingung%20pilih%20paket.%20Bisa%20bantu%20konsultasi?`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-10 py-5 rounded-full text-lg transition-transform hover:scale-105 shadow-xl shadow-yellow-500/20"
          >
            Mulai Konsultasi Sekarang
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
