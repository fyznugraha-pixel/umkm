"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useBooking } from "@/components/demo/booking/BookingContext";
import ServiceSelection from "@/components/demo/booking/ServiceSelection";
import SlotPicker from "@/components/demo/booking/SlotPicker";
import BookingSummaryBar from "@/components/demo/booking/BookingSummaryBar";
import BookingForm from "@/components/demo/booking/BookingForm";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingPage() {
  const { services, slots, addBooking } = useBooking();
  
  // Booking Flow State
  const [step, setStep] = useState<"services" | "slots" | "form" | "success">("services");
  
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const selectedServices = services.filter(s => selectedServiceIds.includes(s.id));
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  const handleToggleService = (id: string) => {
    setSelectedServiceIds(prev => 
      prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
    );
  };

  const handleSelectSlot = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleSubmitBooking = (data: any) => {
    if (!selectedDate || !selectedTime) return;
    
    addBooking({
      ...data,
      serviceIds: selectedServiceIds,
      totalPrice,
      bookingDate: selectedDate,
      bookingTime: selectedTime,
    });
    
    setStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFlow = () => {
    setSelectedServiceIds([]);
    setSelectedDate(null);
    setSelectedTime(null);
    setStep("services");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-zinc-950 text-center selection:bg-[#E63946] selection:text-white">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">Booking Berhasil!</h2>
          <p className="text-zinc-400 mb-8">
            Terima kasih! Reservasi Anda untuk tanggal <strong className="text-white">{selectedDate}</strong> jam <strong className="text-white">{selectedTime}</strong> telah kami terima.
            Silakan cek WhatsApp Anda secara berkala untuk konfirmasi lebih lanjut.
          </p>
          <div className="flex flex-col gap-3">
            <Link 
              href="/rapi-barbershop-full"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-sm transition-colors block uppercase tracking-wider text-sm"
            >
              Kembali ke Beranda
            </Link>
            <Link 
              href="/rapi-barbershop-full/admin"
              className="text-sm text-[#E63946] hover:text-[#D90429] mt-4 uppercase tracking-widest font-bold"
            >
              Lihat di Dashboard Admin (Demo) &rarr;
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 pb-32 selection:bg-[#E63946] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A] border-b border-[#333333] shadow-sm text-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-3xl">
          {step === "services" ? (
            <Link 
              href="/rapi-barbershop-full"
              className="flex items-center gap-2 text-gray-400 hover:text-white font-medium uppercase tracking-widest text-xs"
            >
              <ArrowLeft size={16} /> Beranda
            </Link>
          ) : (
            <button 
              onClick={() => {
                if (step === "form") setStep("slots");
                else if (step === "slots") setStep("services");
              }}
              className="flex items-center gap-2 text-gray-400 hover:text-white font-medium uppercase tracking-widest text-xs"
            >
              <ArrowLeft size={16} /> Kembali
            </button>
          )}
          <div className="font-display font-bold text-sm uppercase tracking-widest text-white">
            Langkah {step === "services" ? "1" : step === "slots" ? "2" : "3"} / 3
          </div>
        </div>
      </header>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {step === "services" && (
          <ServiceSelection 
            services={services} 
            selectedServiceIds={selectedServiceIds} 
            onToggleService={handleToggleService} 
          />
        )}
        
        {step === "slots" && (
          <SlotPicker 
            slots={slots} 
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSelectSlot={handleSelectSlot}
          />
        )}
        
        {step === "form" && (
          <BookingForm 
            onSubmit={handleSubmitBooking}
            totalPrice={totalPrice}
          />
        )}
      </div>

      {/* Summary Bar for Step 1 & 2 */}
      {(step === "services" || step === "slots") && (
        <BookingSummaryBar 
          selectedServices={selectedServices}
          onNext={() => {
            if (step === "services") setStep("slots");
            if (step === "slots" && selectedDate && selectedTime) setStep("form");
          }}
          nextLabel={step === "services" ? "Pilih Jadwal" : "Isi Data Diri"}
        />
      )}
    </div>
  );
}
