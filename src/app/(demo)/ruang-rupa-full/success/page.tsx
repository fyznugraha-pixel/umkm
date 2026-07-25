"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Home, Package } from "lucide-react";
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
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] text-[#111111]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Order tidak ditemukan</h1>
          <Link href="/ruang-rupa-full" className="text-[#C34A36] hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center p-10 border border-gray-100">
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Order Sukses!</h1>
        <p className="text-gray-500 mb-8">Terima kasih, pesanan Anda telah kami terima dan akan segera diproses.</p>
        
        <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">ID Pesanan</p>
          <p className="font-mono text-xl font-bold text-[#C34A36] mb-4">#{orderId}</p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-white p-3 rounded-lg border border-gray-200">
            <Package size={16} />
            <span>Status: <strong className="uppercase">Menunggu Verifikasi</strong></span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          Kami telah mengirimkan detail pesanan ke nomor WhatsApp Anda. Jika ada pertanyaan, silakan hubungi tim CS kami.
        </p>
        
        <Link 
          href="/ruang-rupa-full"
          className="w-full py-4 bg-[#111111] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#C34A36] transition-colors rounded-xl"
        >
          <Home size={20} /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
