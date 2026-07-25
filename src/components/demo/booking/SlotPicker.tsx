"use client";

import React, { useState, useMemo } from "react";
import { TimeSlot } from "./BookingContext";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

interface SlotPickerProps {
  slots: TimeSlot[];
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectSlot: (date: string, time: string) => void;
}

export default function SlotPicker({ slots, selectedDate, selectedTime, onSelectSlot }: SlotPickerProps) {
  // Extract unique dates that have slots
  const availableDates = useMemo(() => {
    const dates = Array.from(new Set(slots.map(s => s.date))).sort();
    return dates;
  }, [slots]);

  // Default to first available date if none selected
  const [activeDate, setActiveDate] = useState<string>(selectedDate || availableDates[0] || "");

  // Get slots for the active date
  const activeSlots = useMemo(() => {
    return slots.filter(s => s.date === activeDate).sort((a, b) => a.time.localeCompare(b.time));
  }, [slots, activeDate]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('id-ID', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Pilih <span className="text-[#E63946]">Waktu</span></h2>
        <p className="text-gray-400">Tentukan tanggal dan jam kedatangan Anda.</p>
      </div>

      {availableDates.length > 0 ? (
        <div className="bg-[#111111] rounded-sm border border-[#333333] shadow-sm overflow-hidden">
          {/* Date Selector (Horizontal Scroll) */}
          <div className="bg-[#1A1A1A] border-b border-[#333333] p-4">
            <div className="flex items-center gap-2 mb-3 text-gray-300 font-bold uppercase tracking-widest text-xs">
              <CalendarIcon size={16} className="text-[#E63946]" />
              <span>Tanggal</span>
            </div>
            <div className="flex overflow-x-auto pb-2 gap-3 snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {availableDates.map(date => {
                const isActive = activeDate === date;
                const d = new Date(date);
                const dayName = new Intl.DateTimeFormat('id-ID', { weekday: 'short' }).format(d);
                const dayNum = d.getDate();
                const monthName = new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(d);
                
                return (
                  <button
                    key={date}
                    onClick={() => setActiveDate(date)}
                    className={`
                      relative flex flex-col items-center justify-center min-w-[90px] p-4 rounded-sm border snap-center transition-all
                      ${isActive 
                        ? 'bg-[#E63946] border-[#E63946] text-white scale-105 shadow-lg' 
                        : 'bg-[#111111] border-[#333333] text-gray-400 hover:border-gray-500 hover:bg-[#222222]'}
                    `}
                  >
                    {date === availableDates[0] && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black uppercase px-2 py-0.5 whitespace-nowrap shadow-sm">
                        Terdekat
                      </span>
                    )}
                    <span className="text-xs uppercase tracking-wider mb-1 opacity-80">{dayName}</span>
                    <span className="text-2xl font-black leading-none mb-1">{dayNum}</span>
                    <span className="text-xs opacity-80">{monthName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Selector */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 text-gray-300 font-bold uppercase tracking-widest text-xs">
              <Clock size={16} className="text-[#E63946]" />
              <span>Jam Tersedia</span>
            </div>
            
            {activeSlots.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {activeSlots.map((slot, idx) => {
                  const isSelected = selectedDate === slot.date && selectedTime === slot.time;
                  
                  return (
                    <button
                      key={idx}
                      disabled={!slot.isAvailable}
                      onClick={() => onSelectSlot(slot.date, slot.time)}
                      className={`
                        py-3 rounded-sm text-sm font-bold border transition-all uppercase tracking-wider
                        ${!slot.isAvailable 
                          ? 'bg-[#1A1A1A] border-[#333333] text-gray-700 cursor-not-allowed line-through' 
                          : isSelected
                            ? 'bg-[#E63946] border-[#E63946] text-white shadow-md'
                            : 'bg-[#111111] border-[#333333] text-gray-300 hover:border-[#E63946] hover:text-[#E63946]'}
                      `}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Tidak ada slot waktu tersedia pada tanggal ini.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-[#111111] rounded-sm border border-[#333333] text-gray-500">
          Tidak ada jadwal yang tersedia saat ini.
        </div>
      )}
    </div>
  );
}
