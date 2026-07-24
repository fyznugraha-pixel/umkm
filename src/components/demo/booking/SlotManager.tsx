"use client";

import React, { useState, useMemo } from "react";
import { TimeSlot } from "./BookingContext";
import { Calendar as CalendarIcon, Clock, ToggleLeft, ToggleRight } from "lucide-react";

interface SlotManagerProps {
  slots: TimeSlot[];
  onToggleSlot: (date: string, time: string, isAvailable: boolean) => void;
}

export default function SlotManager({ slots, onToggleSlot }: SlotManagerProps) {
  // Extract unique dates that have slots
  const availableDates = useMemo(() => {
    return Array.from(new Set(slots.map(s => s.date))).sort();
  }, [slots]);

  const [activeDate, setActiveDate] = useState<string>(availableDates[0] || "");

  // Get slots for the active date
  const activeSlots = useMemo(() => {
    return slots.filter(s => s.date === activeDate).sort((a, b) => a.time.localeCompare(b.time));
  }, [slots, activeDate]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <CalendarIcon size={18} className="text-slate-500" />
          Kelola Ketersediaan Waktu
        </h3>
        
        <div className="flex bg-white border border-slate-300 rounded-lg overflow-hidden">
          <select 
            value={activeDate}
            onChange={(e) => setActiveDate(e.target.value)}
            className="px-4 py-2 text-sm bg-transparent outline-none font-medium text-slate-700"
          >
            {availableDates.map(date => {
              const d = new Date(date);
              const label = new Intl.DateTimeFormat('id-ID', { weekday: 'short', day: 'numeric', month: 'short' }).format(d);
              return <option key={date} value={date}>{label}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {activeSlots.map((slot, idx) => (
            <div key={idx} className={`
              flex items-center justify-between p-4 rounded-xl border transition-colors
              ${slot.isAvailable ? 'border-green-200 bg-green-50/30' : 'border-slate-200 bg-slate-50 opacity-60'}
            `}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${slot.isAvailable ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-500'}`}>
                  <Clock size={16} />
                </div>
                <div className="font-bold text-slate-900">{slot.time}</div>
              </div>
              
              <button 
                onClick={() => onToggleSlot(slot.date, slot.time, !slot.isAvailable)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${slot.isAvailable ? 'text-green-700 hover:text-green-800' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {slot.isAvailable ? (
                  <>Buka <ToggleRight size={24} className="text-green-600" /></>
                ) : (
                  <>Tutup <ToggleLeft size={24} className="text-slate-400" /></>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
