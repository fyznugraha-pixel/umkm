"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Home, Coffee } from "lucide-react";
import { useStore, Order } from "@/components/demo/StoreContext";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { orders } = useStore();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (orderId) {
      const found = orders.find(o => o.id === orderId);
      if (found) setOrder(found);
    }
  }, [orderId, orders]);

  if (!orderId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5EFE6] text-[#3D2B1F]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Order tidak ditemukan</h1>
          <Link href="/demo/kopi-semesta-full" className="text-[#B36A5E] hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#3D2B1F] font-sans flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center p-10 border border-[#E5D3B3]">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        
        <h1 className="text-3xl font-serif text-[#3D2B1F] mb-2">Order Sukses!</h1>
        <p className="text-[#3D2B1F]/70 mb-8">Terima kasih, pesanan kopi Anda telah kami terima dan akan segera disiapkan oleh barista kami.</p>
        
        <div className="bg-[#F5EFE6] p-6 rounded-2xl mb-8 border border-[#E5D3B3]">
          <p className="text-sm font-bold text-[#3D2B1F]/60 uppercase tracking-widest mb-1">ID Pesanan</p>
          <p className="font-mono text-xl font-bold text-[#B36A5E] mb-4">#{orderId}</p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-[#3D2B1F]/80 bg-white p-3 rounded-lg border border-[#E5D3B3]">
            <Coffee size={16} />
            <span>Status: <strong className="uppercase">Menunggu Verifikasi</strong></span>
          </div>
        </div>
        
        <p className="text-sm text-[#3D2B1F]/60 mb-8 leading-relaxed">
          Kami telah mengirimkan detail pesanan ke nomor WhatsApp Anda. Jika ada pertanyaan, silakan hubungi tim kami.
        </p>
        
        <Link 
          href="/demo/kopi-semesta-full"
          className="w-full py-4 bg-[#3D2B1F] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#2A1D15] transition-colors"
        >
          <Home size={20} /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
