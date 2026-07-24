"use client";

import React, { useState } from "react";
import { useBooking } from "./BookingContext";
import BookingsTable from "./BookingsTable";
import SlotManager from "./SlotManager";
import { Calendar, Users, DollarSign, Activity } from "lucide-react";

export default function BookingDashboard() {
  const { bookings, services, slots, updateBookingStatus, updateSlotAvailability, resetDemoData } = useBooking();
  const [activeTab, setActiveTab] = useState<"bookings" | "slots">("bookings");

  // Analytics
  const totalBookings = bookings.length;
  const completedBookings = bookings.filter(b => b.status === "selesai").length;
  const pendingBookings = bookings.filter(b => b.status === "menunggu_verifikasi").length;
  const totalRevenue = bookings
    .filter(b => b.status === "selesai" || b.status === "dikonfirmasi" || b.status === "terjadwal")
    .reduce((sum, b) => sum + b.totalPrice, 0);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-600">Kelola reservasi dan ketersediaan waktu RAPI Barbershop.</p>
        </div>
        
        <button 
          onClick={() => {
            if (confirm("Reset semua data booking demo?")) {
              resetDemoData();
            }
          }}
          className="text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
        >
          Reset Data Demo
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Booking</p>
            <p className="text-2xl font-bold text-slate-900">{totalBookings}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Perlu Verifikasi</p>
            <p className="text-2xl font-bold text-slate-900">{pendingBookings}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Selesai</p>
            <p className="text-2xl font-bold text-slate-900">{completedBookings}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Estimasi Pendapatan</p>
            <p className="text-xl font-bold text-slate-900">Rp {totalRevenue.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab("bookings")}
          className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === "bookings" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"
          }`}
        >
          Daftar Booking
        </button>
        <button
          onClick={() => setActiveTab("slots")}
          className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === "slots" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"
          }`}
        >
          Kelola Waktu (Slots)
        </button>
      </div>

      {/* Content */}
      <div className="pt-2">
        {activeTab === "bookings" ? (
          <BookingsTable 
            bookings={bookings} 
            services={services} 
            onUpdateStatus={updateBookingStatus} 
          />
        ) : (
          <SlotManager 
            slots={slots} 
            onToggleSlot={updateSlotAvailability} 
          />
        )}
      </div>
    </div>
  );
}
