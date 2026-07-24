"use client";

import React from "react";
import { Service } from "./BookingContext";
import { ArrowRight, Clock, Receipt } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingSummaryBarProps {
  selectedServices: Service[];
  onNext: () => void;
  nextLabel?: string;
}

export default function BookingSummaryBar({ selectedServices, onNext, nextLabel = "Lanjut Pilih Jadwal" }: BookingSummaryBarProps) {
  const isVisible = selectedServices.length > 0;
  
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.durationMinutes, 0);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between pointer-events-auto border border-slate-700">
            <div className="flex-1">
              <div className="flex gap-4 mb-1">
                <div className="flex items-center gap-1.5 text-slate-300 text-sm">
                  <Receipt size={14} />
                  <span>{selectedServices.length} Layanan</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300 text-sm">
                  <Clock size={14} />
                  <span>{totalDuration} mnt</span>
                </div>
              </div>
              <div className="text-xl font-bold text-yellow-400">
                Rp {totalPrice.toLocaleString("id-ID")}
              </div>
            </div>
            
            <button
              onClick={onNext}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors shrink-0"
            >
              {nextLabel}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
