"use client";

import React, { useEffect, useState } from "react";

interface StatusBadgeProps {
  // We accept a simple configuration to determine open/closed state.
  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  schedule: {
    days: number[];
    openHour: number;
    closeHour: number;
  }[];
  theme?: "coffee" | "fashion" | "barber";
}

export default function StatusBadge({ schedule, theme = "coffee" }: StatusBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentHour = now.getHours();
      // For more precision, we could use minutes, but keeping it simple with hours

      const todaySchedule = schedule.find(s => s.days.includes(currentDay));
      
      if (todaySchedule) {
        if (currentHour >= todaySchedule.openHour && currentHour < todaySchedule.closeHour) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    // Re-check every minute
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, [schedule]);

  if (!mounted) return null; // Avoid hydration mismatch

  let bgClass = "bg-white border-gray-200 text-gray-700 shadow-sm";
  if (theme === "barber") {
    bgClass = "bg-[#1A1A1A] border-[#333333] text-gray-300";
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-bold tracking-wide uppercase ${bgClass}`}>
      {isOpen ? (
        <>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400">Buka Sekarang</span>
        </>
      ) : (
        <>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          <span className="text-red-600 dark:text-red-400">Tutup</span>
        </>
      )}
    </div>
  );
}
