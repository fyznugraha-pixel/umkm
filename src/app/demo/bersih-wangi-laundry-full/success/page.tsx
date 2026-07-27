"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { useLaundryStore } from "@/components/demo/laundry/LaundryContext";

export default function SuccessPage() {
  const { itemOrders } = useLaundryStore();
  const [lastOrder, setLastOrder] = useState<any>(null);

  useEffect(() => {
    // In a real app, we'd pass the order ID via query param or get it from context.
    // For this demo, we'll just grab the most recent order.
    if (itemOrders.length > 0) {
      setLastOrder(itemOrders[0]);
    }
  }, [itemOrders]);

  if (!lastOrder) return null;

  const isVerifying = lastOrder.status === "menunggu_verifikasi";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 text-center">
        
        <div className="bg-sky-500 p-8 pb-12 flex flex-col items-center justify-center text-white relative">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Pesanan Berhasil!</h1>
          <p className="text-white/80 font-medium">Terima kasih, {lastOrder.customerName}</p>
          
          <div className="absolute -bottom-6 w-full flex justify-center">
            <div className="bg-white text-sky-600 font-bold px-6 py-2 rounded-full shadow-lg border border-slate-100 uppercase tracking-widest text-sm">
              {lastOrder.id}
            </div>
          </div>
        </div>

        <div className="px-8 pt-12 pb-8">
          {isVerifying ? (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-left">
              <p className="text-amber-800 font-bold mb-1">Menunggu Verifikasi Pembayaran</p>
              <p className="text-amber-700/80 text-sm">Bukti transfer Anda telah kami terima dan sedang diverifikasi oleh admin. Kami akan mengabari Anda segera.</p>
            </div>
          ) : (
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mb-8 text-left">
              <p className="text-sky-800 font-bold mb-1">Pembayaran Diterima</p>
              <p className="text-sky-700/80 text-sm">Pesanan Anda sedang kami proses. Silakan bawa barang satuan Anda ke konter kami dengan menunjukkan nomor resi ini.</p>
            </div>
          )}

          <div className="flex justify-between border-t border-slate-100 pt-4 mb-8 text-sm">
            <span className="text-slate-500">Total Tagihan</span>
            <span className="font-bold text-slate-900">Rp {lastOrder.totalAmount.toLocaleString("id-ID")}</span>
          </div>

          <div className="space-y-3">
            <Link 
              href="/demo/bersih-wangi-laundry-full"
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
