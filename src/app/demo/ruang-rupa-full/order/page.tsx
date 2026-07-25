"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useStore } from "@/components/demo/StoreContext";

export default function OrderPage() {
  const router = useRouter();
  const { cart, getCartTotal, checkoutDetails, updateCheckoutDetails } = useStore();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/demo/ruang-rupa-full/keranjang");
    }
  }, [cart, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutDetails.customerName || !checkoutDetails.customerWhatsApp || !checkoutDetails.shippingAddress) {
      alert("Mohon lengkapi semua field yang wajib (*).");
      return;
    }
    router.push("/demo/ruang-rupa-full/payment");
  };

  if (cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-sm mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>
          <div className="absolute top-1/2 left-0 w-1/2 h-[2px] bg-[#C34A36] -z-10"></div>
          <div className="w-8 h-8 rounded-full bg-[#C34A36] text-white flex items-center justify-center font-bold text-sm border-4 border-[#FAFAFA]">1</div>
          <div className="w-8 h-8 rounded-full bg-[#C34A36] text-white flex items-center justify-center font-bold text-sm border-4 border-[#FAFAFA]">2</div>
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-bold text-sm border-4 border-[#FAFAFA]">3</div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Link href="/demo/ruang-rupa-full/keranjang" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Data Pengiriman</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 bg-white border border-gray-200 p-8 rounded-2xl">
            <form id="order-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C34A36] bg-gray-50 focus:bg-white transition-colors"
                    placeholder="Contoh: Budi Santoso"
                    value={checkoutDetails.customerName}
                    onChange={e => updateCheckoutDetails({ customerName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">No. WhatsApp *</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C34A36] bg-gray-50 focus:bg-white transition-colors"
                    placeholder="Contoh: 081234567890"
                    value={checkoutDetails.customerWhatsApp}
                    onChange={e => updateCheckoutDetails({ customerWhatsApp: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Pengiriman Lengkap *</label>
                <textarea 
                  required 
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C34A36] bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota, Kode Pos"
                  value={checkoutDetails.shippingAddress || ""}
                  onChange={e => updateCheckoutDetails({ shippingAddress: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Catatan Tambahan (Opsional)</label>
                <textarea 
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C34A36] bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Contoh: Titip di pos satpam"
                  value={checkoutDetails.notes || ""}
                  onChange={e => updateCheckoutDetails({ notes: e.target.value })}
                />
              </div>
            </form>
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-gray-100 p-6 rounded-2xl sticky top-24 border border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Total Tagihan</h3>
              <div className="text-3xl font-black text-[#C34A36] mb-8">
                Rp {getCartTotal().toLocaleString("id-ID")}
              </div>
              
              <button 
                type="submit"
                form="order-form"
                className="w-full py-4 bg-[#111111] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#C34A36] transition-colors"
              >
                Lanjut Pembayaran <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
