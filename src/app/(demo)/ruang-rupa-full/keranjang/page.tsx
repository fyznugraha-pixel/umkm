"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useStore } from "@/components/demo/StoreContext";

export default function CartPage() {
  const { cart, products, updateCartQuantity, removeFromCart, getCartTotal } = useStore();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-6">
          <Link href="/ruang-rupa-full" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Keranjang Belanja</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200 rounded-2xl">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
            <p className="text-gray-500 mb-6">Keranjang Anda masih kosong.</p>
            <Link 
              href="/ruang-rupa-full#katalog"
              className="inline-block bg-[#111111] text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#C34A36] transition-colors"
            >
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items */}
            <div className="flex-1 space-y-4">
              {cart.map((item) => {
                const product = products.find(p => p.id === item.productId);
                if (!product) return null;
                const itemPrice = product.price + (item.optionPrice || 0);

                return (
                  <div key={item.cartItemId} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl relative group">
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                    
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                        <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                          {item.selectedSize && <span className="bg-gray-100 px-2 py-0.5 rounded font-medium">Ukuran: {item.selectedSize}</span>}
                          {item.options && item.options.length > 0 && <span>{item.options.join(", ")}</span>}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-[#C34A36]">Rp {itemPrice.toLocaleString("id-ID")}</span>
                        
                        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1 border border-gray-200">
                          <button 
                            onClick={() => updateCartQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                            className="w-7 h-7 flex items-center justify-center hover:bg-white rounded shadow-sm text-gray-600 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-white rounded shadow-sm text-gray-600 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 focus:opacity-100"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-[#111111] text-white p-6 rounded-2xl sticky top-24">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Ringkasan</h3>
                
                <div className="space-y-3 mb-6 font-light text-gray-300 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rp {getCartTotal().toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkos Kirim</span>
                    <span>Dihitung di checkout</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-bold text-lg border-t border-white/20 pt-4 mb-8">
                  <span>Total</span>
                  <span className="text-[#C34A36]">Rp {getCartTotal().toLocaleString("id-ID")}</span>
                </div>
                
                <Link 
                  href="/ruang-rupa-full/order"
                  className="w-full py-4 bg-[#C34A36] text-white font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#A33A26] transition-colors"
                >
                  Checkout <ArrowRight size={20} />
                </Link>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>Pembayaran Aman & Terenkripsi</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
