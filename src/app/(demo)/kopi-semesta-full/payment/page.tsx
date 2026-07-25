"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useStore } from "@/components/demo/StoreContext";
import PaymentMethodSelector from "@/components/demo/order/PaymentMethodSelector";
import { defaultCoffeeTokens } from "@/components/demo/order/designTokens";

export default function PaymentPage() {
  const router = useRouter();
  const { cart, getCartTotal, checkoutDetails, updateCheckoutDetails, checkout, clearCheckoutDetails } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) return;
    if (cart.length === 0) {
      router.push("/kopi-semesta-full/keranjang");
    } else if (!checkoutDetails.customerName || !checkoutDetails.customerWhatsApp) {
      router.push("/kopi-semesta-full/order");
    }
  }, [cart, checkoutDetails, router, isSuccess]);

  const handleProcessOrder = () => {
    if (!checkoutDetails.paymentMethod) {
      alert("Mohon pilih metode pembayaran.");
      return;
    }
    if (checkoutDetails.paymentMethod === "transfer" && !checkoutDetails.paymentProof) {
      alert("Mohon upload bukti transfer terlebih dahulu.");
      return;
    }
    
    setIsProcessing(true);
    
    setTimeout(() => {
      const order = checkout(
        checkoutDetails.customerName,
        checkoutDetails.customerWhatsApp,
        checkoutDetails.paymentMethod!,
        checkoutDetails.paymentProof,
        checkoutDetails.notes,
        checkoutDetails.shippingAddress
      );
      
      if (order) {
        setIsSuccess(true);
        clearCheckoutDetails();
        router.push(`/kopi-semesta-full/success?orderId=${order.id}`);
      }
      setIsProcessing(false);
    }, 1500);
  };

  if (cart.length === 0 && !isSuccess) return null;

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#3D2B1F] font-sans pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-sm mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#E5D3B3] -z-10"></div>
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#B36A5E] -z-10"></div>
          <div className="w-8 h-8 rounded-full bg-[#B36A5E] text-white flex items-center justify-center font-bold text-sm border-4 border-[#F5EFE6]">1</div>
          <div className="w-8 h-8 rounded-full bg-[#B36A5E] text-white flex items-center justify-center font-bold text-sm border-4 border-[#F5EFE6]">2</div>
          <div className="w-8 h-8 rounded-full bg-[#B36A5E] text-white flex items-center justify-center font-bold text-sm border-4 border-[#F5EFE6]">3</div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Link href="/kopi-semesta-full/order" className="p-2 hover:bg-white rounded-full transition-colors text-[#B36A5E]">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-serif text-[#3D2B1F]">Pembayaran</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white border border-[#E5D3B3] rounded-2xl p-8 mb-6 shadow-sm">
              <PaymentMethodSelector 
                selectedMethod={checkoutDetails.paymentMethod as any || null}
                onSelectMethod={(method) => updateCheckoutDetails({ paymentMethod: method })}
                onQrisVerified={() => {}}
                onProofUploaded={(base64: string) => updateCheckoutDetails({ paymentProof: base64 })}
                theme="coffee"
                designTokens={defaultCoffeeTokens}
              />
            </div>
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-white p-6 rounded-2xl sticky top-24 border border-[#E5D3B3] shadow-sm">
              <h3 className="text-sm font-bold text-[#3D2B1F]/60 uppercase tracking-widest mb-4">Total Tagihan</h3>
              <div className="text-3xl font-black text-[#B36A5E] mb-8">
                Rp {getCartTotal().toLocaleString("id-ID")}
              </div>
              
              <button 
                onClick={handleProcessOrder}
                disabled={isProcessing}
                className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg ${
                  isProcessing 
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none" 
                    : "bg-[#D4A373] text-white hover:bg-[#B36A5E] shadow-[#D4A373]/20"
                }`}
              >
                {isProcessing ? "Memproses..." : "Selesaikan Order"} 
                {!isProcessing && <CheckCircle size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
