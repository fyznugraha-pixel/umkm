"use client";

import React, { useState } from "react";
import { Search, Package, Scale, CreditCard, WashingMachine, CheckCircle2 } from "lucide-react";
import { useLaundryStore, DropoffOrder } from "@/components/demo/laundry/LaundryContext";
import PaymentMethodSelector, { PaymentMethod } from "@/components/demo/order/PaymentMethodSelector";
import { defaultCoffeeTokens } from "@/components/demo/order/designTokens";

export default function StatusTrackerPage() {
  const { dropoffOrders, payDropoff } = useLaundryStore();
  const [referenceInput, setReferenceInput] = useState("");
  const [order, setOrder] = useState<DropoffOrder | null>(null);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = dropoffOrders.find(o => o.referenceNumber.toLowerCase() === referenceInput.toLowerCase());
    if (found) {
      setOrder(found);
      setError("");
    } else {
      setOrder(null);
      setError("Pesanan tidak ditemukan. Periksa kembali kode referensi Anda.");
    }
  };

  const handlePaymentSuccess = (proof?: string) => {
    if (!order || !paymentMethod) return;
    payDropoff(order.id, paymentMethod as any, proof);
    // Fallback since we can't easily get latest state without re-render, we just simulate it locally
    setOrder(prev => prev ? { 
      ...prev, 
      paymentMethod: paymentMethod as any, 
      paymentProof: proof, 
      status: paymentMethod === "qris" ? "diproses" : "menunggu_verifikasi" 
    } : null);
  };

  const STATUS_STEPS = [
    { key: "menunggu_dropoff", label: "Menunggu Ditimbang", icon: Package },
    { key: "menunggu_pembayaran", label: "Menunggu Pembayaran", icon: CreditCard },
    { key: "diproses", label: "Sedang Dicuci", icon: WashingMachine },
    { key: "siap_diambil", label: "Siap Diambil", icon: CheckCircle2 }
  ];

  const getStepIndex = (status: string) => {
    if (status === "selesai") return 4;
    if (status === "menunggu_verifikasi") return 1; // grouped under payment
    const idx = STATUS_STEPS.findIndex(s => s.key === status);
    return idx === -1 ? 0 : idx;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Cek Status Cucian</h1>
          <p className="text-slate-600">Pantau proses cuci dan bayar tagihan Anda di sini.</p>
        </div>

        <form onSubmit={handleSearch} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex gap-3">
          <input 
            type="text" 
            placeholder="Masukkan Kode Referensi (Contoh: LDY-1024)"
            value={referenceInput}
            onChange={(e) => setReferenceInput(e.target.value)}
            className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium uppercase"
          />
          <button type="submit" className="bg-slate-900 hover:bg-black text-white px-6 rounded-xl transition-colors flex items-center justify-center">
            <Search size={20} />
          </button>
        </form>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 text-center text-sm font-medium">
            {error}
          </div>
        )}

        {order && (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-sm text-slate-500 mb-1">Nomor Referensi</p>
                <p className="text-2xl font-black text-slate-900">{order.referenceNumber}</p>
                <p className="text-sky-600 font-medium mt-1">{order.customerName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500 mb-1">Layanan</p>
                <p className="font-bold text-slate-900">{order.speedOption}</p>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="relative mb-12 mt-8">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full"></div>
              
              <div className="relative flex justify-between">
                {STATUS_STEPS.map((step, idx) => {
                  const currentIdx = getStepIndex(order.status);
                  const isCompleted = currentIdx > idx;
                  const isActive = currentIdx === idx;
                  const StepIcon = step.icon;

                  return (
                    <div key={step.key} className="flex flex-col items-center relative z-10 w-20">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                        isActive ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 ring-4 ring-sky-50" :
                        isCompleted ? "bg-sky-100 text-sky-500" :
                        "bg-white border-2 border-slate-200 text-slate-300"
                      }`}>
                        <StepIcon size={isActive || isCompleted ? 20 : 18} />
                      </div>
                      <span className={`text-[10px] md:text-xs text-center font-bold leading-tight ${
                        isActive ? "text-sky-600" : isCompleted ? "text-slate-700" : "text-slate-400"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale size={18} className="text-sky-500" /> Detail Timbangan & Harga
              </h3>
              
              <div className="flex justify-between items-center py-3 border-b border-slate-200/60">
                <span className="text-slate-600">Estimasi Awal</span>
                <span className="font-medium text-slate-900">{order.estimatedKg} kg</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-slate-200/60">
                <span className="text-slate-600">Berat Aktual</span>
                <span className="font-bold text-sky-600">
                  {order.actualKg ? `${order.actualKg} kg` : <span className="text-amber-500 text-sm">Belum ditimbang</span>}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-slate-200/60">
                <span className="text-slate-600">Harga per Kg</span>
                <span className="font-medium text-slate-900">Rp {order.pricePerKg.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-4 mt-2">
                <span className="text-lg font-bold text-slate-900">Total Tagihan</span>
                <span className="text-2xl font-black text-sky-600">
                  {order.finalPrice ? `Rp ${order.finalPrice.toLocaleString()}` : "-"}
                </span>
              </div>
            </div>

            {/* Conditional Payment UI if Menunggu Pembayaran */}
            {order.status === "menunggu_pembayaran" && order.finalPrice && (
              <div className="border-t border-slate-100 pt-8">
                <h3 className="font-bold text-slate-900 mb-4 text-center">Selesaikan Pembayaran</h3>
                <PaymentMethodSelector 
                  selectedMethod={paymentMethod || null}
                  onSelectMethod={setPaymentMethod}
                  availableMethods={["qris", "transfer"]}
                  onProofUploaded={(proof) => handlePaymentSuccess(proof)}
                  onQrisVerified={(isVerified) => { if (isVerified) handlePaymentSuccess(); }}
                  designTokens={defaultCoffeeTokens}
                />
              </div>
            )}

            {order.status === "menunggu_verifikasi" && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-xl text-center">
                <p className="font-bold mb-1">Bukti Transfer Sedang Diverifikasi</p>
                <p className="text-sm">Admin kami akan segera mengecek pembayaran Anda.</p>
              </div>
            )}
            
            {order.status === "siap_diambil" && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl text-center">
                <p className="font-bold mb-1">Cucian Anda Siap Diambil!</p>
                <p className="text-sm">Silakan tunjukkan kode referensi ini kepada kasir kami.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
