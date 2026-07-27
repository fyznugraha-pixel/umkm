"use client";

import React, { useState } from "react";
import { CheckCircle2, Search, X, Check, Eye, Printer, MapPin, Edit, CheckSquare, MessageCircle } from "lucide-react";
import { useLaundryStore, DropoffOrder } from "./LaundryContext";

interface DropoffTableProps {
  orders: DropoffOrder[];
}

export default function DropoffTable({ orders }: DropoffTableProps) {
  const { updateDropoffWeight, updateDropoffStatus, payDropoff } = useLaundryStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [weightInput, setWeightInput] = useState<string>("");
  const [isCashPayment, setIsCashPayment] = useState(false);

  const filteredOrders = orders.filter(o => 
    o.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTimbang = (order: DropoffOrder) => {
    setActiveModal(order.id);
    setWeightInput(order.estimatedKg.toString());
    setIsCashPayment(false);
  };

  const submitTimbang = (orderId: string) => {
    const w = parseFloat(weightInput);
    if (isNaN(w) || w <= 0) return alert("Berat tidak valid");
    
    updateDropoffWeight(orderId, w);
    if (isCashPayment) {
      const order = orders.find(o => o.id === orderId);
      payDropoff(orderId, "cash");
    }
    setActiveModal(null);
  };

  const getStatusBadge = (status: DropoffOrder["status"]) => {
    switch (status) {
      case "menunggu_dropoff": return <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">MENUNGGU DITIMBANG</span>;
      case "menunggu_pembayaran": return <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">BLM DIBAYAR</span>;
      case "menunggu_verifikasi": return <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">CEK TF</span>;
      case "diproses": return <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-bold">DICUCI</span>;
      case "siap_diambil": return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">SIAP DIAMBIL</span>;
      case "selesai": return <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold">SELESAI</span>;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-bold text-slate-900">Pesanan Kiloan (Drop-off)</h2>
        <div className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Cari referensi / nama..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-semibold">Resi & Waktu</th>
              <th className="p-4 font-semibold">Pelanggan</th>
              <th className="p-4 font-semibold">Layanan & Berat</th>
              <th className="p-4 font-semibold">Tagihan</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredOrders.map(order => (
              <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <p className="font-black text-slate-900">{order.referenceNumber}</p>
                  <p className="text-xs text-slate-500">{new Date(order.createdAt).toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'})}</p>
                </td>
                <td className="p-4">
                  <p className="font-bold text-slate-900">{order.customerName}</p>
                  <p className="text-xs text-slate-500">{order.customerPhone}</p>
                </td>
                <td className="p-4">
                  <p className="font-medium text-sky-600">{order.speedOption}</p>
                  <p className="text-xs text-slate-500">
                    Est: {order.estimatedKg}kg 
                    {order.actualKg ? <span className="font-bold text-slate-800 ml-1">→ Akt: {order.actualKg}kg</span> : ""}
                  </p>
                </td>
                <td className="p-4 font-bold text-slate-900">
                  {order.finalPrice ? `Rp ${order.finalPrice.toLocaleString()}` : "-"}
                </td>
                <td className="p-4">
                  {getStatusBadge(order.status)}
                </td>
                <td className="p-4 text-right">
                  {order.status === "menunggu_dropoff" && (
                    <button 
                      onClick={() => handleTimbang(order)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                    >
                      Timbang Aktual
                    </button>
                  )}
                  {order.status === "menunggu_verifikasi" && (
                    <button 
                      onClick={() => updateDropoffStatus(order.id, "diproses")}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                    >
                      Verifikasi TF
                    </button>
                  )}
                  {order.status === "diproses" && (
                    <button 
                      onClick={() => updateDropoffStatus(order.id, "siap_diambil")}
                      className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                    >
                      Tandai Selesai Cuci
                    </button>
                  )}
                  {order.status === "siap_diambil" && (
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => window.open(`https://wa.me/${order.customerPhone}?text=Halo%20${order.customerName},%20Cucian%20Anda%20dengan%20resi%20${order.referenceNumber}%20sudah%20selesai%20dan%20siap%20diambil.`)}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-xl transition-colors"
                        title="Notifikasi WA"
                      >
                        <MessageCircle size={16} />
                      </button>
                      <button 
                        onClick={() => updateDropoffStatus(order.id, "selesai")}
                        className="bg-slate-900 hover:bg-black text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                      >
                        Serahkan
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Timbang */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm">
            <h3 className="font-bold text-slate-900 text-xl mb-4">Timbang Cucian Aktual</h3>
            
            <label className="block text-sm font-semibold text-slate-700 mb-2">Berat Aktual (Kg)</label>
            <input 
              type="number"
              step="0.1"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl mb-4 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />

            <label className="flex items-center gap-2 mb-6 cursor-pointer">
              <input 
                type="checkbox"
                checked={isCashPayment}
                onChange={(e) => setIsCashPayment(e.target.checked)}
                className="w-5 h-5 rounded text-sky-500 border-slate-300 focus:ring-sky-500"
              />
              <span className="text-sm font-medium text-slate-700">Pelanggan bayar lunas di konter (Cash)</span>
            </label>

            <div className="flex gap-2">
              <button 
                onClick={() => setActiveModal(null)}
                className="flex-1 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl"
              >
                Batal
              </button>
              <button 
                onClick={() => submitTimbang(activeModal)}
                className="flex-1 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
