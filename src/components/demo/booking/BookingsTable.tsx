"use client";

import React, { useState } from "react";
import { Booking, Service } from "./BookingContext";
import { Calendar, Clock, CreditCard, Check, X, Search, MoreVertical, MessageCircle, AlertCircle, Printer } from "lucide-react";
import { generateBookingReceiptBytes } from "@/lib/escpos";

interface BookingsTableProps {
  bookings: Booking[];
  services: Service[];
  onUpdateStatus: (id: string, status: string) => void;
  printerContext?: {
    isConnected: boolean;
    error: string;
    printReceipt: (bytes: Uint8Array) => Promise<boolean>;
    simulatePrint: (bytes: Uint8Array) => boolean;
  };
}

export default function BookingsTable({ bookings, services, onUpdateStatus, printerContext }: BookingsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const handlePrintReceipt = async (booking: Booking) => {
    if (!printerContext) return;
    
    const bytes = generateBookingReceiptBytes("RAPI Barbershop", booking, services);
    
    if (printerContext.isConnected) {
      const success = await printerContext.printReceipt(bytes);
      if (!success) {
        alert(printerContext.error || "Gagal mencetak struk.");
      }
    } else {
      if (typeof window !== "undefined") {
        printerContext.simulatePrint(bytes);
        alert("Printer BLE belum terhubung. Melakukan simulasi cetak di console (lihat console.log).");
        window.print();
      }
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "menunggu_verifikasi": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">Menunggu Verifikasi</span>;
      case "dikonfirmasi": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">Dikonfirmasi</span>;
      case "terjadwal": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 border border-purple-200">Terjadwal (Cash)</span>;
      case "selesai": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">Selesai</span>;
      default: return <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  const getPaymentBadge = (method: string) => {
    switch (method) {
      case "transfer": return <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded uppercase">Transfer</span>;
      case "qris": return <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">QRIS</span>;
      case "cash": return <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded uppercase">Cash</span>;
      default: return null;
    }
  };

  // Filter and search
  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || b.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between bg-slate-50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Cari nama atau ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="all">Semua Status</option>
          <option value="menunggu_verifikasi">Menunggu Verifikasi</option>
          <option value="dikonfirmasi">Dikonfirmasi (QRIS/Transfer)</option>
          <option value="terjadwal">Terjadwal (Cash)</option>
          <option value="selesai">Selesai</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold whitespace-nowrap">ID Booking</th>
              <th className="p-4 font-semibold whitespace-nowrap">Pelanggan</th>
              <th className="p-4 font-semibold whitespace-nowrap">Layanan & Waktu</th>
              <th className="p-4 font-semibold whitespace-nowrap">Pembayaran</th>
              <th className="p-4 font-semibold whitespace-nowrap">Status</th>
              <th className="p-4 font-semibold whitespace-nowrap text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500">
                  Tidak ada data booking yang sesuai.
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => {
                const bookingServices = services.filter(s => booking.serviceIds.includes(s.id));
                const serviceNames = bookingServices.map(s => s.name).join(", ");
                
                return (
                  <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">
                      <span className="font-mono font-medium text-slate-900">{booking.id}</span>
                      <div className="text-xs text-slate-500 mt-1">
                        Dibuat: {new Date(booking.createdAt).toLocaleDateString("id-ID")}
                      </div>
                    </td>
                    
                    <td className="p-4">
                      <div className="font-bold text-slate-900">{booking.customerName}</div>
                      <a href={`https://wa.me/${booking.customerPhone}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-green-600 hover:text-green-700 mt-1 text-xs font-medium">
                        <MessageCircle size={12} />
                        {booking.customerPhone}
                      </a>
                    </td>
                    
                    <td className="p-4">
                      <div className="font-medium text-slate-800 line-clamp-1 mb-1 max-w-xs" title={serviceNames}>
                        {serviceNames}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-600">
                        <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                          <Calendar size={12} />
                          {booking.bookingDate}
                        </span>
                        <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded font-bold text-slate-800">
                          <Clock size={12} />
                          {booking.bookingTime}
                        </span>
                      </div>
                    </td>
                    
                    <td className="p-4">
                      <div className="font-bold text-slate-900 mb-1">
                        Rp {booking.totalPrice.toLocaleString("id-ID")}
                      </div>
                      <div className="flex items-center gap-2">
                        {getPaymentBadge(booking.paymentMethod)}
                        {booking.paymentProof && (
                          <a href={booking.paymentProof} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline">
                            Lihat Bukti
                          </a>
                        )}
                      </div>
                    </td>
                    
                    <td className="p-4">
                      {getStatusBadge(booking.status)}
                    </td>
                    
                    <td className="p-4 text-right">
                      <div className="flex flex-col items-end gap-2">
                        {/* Status specific actions */}
                        {booking.status === "menunggu_verifikasi" && (
                          <button 
                            onClick={() => onUpdateStatus(booking.id, "dikonfirmasi")}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-sm"
                          >
                            Verifikasi Pembayaran
                          </button>
                        )}
                        
                        {(booking.status === "dikonfirmasi" || booking.status === "terjadwal") && (
                          <button 
                            onClick={() => onUpdateStatus(booking.id, "selesai")}
                            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-sm"
                          >
                            {booking.paymentMethod === "cash" ? "Tandai Selesai & Dibayar" : "Tandai Selesai"}
                          </button>
                        )}
                        
                        {/* Print Receipt Button */}
                        <button
                          onClick={() => handlePrintReceipt(booking)}
                          className={`w-full flex items-center justify-center gap-1.5 font-bold text-xs py-1.5 px-3 rounded-lg transition-colors border mt-1 ${
                            printerContext?.isConnected 
                              ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200"
                              : "bg-white text-slate-600 hover:bg-slate-50 border-slate-300"
                          }`}
                        >
                          <Printer size={12} />
                          {printerContext?.isConnected ? "Cetak Struk" : "Cetak (Browser)"}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
