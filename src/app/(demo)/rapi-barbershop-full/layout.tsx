import React from "react";
import { Metadata } from "next";
import { BookingProvider } from "@/components/demo/booking/BookingContext";

export const metadata: Metadata = {
  title: "RAPI Barbershop - Booking Online",
  description: "Barbershop modern dengan layanan profesional. Booking jadwal Anda secara online.",
};

export default function RapiBarbershopFullLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-zinc-950 font-sans selection:bg-cyan-500/30">
        {children}
      </div>
    </BookingProvider>
  );
}
