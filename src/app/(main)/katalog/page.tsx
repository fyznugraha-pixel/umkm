"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTemplate, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { catalogData } from "@/data/catalog";

const tiers = ["Semua", "Mini Landing Page", "Basic", "Full Katalog"];
const nicheCategories = ["Semua Kategori", "Kuliner", "Fashion", "Jasa"];

export default function KatalogPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [activeCategory, setActiveCategory] = useState("Semua Kategori");
  const WA_NUMBER = "6287794693241";

  return (
    <div className="w-full flex flex-col items-center pt-24 pb-32 px-4 relative bg-slate-950 min-h-screen">
      
      {/* 1. TEKSTUR BACKGROUND (Grain/Noise Halus) - Consistent with Home */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Header */}
      <section className="max-w-4xl w-full text-center mb-16 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold mb-6"
        >
          Katalog <span className="text-yellow-400">Portfolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Kumpulan hasil karya dan proyek website UMKM yang pernah kami kerjakan.
        </motion.p>
      </section>

      {/* Tabs */}
      <section className="max-w-6xl w-full mb-16 space-y-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {tiers.map((tier, idx) => (
            <motion.button
              key={tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.05) }}
              onClick={() => setActiveTab(tier)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tier 
                  ? 'bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/20' 
                  : 'glass-pill hover:brightness-110 shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
              }`}
            >
              {tier}
            </motion.button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {nicheCategories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.05) }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/20' 
                  : 'glass-pill hover:brightness-110 shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Catalog Grid or Empty State */}
      <section className="max-w-6xl w-full flex justify-center">
        {(() => {
          const filteredData = catalogData.filter(item => {
            const matchTier = activeTab === "Semua" || item.packageType === activeTab;
            const matchCategory = activeCategory === "Semua Kategori" || item.category === activeCategory;
            return matchTier && matchCategory;
          });

          return filteredData.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative">
            <AnimatePresence>
              {filteredData.map((item, idx) => (
                <motion.div
                  layout
                  key={item.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group glass-card rounded-2xl overflow-hidden hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all flex flex-col"
                >
                <div className="relative h-48 sm:h-56 w-full bg-slate-800 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.businessName} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Scrim Overlay to ensure text contrast for badges */}
                  <div className="absolute top-0 inset-x-0 h-[45%] bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-10"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <span 
                      className="glass-pill text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                    >
                      {item.category}
                    </span>
                    <span 
                      className="glass-pill text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                    >
                      {item.packageType}
                    </span>
                  </div>
                  {item.comparisonGroup && (
                    <div className="absolute top-4 right-4 z-20">
                      <span 
                        className="glass-pill text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                      >
                        Bandingkan Versi
                      </span>
                    </div>
                  )}
                </div>
                
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold font-display text-white group-hover:text-yellow-500 transition-colors">
                        {item.businessName}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                      <div className="flex flex-col">
                        {item.originalPrice && item.discountNote && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-slate-500 line-through text-xs">{item.originalPrice}</span>
                            <span className="text-red-400 text-[10px] font-bold bg-red-500/10 px-1.5 py-0.5 rounded uppercase tracking-wider">{item.discountNote}</span>
                          </div>
                        )}
                        <span className="font-bold text-white text-lg">{item.packagePrice}</span>
                      </div>
                    <Link 
                      href={`/demo/${item.slug}`} 
                      className="inline-flex items-center gap-2 text-yellow-500 text-sm font-medium hover:text-yellow-400 transition-transform group-hover:translate-x-1"
                    >
                      Lihat Demo <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden max-w-4xl w-full"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center text-yellow-500 mb-8 shadow-2xl relative">
                <LayoutTemplate size={40} />
                <div className="absolute -top-2 -right-2 text-teal-400">
                  <Sparkles size={24} />
                </div>
              </div>
              
              <h2 className="text-3xl font-display font-bold mb-4">Ruang Portfolio Sedang Disiapkan</h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
                Sistem katalog kami sudah siap, namun proyek untuk kategori ini sedang dalam tahap pengembangan. 
                <br/><br/>
                <strong className="text-white">Jadilah klien pertama kami</strong> dan dapatkan harga khusus serta layanan prioritas tanpa batas revisi.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
                <a 
                  href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20jasa%20website%20UMKM.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-6 py-4 rounded-full flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  Klaim Promo Klien Pertama
                  <MessageCircle size={20} />
                </a>
                <Link 
                  href="/"
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-6 py-4 rounded-full transition-colors flex items-center justify-center"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </motion.div>
        );
        })()}
      </section>
    </div>
  );
}
