"use client";

import React, { useState } from "react";
import { Calculator, ChevronRight, Scale } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  { id: "reguler", name: "Cuci + Setrika Reguler", price: 8000, suffix: "/kg", highlight: "2-3 Hari" },
  { id: "express", name: "Cuci + Setrika Express", price: 15000, suffix: "/kg", highlight: "Same-Day" },
  { id: "lipat", name: "Cuci Kering + Lipat", price: 6000, suffix: "/kg", highlight: "24 Jam" }
];

export default function PriceCalculatorWidget() {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [weight, setWeight] = useState<number>(3); // Min 3kg

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    setWeight(val);
  };

  const calculateTotal = () => {
    // minimum 3kg
    const effectiveWeight = Math.max(weight, 3);
    return effectiveWeight * selectedService.price;
  };

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Kalkulator <span className="text-[#0EA5E9]">Estimasi Harga</span></h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              Hitung perkiraan biaya laundry Anda sebelum datang ke konter. Praktis dan transparan.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
            
            {/* Input Section */}
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Pilih Layanan Kiloan</label>
                <div className="space-y-3">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`w-full text-left px-6 py-4 rounded-2xl border-2 transition-all flex justify-between items-center ${
                        selectedService.id === srv.id 
                        ? "border-[#0EA5E9] bg-white shadow-md" 
                        : "border-transparent bg-white hover:border-slate-200"
                      }`}
                    >
                      <div>
                        <p className={`font-bold ${selectedService.id === srv.id ? "text-slate-900" : "text-slate-600"}`}>{srv.name}</p>
                        <p className="text-xs text-slate-400 mt-1">Estimasi: {srv.highlight}</p>
                      </div>
                      <span className={`font-bold ${selectedService.id === srv.id ? "text-[#0EA5E9]" : "text-slate-500"}`}>
                        Rp {srv.price.toLocaleString("id-ID")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">Estimasi Berat (Kg)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Scale className="text-slate-400" size={20} />
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={weight || ""}
                    onChange={handleWeightChange}
                    className="w-full bg-white border-2 border-slate-200 rounded-2xl py-4 pl-14 pr-6 text-xl font-bold text-slate-900 focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  />
                </div>
                {weight < 3 && weight > 0 && (
                  <p className="text-xs text-amber-500 font-bold mt-2 ml-2">*Minimal order 3 Kg per nota transaksi.</p>
                )}
              </div>
            </div>

            {/* Result Section */}
            <div className="w-full md:w-1/2 bg-[#0B1121] rounded-3xl p-8 md:p-12 text-white text-center flex flex-col justify-center items-center h-full min-h-[400px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Calculator size={120} />
              </div>
              
              <div className="relative z-10 w-full">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Total Estimasi</p>
                <div className="flex items-start justify-center gap-2 mb-8">
                  <span className="text-2xl font-bold text-[#0EA5E9] mt-2">Rp</span>
                  <span className="text-6xl md:text-7xl font-black tracking-tighter">
                    {calculateTotal().toLocaleString("id-ID")}
                  </span>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 text-left mb-8 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Layanan</span>
                    <span className="font-bold">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Harga per Kg</span>
                    <span className="font-bold">Rp {selectedService.price.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Berat Dihitung</span>
                    <span className="font-bold">{Math.max(weight, 3)} Kg</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6280000000000?text=Halo%20Admin,%20saya%20mau%20order%20layanan%20${selectedService.name}%20dengan%20estimasi%20berat%20${weight}kg`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex justify-center items-center gap-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold py-5 rounded-2xl transition-colors text-lg"
                >
                  Order Sekarang <ChevronRight size={20} />
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
