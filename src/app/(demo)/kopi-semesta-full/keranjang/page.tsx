"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useStore } from "@/components/demo/StoreContext";

export default function KeranjangKopiPage() {
  const { cart, products, updateCartQuantity, removeFromCart, getCartTotal } = useStore();

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#3D2B1F] font-sans pt-12 pb-20 bg-[url('/noise.png')]">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/kopi-semesta-full" className="p-2 hover:bg-white/50 rounded-full transition-colors text-[#B36A5E]">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-serif text-[#3D2B1F] flex-1 text-center pr-10">Meja Pesanan</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24 bg-white/60 backdrop-blur-sm border-2 border-dashed border-[#E5D3B3] rounded-3xl shadow-sm">
            <div className="w-24 h-24 bg-[#F5EFE6] rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4A373]">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-2xl font-serif text-[#3D2B1F] mb-2">Belum ada pesanan</h2>
            <p className="text-[#3D2B1F]/70 mb-8 text-lg">Silakan pilih menu kopi atau cemilan favorit Anda terlebih dahulu.</p>
            <Link 
              href="/kopi-semesta-full#menu"
              className="inline-block bg-[#3D2B1F] text-[#F5EFE6] px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#2A1D15] hover:scale-105 transition-all"
            >
              Lihat Buku Menu
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-t-3xl rounded-b-lg shadow-xl overflow-hidden">
            {/* Receipt Header */}
            <div className="bg-[#3D2B1F] p-6 text-center border-b-[8px] border-[#F5EFE6] border-dashed">
              <h2 className="text-[#F5EFE6] font-serif text-2xl tracking-widest uppercase">Kopi Semesta</h2>
              <p className="text-[#E5D3B3] text-sm mt-1 opacity-80">Pesanan Anda</p>
            </div>

            {/* Cart Items */}
            <div className="p-6 md:p-8 space-y-6">
              {cart.map((item, index) => {
                const product = products.find(p => p.id === item.productId);
                if (!product) return null;
                const itemPrice = product.price + (item.optionPrice || 0);

                return (
                  <div key={item.cartItemId} className="group relative">
                    <div className="flex gap-4 items-start">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E5D3B3] shrink-0 shadow-inner">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 min-w-0 pb-4 border-b border-[#E5D3B3]/50">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-lg text-[#3D2B1F] truncate pr-4">{product.name}</h3>
                          <span className="font-bold text-[#B36A5E] whitespace-nowrap">Rp {itemPrice.toLocaleString("id-ID")}</span>
                        </div>
                        
                        {item.options && item.options.length > 0 && (
                          <div className="text-sm text-[#3D2B1F]/60 italic mb-3">
                            Catatan: {item.options.join(", ")}
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center mt-2">
                          <button 
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-xs text-red-400 hover:text-red-600 font-bold flex items-center gap-1 transition-colors"
                          >
                            <Trash2 size={12} /> Hapus
                          </button>

                          <div className="flex items-center gap-3 bg-[#F5EFE6] rounded-full p-1 border border-[#E5D3B3] shadow-inner">
                            <button 
                              onClick={() => updateCartQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm text-[#3D2B1F] transition-colors hover:text-[#B36A5E]"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-4 text-center font-bold text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm text-[#3D2B1F] transition-colors hover:text-[#B36A5E]"
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

            {/* Order Summary & Footer */}
            <div className="bg-[#FAFAFA] p-6 md:p-8 border-t-2 border-dashed border-[#E5D3B3]">
              <div className="space-y-3 mb-6 text-[#3D2B1F]/80 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.reduce((sum, i) => sum + i.quantity, 0)} item)</span>
                  <span>Rp {getCartTotal().toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pajak Restoran</span>
                  <span className="text-green-600">Termasuk</span>
                </div>
              </div>
              
              <div className="flex justify-between font-black text-2xl border-t border-[#E5D3B3] pt-4 mb-8 text-[#3D2B1F]">
                <span>Total</span>
                <span>Rp {getCartTotal().toLocaleString("id-ID")}</span>
              </div>
              
              <Link 
                href="/kopi-semesta-full/order"
                className="w-full py-4 bg-[#B36A5E] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#8F554A] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                Konfirmasi Pesanan <ArrowRight size={20} />
              </Link>
            </div>
            
            {/* Receipt Zigzag Bottom */}
            <div className="h-4 w-full" style={{ backgroundImage: "linear-gradient(135deg, transparent 50%, #ffffff 50%), linear-gradient(-135deg, transparent 50%, #ffffff 50%)", backgroundSize: "16px 16px", backgroundPosition: "bottom", backgroundColor: "transparent", backgroundRepeat: "repeat-x", marginTop: "-4px" }}></div>
          </div>
        )}
      </div>
    </div>
  );
}
