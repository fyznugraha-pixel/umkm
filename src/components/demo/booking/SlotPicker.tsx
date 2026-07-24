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
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Pilih Waktu</h2>
        <p className="text-slate-600">Tentukan tanggal dan jam kedatangan Anda.</p>
      </div>

      {availableDates.length > 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Date Selector (Horizontal Scroll) */}
          <div className="bg-slate-50 border-b border-slate-200 p-4">
            <div className="flex items-center gap-2 mb-3 text-slate-700 font-medium">
              <CalendarIcon size={18} />
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
                      flex flex-col items-center justify-center min-w-[80px] p-3 rounded-xl border snap-center transition-colors
                      ${isActive 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'}
                    `}
                  >
                    <span className="text-xs uppercase tracking-wider mb-1 opacity-80">{dayName}</span>
                    <span className="text-xl font-bold leading-none mb-1">{dayNum}</span>
                    <span className="text-xs opacity-80">{monthName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Selector */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4 text-slate-700 font-medium">
              <Clock size={18} />
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
                        py-3 rounded-lg text-sm font-bold border transition-all
                        ${!slot.isAvailable 
                          ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed line-through' 
                          : isSelected
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600'}
                      `}
                    >
                      {slot.time}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                Tidak ada slot waktu tersedia pada tanggal ini.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500">
          Tidak ada jadwal yang tersedia saat ini.
        </div>
      )}
    </div>
  );
}
