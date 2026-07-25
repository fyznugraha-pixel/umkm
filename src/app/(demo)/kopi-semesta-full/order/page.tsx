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
      router.push("/kopi-semesta-full/keranjang");
    }
  }, [cart, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutDetails.customerName || !checkoutDetails.customerWhatsApp) {
      alert("Mohon lengkapi Nama dan No. WhatsApp.");
      return;
    }
    router.push("/kopi-semesta-full/payment");
  };

  if (cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#3D2B1F] font-sans pt-12 pb-20 bg-[url('/noise.png')]">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        {/* Progress Dots */}
        <div className="flex justify-center mb-8 gap-3">
          <div className="w-3 h-3 rounded-full bg-[#B36A5E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#B36A5E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#E5D3B3]"></div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Link href="/kopi-semesta-full/keranjang" className="p-2 hover:bg-white/50 rounded-full transition-colors text-[#B36A5E]">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-serif text-[#3D2B1F] flex-1 text-center pr-10">Data Pemesan</h1>
        </div>

        <div className="bg-white rounded-t-3xl rounded-b-lg shadow-xl overflow-hidden">
          {/* Form Content */}
          <div className="p-6 md:p-8">
            <form id="order-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#3D2B1F] mb-2 uppercase tracking-wider">Atas Nama *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-0 py-3 border-b-2 border-[#E5D3B3] focus:outline-none focus:border-[#B36A5E] bg-transparent text-xl font-medium transition-colors"
                    placeholder="Masukkan nama Anda"
                    value={checkoutDetails.customerName}
                    onChange={e => updateCheckoutDetails({ customerName: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-[#3D2B1F] mb-2 uppercase tracking-wider">No. WhatsApp *</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-0 py-3 border-b-2 border-[#E5D3B3] focus:outline-none focus:border-[#B36A5E] bg-transparent text-xl font-medium transition-colors"
                    placeholder="Contoh: 0812..."
                    value={checkoutDetails.customerWhatsApp}
                    onChange={e => updateCheckoutDetails({ customerWhatsApp: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5D3B3] border-dashed">
                <label className="block text-sm font-bold text-[#3D2B1F] mb-2 uppercase tracking-wider">Nomor Meja</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E5D3B3] focus:outline-none focus:border-[#B36A5E] bg-[#F5EFE6]/50 transition-colors"
                  placeholder="Isi jika makan di tempat (Dine-in)"
                  value={checkoutDetails.shippingAddress || ""}
                  onChange={e => updateCheckoutDetails({ shippingAddress: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#3D2B1F] mb-2 uppercase tracking-wider">Catatan Khusus</label>
                <textarea 
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#E5D3B3] focus:outline-none focus:border-[#B36A5E] bg-[#F5EFE6]/50 transition-colors"
                  placeholder="Ada alergi atau permintaan lain?"
                  value={checkoutDetails.notes || ""}
                  onChange={e => updateCheckoutDetails({ notes: e.target.value })}
                />
              </div>
            </form>
          </div>

          <div className="bg-[#FAFAFA] p-6 md:p-8 border-t-2 border-dashed border-[#E5D3B3]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-[#3D2B1F]/60 uppercase tracking-widest text-sm">Total Tagihan</span>
              <span className="text-3xl font-black text-[#B36A5E]">Rp {getCartTotal().toLocaleString("id-ID")}</span>
            </div>
            
            <button 
              type="submit"
              form="order-form"
              className="w-full py-4 bg-[#B36A5E] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#8F554A] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              Pilih Pembayaran <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Receipt Zigzag Bottom */}
          <div className="h-4 w-full" style={{ backgroundImage: "linear-gradient(135deg, transparent 50%, #ffffff 50%), linear-gradient(-135deg, transparent 50%, #ffffff 50%)", backgroundSize: "16px 16px", backgroundPosition: "bottom", backgroundColor: "transparent", backgroundRepeat: "repeat-x", marginTop: "-4px" }}></div>
        </div>
      </div>
    </div>
  );
}
