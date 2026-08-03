"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, MessageCircle, ArrowRight, LayoutTemplate, PenTool, Rocket, Code2, ChevronDown, Coffee, Shirt, Briefcase, Smartphone, Tent, Sparkles, ExternalLink } from "lucide-react";
import { getPricingPlans, getAddOns } from "@/data/pricing";
import { getCatalogData } from "@/data/catalog";
import SpotlightCard from "@/components/SpotlightCard";
import BlurText from "@/components/BlurText";
import RotatingText from "@/components/RotatingText";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  const { t, language } = useLanguage();
  const pricingPlans = getPricingPlans(language);
  const addOns = getAddOns(language);
  const WA_NUMBER = "6287794693241";
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20UMKM`;
  
  // State for Mockup Carousel
  const [currentMockupIndex, setCurrentMockupIndex] = useState(0);
  const catalogData = getCatalogData(language);
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
            <BlurText text={t('home.hero.title1')} delay={0} /> <br className="hidden md:block"/>
            <BlurText text={t('home.hero.title2')} className="text-yellow-500" delay={0.3} /> <BlurText text={t('home.hero.title3')} className="text-blue-400" delay={0.6} />
          </h1>
          <motion.div variants={fadeUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-4xl mx-auto drop-shadow-sm leading-relaxed w-full px-4">
            <div className="flex flex-row items-center justify-center gap-3 mb-4 w-full">
              <span className="shrink text-center">
                {t('home.hero.subtitle')}
              </span>
              <div className="relative group rounded-full overflow-hidden glass-pill shadow-[0_4px_24px_rgba(0,0,0,0.2)] shrink-0">
                <RotatingText 
                  texts={dynamicCategories.map((cat, idx) => (
                    <span key={idx} className="flex items-center gap-2 text-white font-bold">
                      {t(`catalog.badges.${cat}`)} {getCategoryIcon(cat)}
                    </span>
                  ))}
                  className="px-4 py-1.5 rounded-full text-sm md:text-base"
                />
              </div>
            </div>
            <p className="mt-4 px-4">{t('home.hero.description')}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href={WA_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto bg-gradient-to-b from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-950 font-bold px-8 h-14 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.2)] whitespace-nowrap"
            >
              <MessageCircle size={20} /> {t('home.hero.cta_whatsapp')}
            </a>
            <a 
              href="#pricelist"
              className="w-full sm:w-auto bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-white hover:text-white border border-slate-700 font-medium px-8 h-14 rounded-full flex items-center justify-center gap-2 transition-colors shadow-xl backdrop-blur-md whitespace-nowrap"
            >
              <span className="whitespace-nowrap">{t('home.hero.cta_pricing')}</span> <ArrowRight size={20} className="shrink-0" />
            </a>
          </motion.div>

          {/* 5. TRUST INDICATOR RINGAN */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-slate-400 font-medium mb-12">
            <div className="flex items-center gap-1.5">
              <Check size={14} className="text-yellow-500 shrink-0" />
              <span>{t('home.hero.trust1')}</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-700"></div>
            <div className="flex items-center gap-1.5">
              <Check size={14} className="text-yellow-500 shrink-0" />
              <span>{t('home.hero.trust2')}</span>
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
                    <Check size={10} className="text-green-500" /> elvoraspace.com/demo
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
            <h2 className="text-3xl font-bold font-display mb-2 text-slate-900">{t('home.trust.title')}</h2>
            <p className="text-yellow-600 text-sm font-bold uppercase tracking-wider mb-4">{t('home.trust.subtitle')}</p>
            <p className="text-slate-700 text-lg leading-relaxed">
              {t('home.trust.description')}
            </p>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="w-full py-24 px-4 bg-[#f8f5f0] flex justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">{t('home.process.title')}</h2>
            <p className="text-slate-600 font-medium mb-6">{t('home.process.subtitle')}</p>
            <div className="md:hidden flex items-center justify-center text-xs text-slate-400 font-bold uppercase tracking-wider animate-pulse gap-2">
              <ArrowRight size={14} /> {t('home.process.swipe')} <ArrowRight size={14} />
            </div>
          </div>
          
          <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-4 md:gap-8 relative overflow-x-auto pb-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent -translate-y-1/2 z-0"></div>
            
            {[0, 1, 2, 3].map((idx) => {
              const icons = [MessageCircle, PenTool, Code2, Rocket];
              const Icon = icons[idx];
              return (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 }}}}
                className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 min-w-[80vw] sm:min-w-[300px] md:min-w-0 snap-center shrink-0"
              >
                <div className="w-16 h-16 bg-[#f8f5f0] border border-slate-200 rounded-full flex items-center justify-center text-yellow-600 mb-6 shadow-sm">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{t(`home.process.steps.${idx}.title`)}</h3>
                <p className="text-slate-600 text-sm mb-4">{t(`home.process.steps.${idx}.desc`)}</p>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                  {t('home.process.estimated')}: {t(`home.process.steps.${idx}.time`)}
                </span>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricelist */}
      <section id="pricelist" className="w-full py-24 px-4 bg-slate-900/30 border-y border-white/5 flex justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.pricing.title')}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t('home.pricing.subtitle')}
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
                      {t('home.pricing.popular')}
                    </span>
                  </div>
                )}
                <SpotlightCard 
                  spotlightColor={plan.isPopular ? "rgba(234, 179, 8, 0.2)" : "rgba(255, 255, 255, 0.05)"}
                  className={`flex flex-col h-full rounded-3xl relative overflow-hidden glass-card ${
                    plan.isPopular 
                      ? 'border-yellow-500/50 shadow-[inset_0_0_20px_rgba(234,179,8,0.2)] shadow-yellow-500/10' 
                      : ''
                  }`}
                >
                  <Card className="bg-transparent border-none shadow-none text-white h-full flex flex-col p-8">
                    <CardHeader className="p-0 mb-8">
                      <CardTitle className="text-2xl font-bold font-display mb-2">{plan.name}</CardTitle>
                      <div className="mb-4">
                        {plan.originalPrice && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg text-slate-500 line-through decoration-red-500/50">{plan.originalPrice}</span>
                            {plan.discountNote && (
                              <Badge variant="destructive" className="bg-red-400/10 text-red-400 uppercase tracking-wide">
                                {plan.discountNote}
                              </Badge>
                            )}
                          </div>
                        )}
                        <div className="text-3xl font-bold text-white">{plan.price}</div>
                      </div>
                      <CardDescription className="text-slate-400 text-sm">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 space-y-4 mb-8">
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
                    </CardContent>
                    <CardFooter className="p-0">
                      <a 
                        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(plan.waMessage)}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`w-full h-14 flex items-center justify-center rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-yellow-500 hover:bg-yellow-400 text-slate-950' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
                      >
                        {plan.ctaText}
                      </a>
                    </CardFooter>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-slate-950 border-white/10 p-2 md:p-4 text-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-white">{t('home.pricing.addons')}</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-white/5 pb-2">
                {addOns.map((addon, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4">
                    <span className="text-slate-300">{addon.name}</span>
                    <span className="text-yellow-500 font-medium">{addon.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
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
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">{t('home.teaser.title')}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {t('home.teaser.subtitle')}
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
                  className="group relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
                >
                  <Card className="bg-slate-900/50 border-white/10 overflow-hidden h-full flex flex-col backdrop-blur-sm group-hover:border-yellow-500/50 group-hover:shadow-2xl group-hover:shadow-yellow-500/10 transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={item.thumbnail} 
                        alt={item.businessName} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="outline" className="bg-slate-950/80 backdrop-blur border-white/10 text-white text-[10px] uppercase tracking-wider">
                          {item.category}
                        </Badge>
                        <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 text-[10px] uppercase tracking-wider border-none">
                          {item.packageType}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">{item.businessName}</CardTitle>
                        <ExternalLink size={18} className="text-slate-500 group-hover:text-yellow-500 transition-colors shrink-0 ml-2" />
                      </div>
                      <CardDescription className="text-sm text-slate-400 line-clamp-2">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
          </div>

          <Link 
            href="/katalog"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 h-14 rounded-full font-bold transition-all hover:scale-105 shadow-xl relative z-10 whitespace-nowrap"
          >
            {t('home.teaser.cta')} <ArrowRight size={18} />
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
            <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">{t('home.faq.title')}</h2>
            <p className="text-slate-600 font-medium">{t('home.faq.subtitle')}</p>
          </div>
          
          <Accordion className="space-y-4">
            {[0, 1, 2, 3].map((idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="font-bold text-lg text-slate-900 hover:no-underline hover:text-slate-700 py-6 text-left">
                  {t(`home.faq.questions.${idx}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed font-medium pb-6">
                  {t(`home.faq.questions.${idx}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Penutup */}
      <section className="w-full py-32 px-4 flex justify-center text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl text-slate-400 mb-10">
            {t('home.cta.subtitle')}
          </p>
          <a 
            href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20tapi%20masih%20bingung%20pilih%20paket.%20Bisa%20bantu%20konsultasi?`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-10 h-16 rounded-full text-lg transition-transform hover:scale-105 shadow-xl shadow-yellow-500/20 whitespace-nowrap"
          >
            {t('home.cta.button')}
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
