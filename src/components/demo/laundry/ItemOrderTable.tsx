"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { useLaundryStore, ItemOrder } from "./LaundryContext";

interface ItemOrderTableProps {
  orders: ItemOrder[];
}

export default function ItemOrderTable({ orders }: ItemOrderTableProps) {
  const { updateItemOrderStatus } = useLaundryStore();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(o => 
    o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: ItemOrder["status"]) => {
    switch (status) {
      case "menunggu_verifikasi": return <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">CEK TF</span>;
      case "diproses": return <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-bold">DICUCI</span>;
      case "menunggu_diambil": return <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">SIAP DIAMBIL</span>;
      case "selesai": return <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold">SELESAI</span>;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mt-8">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-bold text-slate-900">Pesanan Satuan (Online)</h2>
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
              <th className="p-4 font-semibold">Item & Tagihan</th>
              <th className="p-4 font-semibold">Pembayaran</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredOrders.map(order => (
              <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <p className="font-black text-slate-900">{order.id}</p>
                  <p className="text-xs text-slate-500">{new Date(order.createdAt).toLocaleTimeString("id-ID", {hour: '2-digit', minute:'2-digit'})}</p>
                </td>
                <td className="p-4">
                  <p className="font-bold text-slate-900">{order.customerName}</p>
                  <p className="text-xs text-slate-500">{order.customerWhatsApp}</p>
                </td>
                <td className="p-4">
                  <p className="font-medium text-slate-700">{order.items.length} Item</p>
                  <p className="font-bold text-sky-600">Rp {order.totalAmount.toLocaleString()}</p>
                </td>
                <td className="p-4">
                  <p className="font-medium uppercase text-slate-800 text-xs">{order.paymentMethod}</p>
                  {order.paymentProof && (
                    <a href={order.paymentProof} target="_blank" rel="noreferrer" className="text-xs font-bold text-sky-500 hover:underline">
                      Lihat Bukti
                    </a>
                  )}
                </td>
                <td className="p-4">
                  {getStatusBadge(order.status)}
                </td>
                <td className="p-4 text-right">
                  {order.status === "menunggu_verifikasi" && (
                    <button 
                      onClick={() => updateItemOrderStatus(order.id, "diproses")}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                    >
                      Verifikasi
                    </button>
                  )}
                  {order.status === "diproses" && (
                    <button 
                      onClick={() => updateItemOrderStatus(order.id, "menunggu_diambil")}
                      className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                    >
                      Selesai Cuci
                    </button>
                  )}
                  {order.status === "menunggu_diambil" && (
                    <button 
                      onClick={() => updateItemOrderStatus(order.id, "selesai")}
                      className="bg-slate-900 hover:bg-black text-white px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                    >
                      Serahkan
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
