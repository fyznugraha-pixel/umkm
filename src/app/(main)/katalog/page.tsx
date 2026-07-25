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
    <div className="w-full flex flex-col items-center pt-24 pb-32 px-4">
      {/* Header */}
      <section className="max-w-4xl w-full text-center mb-16">
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
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
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
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
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
                  className="group bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-colors flex flex-col"
                >
                <div className="relative h-48 sm:h-56 w-full bg-slate-800 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.businessName} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-slate-950/80 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-slate-300">
                      {item.category}
                    </span>
                    <span className="bg-yellow-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.packageType}
                    </span>
                  </div>
                  {item.comparisonGroup && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
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
