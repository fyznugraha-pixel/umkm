"use client";

import React from "react";
import { CheckCircle2, ClipboardCheck, Sparkles, Wind, Truck, Shirt } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PROCESS_STEPS = [
  {
    icon: <ClipboardCheck size={28} />,
    title: "1. Sortir & Tagging",
    description: "Memisahkan pakaian berdasarkan warna dan bahan, lalu memberi tagging unik per pelanggan. Tidak akan pernah tertukar."
  },
  {
    icon: <Sparkles size={28} />,
    title: "2. Spotting Treatment",
    description: "Pembersihan awal (pra-cuci) khusus di area noda membandel seperti kerah, ketiak, atau percikan makanan."
  },
  {
    icon: <Wind size={28} />,
    title: "3. Cuci & Sterilisasi",
    description: "Proses pencucian menggunakan mesin terpisah dengan deterjen ramah lingkungan dan anti-bakteri."
  },
  {
    icon: <Shirt size={28} />,
    title: "4. Setrika Uap",
    description: "Pakaian disetrika menggunakan boiler uap panas tinggi yang aman untuk kain sutra maupun sablon kaos."
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "5. Quality Control",
    description: "Pengecekan akhir untuk memastikan tidak ada noda tersisa dan pakaian terlipat presisi sebelum dikemas."
  },
  {
    icon: <Truck size={28} />,
    title: "6. Siap Diambil",
    description: "Pakaian dikemas rapi dalam plastik pelindung, wangi, dan siap dijemput atau diantar kembali ke rumah Anda."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 px-6 bg-[#0B1121] text-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Perjalanan <span className="text-[#0EA5E9]">Pakaian Anda</span></h2>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Kami menerapkan standar 6 langkah ketat untuk memastikan higienitas dan kualitas hasil cucian. Setiap helai pakaian Anda diperlakukan dengan penuh kehati-hatian.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-[#131B2F] border border-slate-800 rounded-3xl p-8 hover:border-[#0EA5E9] transition-colors h-full flex flex-col group">
                <div className="w-16 h-16 bg-slate-800 text-slate-300 group-hover:bg-[#0EA5E9] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
