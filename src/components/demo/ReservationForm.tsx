"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

interface ReservationFormProps {
  phoneNumber: string;
}

export default function ReservationForm({ phoneNumber }: ReservationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    pax: "2",
    date: "",
    time: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Kopi Semesta, saya ingin melakukan reservasi meja:%0A%0A*Nama:* ${formData.name}%0A*Jumlah Orang:* ${formData.pax} Orang%0A*Tanggal:* ${formData.date}%0A*Jam:* ${formData.time}%0A*Catatan Tambahan:* ${formData.notes || "-"}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-[#E5D3B3] flex flex-col gap-4">
      <h3 className="text-2xl font-serif text-[#B36A5E] mb-2">Formulir Reservasi Pintar</h3>
      <p className="text-sm text-[#3D2B1F]/70 mb-4">Isi form di bawah ini dan sistem akan mengarahkan Anda ke WhatsApp kami dengan format yang rapi.</p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#3D2B1F]">Nama Lengkap</label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} className="px-4 py-3 bg-[#F5EFE6] rounded-xl border-none focus:ring-2 focus:ring-[#D4A373] outline-none" placeholder="Cth: Budi Santoso" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#3D2B1F]">Jumlah Orang</label>
          <select required name="pax" value={formData.pax} onChange={handleChange} className="px-4 py-3 bg-[#F5EFE6] rounded-xl border-none focus:ring-2 focus:ring-[#D4A373] outline-none">
            <option value="1">1 Orang</option>
            <option value="2">2 Orang</option>
            <option value="3-4">3 - 4 Orang</option>
            <option value="5-8">5 - 8 Orang</option>
            <option value=">8">Lebih dari 8 Orang</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#3D2B1F]">Tanggal Kedatangan</label>
          <input required type="date" name="date" value={formData.date} onChange={handleChange} className="px-4 py-3 bg-[#F5EFE6] rounded-xl border-none focus:ring-2 focus:ring-[#D4A373] outline-none" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#3D2B1F]">Jam Kedatangan</label>
          <input required type="time" name="time" value={formData.time} onChange={handleChange} className="px-4 py-3 bg-[#F5EFE6] rounded-xl border-none focus:ring-2 focus:ring-[#D4A373] outline-none" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-[#3D2B1F]">Catatan Khusus (Opsional)</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} className="px-4 py-3 bg-[#F5EFE6] rounded-xl border-none focus:ring-2 focus:ring-[#D4A373] outline-none resize-none h-24" placeholder="Cth: Minta meja di area merokok / Rayakan ulang tahun"></textarea>
      </div>
      
      <button type="submit" className="mt-4 bg-[#D4A373] hover:bg-[#B36A5E] text-[#3D2B1F] hover:text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
        Kirim via WhatsApp <Send size={18} />
      </button>
    </form>
  );
}
