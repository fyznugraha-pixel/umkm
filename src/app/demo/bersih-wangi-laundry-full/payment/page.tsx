"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useLaundryStore } from "@/components/demo/laundry/LaundryContext";
import PaymentMethodSelector, { PaymentMethod } from "@/components/demo/order/PaymentMethodSelector";
// using default coffee tokens for simplicity as laundry doesn't have custom tokens in this file yet
import { defaultCoffeeTokens } from "@/components/demo/order/designTokens";

export default function PaymentPage() {
  const router = useRouter();
  const { cart, getCartTotal, checkoutDetails, updateCheckoutDetails, checkoutItemOrder } = useLaundryStore();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | "">("");

  useEffect(() => {
    if (cart.length === 0 || !checkoutDetails.customerName) {
      router.push("/demo/bersih-wangi-laundry-full/keranjang");
    }
  }, [cart, checkoutDetails, router]);

  const handleSelectMethod = (method: PaymentMethod) => {
    setSelectedMethod(method);
    updateCheckoutDetails({ paymentMethod: method as any });
  };

  const handlePaymentComplete = (proofBase64?: string) => {
    if (!selectedMethod) return;
    
    // Complete the checkout process
    const order = checkoutItemOrder(
      checkoutDetails.customerName,
      checkoutDetails.customerWhatsApp,
      selectedMethod as any,
      proofBase64
    );
    
    if (order) {
      // Small delay to show success state before redirecting
      setTimeout(() => {
        router.push("/demo/bersih-wangi-laundry-full/success");
      }, 1500);
    }
  };

  if (cart.length === 0 || !checkoutDetails.customerName) return null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-12 pb-20">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/demo/bersih-wangi-laundry-full/order" className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 flex-1 text-center pr-10">Pembayaran</h1>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-6 md:p-8">
            <PaymentMethodSelector 
              selectedMethod={selectedMethod || null} 
              onSelectMethod={handleSelectMethod}
              availableMethods={["qris", "transfer"]}
              onProofUploaded={(proof) => handlePaymentComplete(proof)}
              onQrisVerified={(isVerified) => { if(isVerified) handlePaymentComplete(); }}
              designTokens={defaultCoffeeTokens}
            />
            
            {/* "Bayar di Tempat" is not available for Satuan branch in this demo since it's online checkout, 
                but we can support Cash if we want. Keeping it out to match UI/UX PROMAX modern flow. */}
          </div>
        </div>
      </div>
    </div>
  );
}
