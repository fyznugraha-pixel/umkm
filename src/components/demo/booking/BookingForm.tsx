"use client";

import React, { useState } from "react";
import PaymentMethodSelector, { PaymentMethod } from "@/components/demo/order/PaymentMethodSelector";

interface BookingFormProps {
  onSubmit: (data: {
    customerName: string;
    customerPhone: string;
    notes: string;
    paymentMethod: PaymentMethod;
    paymentProof?: string;
  }) => void;
  totalPrice: number;
}

export default function BookingForm({ onSubmit, totalPrice }: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  
  // Payment states
  const [paymentProof, setPaymentProof] = useState<string | null>(null);
  const [isQrisVerified, setIsQrisVerified] = useState(false);
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Nama wajib diisi";
    if (!phone.trim()) newErrors.phone = "Nomor WhatsApp wajib diisi";
    if (!paymentMethod) newErrors.paymentMethod = "Pilih metode pembayaran";
    
    if (paymentMethod === "transfer" && !paymentProof) {
      newErrors.paymentProof = "Bukti transfer wajib diupload";
    }
    
    if (paymentMethod === "qris" && !isQrisVerified) {
      newErrors.qris = "Selesaikan pembayaran QRIS terlebih dahulu";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && paymentMethod) {
      onSubmit({
        customerName: name,
        customerPhone: phone,
        notes,
        paymentMethod,
        paymentProof: paymentProof || undefined
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-8">
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Data Diri</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-slate-200'}`}
              placeholder="Contoh: Budi Santoso"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full p-3 border rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
              placeholder="Contoh: 081234567890"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Catatan Tambahan (Opsional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none h-24"
              placeholder="Contoh: Potongan rapi, jangan terlalu pendek"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Metode Pembayaran</h3>
        <p className="text-slate-500 text-sm mb-6">Pilih cara pembayaran untuk mengamankan slot Anda.</p>
        
        <PaymentMethodSelector 
          selectedMethod={paymentMethod}
          onSelectMethod={(method) => {
            setPaymentMethod(method);
            setErrors(prev => ({ ...prev, paymentMethod: "" }));
          }}
          onProofUploaded={(base64) => {
            setPaymentProof(base64);
            setErrors(prev => ({ ...prev, paymentProof: "" }));
          }}
          onQrisVerified={(verified) => {
            setIsQrisVerified(verified);
            setErrors(prev => ({ ...prev, qris: "" }));
          }}
          theme="barber"
        />
        {errors.paymentMethod && <p className="text-red-500 text-sm mt-2 font-medium">{errors.paymentMethod}</p>}
        {errors.paymentProof && <p className="text-red-500 text-sm mt-2 font-medium">{errors.paymentProof}</p>}
        {errors.qris && <p className="text-red-500 text-sm mt-2 font-medium text-center">{errors.qris}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-slate-900/20"
      >
        Konfirmasi Booking
      </button>
    </form>
  );
}
