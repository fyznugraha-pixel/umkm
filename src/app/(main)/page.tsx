"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, MessageCircle, ArrowRight, LayoutTemplate, PenTool, Rocket, Code2, ChevronDown, Coffee, Shirt, Briefcase, Smartphone, Tent, Sparkles } from "lucide-react";
import { pricingPlans, addOns } from "@/data/pricing";
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
  
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden pt-24 pb-32 px-4 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1] md:leading-[1.1]">
            <BlurText text="Bikin UMKM Kamu Punya" delay={0} /> <br className="hidden md:block"/>
            <BlurText text="Rumah Sendiri di" className="text-yellow-500" delay={0.3} /> <BlurText text="Internet" className="text-blue-500" delay={0.6} />
          </h1>
          <motion.div variants={fadeUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-2 gap-y-1 mb-2">
              <span>Solusi website premium khusus untuk bisnis</span>
              <RotatingText 
                texts={[
                  <span key="1" className="flex items-center gap-2">F&B dan Kuliner <Coffee size={18} className="text-yellow-400" /></span>, 
                  <span key="2" className="flex items-center gap-2">Fashion & Hijab <Shirt size={18} className="text-yellow-400" /></span>, 
                  <span key="3" className="flex items-center gap-2">Jasa Profesional <Briefcase size={18} className="text-yellow-400" /></span>, 
                  <span key="4" className="flex items-center gap-2">Toko Gadget <Smartphone size={18} className="text-yellow-400" /></span>, 
                  <span key="5" className="flex items-center gap-2">Event Organizer <Tent size={18} className="text-yellow-400" /></span>, 
                  <span key="6" className="flex items-center gap-2">Skincare & Beauty <Sparkles size={18} className="text-yellow-400" /></span>
                ]} 
                className="text-white font-bold bg-white/10 px-4 py-1 rounded-full text-base md:text-lg border border-white/10 shadow-lg"
              />
            </div>
            Tingkatkan kredibilitas dan jangkau lebih banyak pelanggan tanpa pusing urusan teknis.
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20mau%20konsultasi%20gratis%20untuk%20website%20UMKM%20saya`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              Konsultasi Gratis via WhatsApp
              <MessageCircle size={20} />
            </a>
            <a 
              href="#pricelist"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-4 rounded-full transition-colors"
            >
              Lihat Paket Harga
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="w-full py-20 px-4 bg-[#FDFBF7] text-slate-900 flex justify-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shrink-0 bg-slate-800">
            <img 
              src="/profile/fayiz.png" 
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
      <section className="w-full py-24 px-4 bg-[#FDFBF7] flex justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">Bagaimana Proses Kerjanya?</h2>
            <p className="text-slate-600 font-medium">Anti ribet, terima beres. Anda cukup siapkan materi bisnisnya.</p>
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
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center shrink-0"
              >
                <div className="w-16 h-16 bg-[#FDFBF7] border border-slate-200 rounded-full flex items-center justify-center text-yellow-600 mb-6 shadow-sm">
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

          <div className="flex flex-nowrap lg:grid lg:grid-cols-3 gap-4 lg:gap-8 items-start mb-16 overflow-x-auto lg:overflow-visible pt-6 lg:pt-8 px-4 lg:px-0 -mx-4 lg:mx-0 pb-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {pricingPlans.map((plan, idx) => (
              <motion.div 
                key={plan.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.15 }}}}
                className={`relative min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center shrink-0 ${plan.isPopular ? 'scale-100 lg:scale-105 z-10' : ''}`}
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
                  className={`flex flex-col p-8 h-full rounded-3xl border ${plan.isPopular ? 'border-yellow-500/50 bg-slate-900 shadow-2xl shadow-yellow-500/10' : 'border-white/10 bg-slate-950'}`}
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

      {/* Preview Katalog Teaser */}
      <section className="w-full py-24 px-4 bg-[#FDFBF7] flex justify-center overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-5xl mx-auto w-full relative bg-white border border-slate-200 p-8 md:p-16 rounded-3xl text-center shadow-2xl shadow-slate-200/50 overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <LayoutTemplate size={48} className="mx-auto text-slate-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">Contoh Hasil Kerja</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Portfolio pertama saya sedang dalam proses pembuatan. Jadilah salah satu klien awal saya dan dapatkan <span className="text-yellow-600 font-bold">Prioritas Revisi Unlimited</span> tanpa syarat!
            </p>
            <Link 
              href="/katalog"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl shadow-slate-900/20"
            >
              Lihat Ruang Katalog <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

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
