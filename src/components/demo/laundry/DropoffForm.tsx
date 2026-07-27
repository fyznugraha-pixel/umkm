"use client";

import React, { useState } from "react";
import { X, Scale, Clock, Truck } from "lucide-react";
import { useLaundryStore, LaundryService } from "./LaundryContext";

interface DropoffFormProps {
  isOpen: boolean;
  onClose: () => void;
  service: LaundryService | null;
}

export default function DropoffForm({ isOpen, onClose, service }: DropoffFormProps) {
  const { submitDropoff } = useLaundryStore();
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    speedOption: "Reguler" as "Reguler" | "Express",
    estimatedKg: 1
  });
  const [reference, setReference] = useState<string>("");

  if (!isOpen || !service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const order = submitDropoff(
      formData.customerName,
      formData.customerPhone,
      formData.speedOption,
      formData.estimatedKg,
      service.id
    );
    if (order) {
      setReference(order.referenceNumber);
      setStep(2);
    }
  };

  const handleClose = () => {
    setStep(1);
    setReference("");
    setFormData({ customerName: "", customerPhone: "", speedOption: "Reguler", estimatedKg: 1 });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative">
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-800 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {step === 1 ? (
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Form Drop-off Cucian</h3>
            <p className="text-slate-500 mb-8">Layanan: <span className="font-semibold text-sky-600">{service.name}</span></p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                  <input 
                    required
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">No. WhatsApp</label>
                  <input 
                    required
                    type="tel"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({...formData, customerPhone: e.target.value})}
                    placeholder="Contoh: 08123456789"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <label className="block text-sm font-semibold text-slate-700 mb-4">Pilih Kecepatan Layanan</label>
                <div className="grid grid-cols-2 gap-4">
                  {service.speedOptions?.map((opt) => (
                    <div 
                      key={opt.label}
                      onClick={() => setFormData({...formData, speedOption: opt.label as any})}
                      className={`cursor-pointer rounded-2xl p-4 border-2 transition-all ${
                        formData.speedOption === opt.label 
                          ? "border-sky-500 bg-sky-50" 
                          : "border-slate-100 bg-white hover:border-sky-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-900">{opt.label}</span>
                        {opt.label === "Express" && <Clock size={16} className="text-amber-500" />}
                      </div>
                      <p className="text-sm text-slate-500 mb-2">{opt.estimasiHari}</p>
                      <p className="text-sm font-bold text-sky-600">Rp {opt.pricePerKg.toLocaleString("id-ID")}/kg</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Scale size={18} className="text-slate-400" /> Estimasi Berat (Kg)
                </label>
                <p className="text-xs text-slate-500 mb-3">Hanya perkiraan Anda. Berat aktual akan dihitung saat Anda mengantar cucian.</p>
                <div className="flex items-center gap-4">
                  <button 
                    type="button"
                    onClick={() => setFormData(p => ({...p, estimatedKg: Math.max(1, p.estimatedKg - 1)}))}
                    className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center font-black text-2xl text-slate-900">
                    {formData.estimatedKg} <span className="text-lg text-slate-400 font-medium">kg</span>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setFormData(p => ({...p, estimatedKg: p.estimatedKg + 1}))}
                    className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-2xl transition-colors shadow-lg shadow-sky-500/30"
              >
                Buat Kode Drop-off
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Drop-off Terdaftar!</h3>
            <p className="text-slate-600 mb-6">Silakan bawa cucian Anda ke gerai kami. Sebutkan atau tunjukkan kode referensi di bawah ini kepada kasir kami:</p>
            
            <div className="bg-sky-50 border-2 border-sky-100 p-6 rounded-2xl mb-8">
              <p className="text-sm font-medium text-sky-600 uppercase tracking-widest mb-2">Kode Referensi</p>
              <p className="text-4xl font-black text-slate-900 tracking-wider">{reference}</p>
            </div>

            <p className="text-sm text-slate-500 mb-8 bg-slate-50 p-4 rounded-xl text-left border border-slate-100">
              <strong className="text-slate-700 block mb-1">Penting:</strong>
              Harga final akan dihitung setelah kami menimbang cucian Anda. Anda bisa memantau status cucian dan tagihan dengan kode referensi ini.
            </p>

            <a 
              href="/demo/bersih-wangi-laundry-full/status"
              className="block w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl transition-colors mb-4"
            >
              Cek Status Pesanan Nanti
            </a>
            <button 
              onClick={handleClose}
              className="block w-full py-4 bg-transparent hover:bg-slate-50 text-slate-600 font-bold rounded-2xl transition-colors"
            >
              Tutup & Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
