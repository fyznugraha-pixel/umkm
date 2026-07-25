"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, Upload } from "lucide-react";
import { useStore } from "@/components/demo/StoreContext";
import PaymentMethodSelector from "@/components/demo/order/PaymentMethodSelector";
import { defaultFashionTokens } from "@/components/demo/order/designTokens";

export default function PaymentPage() {
  const router = useRouter();
  const { cart, getCartTotal, checkoutDetails, updateCheckoutDetails, checkout, clearCheckoutDetails } = useStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) return;
    if (cart.length === 0) {
      router.push("/ruang-rupa-full/keranjang");
    } else if (!checkoutDetails.customerName || !checkoutDetails.customerWhatsApp || !checkoutDetails.shippingAddress) {
      router.push("/ruang-rupa-full/order");
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
    
    // Additional QRIS check normally here, but we simplify for demo
    
    setIsProcessing(true);
    
    // Simulate network delay
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
        router.push(`/ruang-rupa-full/success?orderId=${order.id}`);
      }
      setIsProcessing(false);
    }, 1500);
  };

  if (cart.length === 0 && !isSuccess) return null;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 max-w-sm mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#C34A36] -z-10"></div>
          <div className="w-8 h-8 rounded-full bg-[#C34A36] text-white flex items-center justify-center font-bold text-sm border-4 border-[#FAFAFA]">1</div>
          <div className="w-8 h-8 rounded-full bg-[#C34A36] text-white flex items-center justify-center font-bold text-sm border-4 border-[#FAFAFA]">2</div>
          <div className="w-8 h-8 rounded-full bg-[#C34A36] text-white flex items-center justify-center font-bold text-sm border-4 border-[#FAFAFA]">3</div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <Link href="/ruang-rupa-full/order" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Pembayaran</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
              <PaymentMethodSelector 
                selectedMethod={checkoutDetails.paymentMethod as any || null}
                onSelectMethod={(method) => updateCheckoutDetails({ paymentMethod: method })}
                onQrisVerified={() => {}}
                onProofUploaded={(base64: string) => updateCheckoutDetails({ paymentProof: base64 })}
                theme="fashion"
                designTokens={defaultFashionTokens}
              />
            </div>
          </div>

          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-[#111111] text-white p-6 rounded-2xl sticky top-24 shadow-xl">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Total Tagihan</h3>
              <div className="text-3xl font-black text-[#C34A36] mb-8">
                Rp {getCartTotal().toLocaleString("id-ID")}
              </div>
              
              <button 
                onClick={handleProcessOrder}
                disabled={isProcessing}
                className={`w-full py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                  isProcessing 
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed" 
                    : "bg-[#C34A36] text-white hover:bg-[#A33A26]"
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
