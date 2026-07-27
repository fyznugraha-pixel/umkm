"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useLaundryStore } from "@/components/demo/laundry/LaundryContext";

export default function KeranjangLaundryPage() {
  const { cart, services, updateCartQuantity, removeFromCart, getCartTotal } = useLaundryStore();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-12 pb-20">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/demo/bersih-wangi-laundry-full" className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 flex-1 text-center pr-10">Keranjang Cucian</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <div className="w-24 h-24 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 text-sky-500">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Keranjang kosong</h2>
            <p className="text-slate-500 mb-8 text-lg">Silakan pilih layanan satuan terlebih dahulu.</p>
            <Link 
              href="/demo/bersih-wangi-laundry-full#layanan"
              className="inline-block bg-sky-500 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-sky-600 hover:scale-105 transition-all"
            >
              Lihat Layanan
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Receipt Header */}
            <div className="bg-sky-500 p-6 text-center">
              <h2 className="text-white font-bold text-2xl tracking-widest uppercase">Layanan Satuan</h2>
            </div>

            {/* Cart Items */}
            <div className="p-6 md:p-8 space-y-6">
              {cart.map((item) => {
                const service = services.find(s => s.id === item.productId);
                if (!service) return null;
                const itemPrice = service.priceFlat || 0;

                return (
                  <div key={item.cartItemId} className="group relative">
                    <div className="flex gap-4 items-start">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-200 shrink-0">
                        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 min-w-0 pb-4 border-b border-slate-100">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-lg text-slate-900 truncate pr-4">{service.name}</h3>
                          <span className="font-bold text-sky-600 whitespace-nowrap">Rp {itemPrice.toLocaleString("id-ID")}</span>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <button 
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-xs text-red-500 hover:text-red-600 font-bold flex items-center gap-1 transition-colors"
                          >
                            <Trash2 size={12} /> Hapus
                          </button>

                          <div className="flex items-center gap-3 bg-slate-50 rounded-full p-1 border border-slate-200">
                            <button 
                              onClick={() => updateCartQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm text-slate-700 transition-colors hover:text-sky-500"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-4 text-center font-bold text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm text-slate-700 transition-colors hover:text-sky-500"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-200">
              <div className="space-y-3 mb-6 text-slate-600 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.reduce((sum, i) => sum + i.quantity, 0)} item)</span>
                  <span>Rp {getCartTotal().toLocaleString("id-ID")}</span>
                </div>
              </div>
              
              <div className="flex justify-between font-black text-2xl border-t border-slate-200 pt-4 mb-8 text-slate-900">
                <span>Total Tagihan</span>
                <span className="text-sky-600">Rp {getCartTotal().toLocaleString("id-ID")}</span>
              </div>
              
              <Link 
                href="/demo/bersih-wangi-laundry-full/order"
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                Checkout Satuan <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
