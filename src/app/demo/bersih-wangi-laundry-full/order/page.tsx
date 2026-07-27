"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLaundryStore } from "@/components/demo/laundry/LaundryContext";

export default function OrderPage() {
  const router = useRouter();
  const { cart, getCartTotal, checkoutDetails, updateCheckoutDetails } = useLaundryStore();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/demo/bersih-wangi-laundry-full/keranjang");
    }
  }, [cart, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutDetails.customerName || !checkoutDetails.customerWhatsApp) {
      alert("Mohon lengkapi Nama dan No. WhatsApp.");
      return;
    }
    router.push("/demo/bersih-wangi-laundry-full/payment");
  };

  if (cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-12 pb-20">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/demo/bersih-wangi-laundry-full/keranjang" className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 flex-1 text-center pr-10">Data Pemesan</h1>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-6 md:p-8">
            <form id="order-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  value={checkoutDetails.customerName}
                  onChange={(e) => updateCheckoutDetails({ customerName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow"
                  placeholder="Contoh: Budi Santoso"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">No. WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  value={checkoutDetails.customerWhatsApp}
                  onChange={(e) => updateCheckoutDetails({ customerWhatsApp: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-shadow"
                  placeholder="Contoh: 08123456789"
                />
              </div>
            </form>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-200">
            <div className="flex justify-between font-black text-2xl mb-8 text-slate-900">
              <span>Total Tagihan</span>
              <span className="text-sky-600">Rp {getCartTotal().toLocaleString("id-ID")}</span>
            </div>
            
            <button 
              type="submit"
              form="order-form"
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              Lanjut Pilih Pembayaran <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
