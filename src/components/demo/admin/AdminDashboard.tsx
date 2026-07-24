"use client";

import React, { useState } from "react";
import { useStore, Order, Product } from "@/app/(demo)/kopi-semesta-full/StoreContext";
import { LayoutDashboard, ShoppingCart, Package, LogOut, RotateCcw, TrendingUp, Users, DollarSign, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboard() {
  const { orders, products, logoutAdmin, resetDemoData, updateOrderStatus, updateProduct, deleteProduct, addProduct } = useStore();
  const [activeTab, setActiveTab] = useState<"overview" | "orders" | "products">("overview");

  const pendingOrders = orders.filter(o => o.status === "menunggu_verifikasi" || o.status === "menunggu_diambil").length;
  const paidOrders = orders.filter(o => o.status === "diproses" || o.status === "selesai");
  const totalRevenue = paidOrders.reduce((sum, order) => sum + order.totalAmount, 0);

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "menunggu_verifikasi": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">Menunggu Verifikasi</span>;
      case "menunggu_diambil": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">Menunggu Diambil</span>;
      case "diproses": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">Diproses</span>;
      case "selesai": return <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Selesai</span>;
      default: return null;
    }
  };

  const getPaymentBadge = (method: Order["paymentMethod"]) => {
    switch (method) {
      case "transfer": return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200 uppercase tracking-wider">Transfer</span>;
      case "qris": return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-600 border border-teal-200 uppercase tracking-wider">QRIS</span>;
      case "cash": return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-300 uppercase tracking-wider">Cash</span>;
      default: return null;
    }
  };

  const handleReset = () => {
    if (confirm("Apakah Anda yakin ingin me-reset semua data (pesanan, keranjang, stok) ke kondisi awal demo?")) {
      resetDemoData();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#3D2B1F] text-white flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-serif font-bold text-[#D4A373] mb-1">Kopi Semesta</h1>
          <p className="text-xs text-white/50 uppercase tracking-widest">Admin Panel</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === "overview" ? "bg-[#D4A373] text-[#3D2B1F] font-bold" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
          >
            <LayoutDashboard size={20} /> Ringkasan
          </button>
          <button 
            onClick={() => setActiveTab("orders")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === "orders" ? "bg-[#D4A373] text-[#3D2B1F] font-bold" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
          >
            <ShoppingCart size={20} /> 
            Pesanan 
            {pendingOrders > 0 && (
              <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{pendingOrders}</span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab("products")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === "products" ? "bg-[#D4A373] text-[#3D2B1F] font-bold" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
          >
            <Package size={20} /> Katalog Produk
          </button>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <button 
            onClick={handleReset}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-amber-200 hover:bg-amber-900/30 transition-colors text-sm"
          >
            <RotateCcw size={18} /> Reset Demo Data
          </button>
          <button 
            onClick={logoutAdmin}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-red-500/20 hover:text-red-400 transition-colors text-sm"
          >
            <LogOut size={18} /> Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 md:p-8">
        
        {activeTab === "overview" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Ringkasan Hari Ini</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-blue-50 text-blue-600 p-4 rounded-xl">
                  <ShoppingCart size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Total Pesanan</p>
                  <p className="text-3xl font-bold text-slate-800">{orders.length}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-amber-50 text-amber-600 p-4 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Menunggu Konfirmasi</p>
                  <p className="text-3xl font-bold text-slate-800">{pendingOrders}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="bg-green-50 text-green-600 p-4 rounded-xl">
                  <DollarSign size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Pendapatan (Selesai)</p>
                  <p className="text-2xl font-bold text-slate-800">Rp {totalRevenue.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Pesanan Terbaru</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-sm text-slate-500">
                      <th className="pb-3 font-medium">ID Order</th>
                      <th className="pb-3 font-medium">Pelanggan</th>
                      <th className="pb-3 font-medium">Total</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map(order => (
                      <tr key={order.id} className="border-b border-slate-100 last:border-0">
                        <td className="py-3 font-medium text-slate-800">{order.id}</td>
                        <td className="py-3 text-slate-600">{order.customerName}</td>
                        <td className="py-3 text-slate-600 font-medium">Rp {order.totalAmount.toLocaleString("id-ID")}</td>
                        <td className="py-3">
                          {getStatusBadge(order.status)}
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-slate-400">Belum ada data pesanan.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">Kelola Pesanan</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200 text-sm text-slate-500">
                      <th className="p-4 font-medium">ID Order</th>
                      <th className="p-4 font-medium">Pelanggan & WA</th>
                      <th className="p-4 font-medium">Item & Catatan</th>
                      <th className="p-4 font-medium">Total</th>
                      <th className="p-4 font-medium">Status & Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {orders.map(order => (
                      <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 align-top font-bold text-slate-800">{order.id}
                          <div className="text-xs text-slate-400 font-normal mt-1">
                            {new Date(order.createdAt).toLocaleDateString("id-ID", { hour: '2-digit', minute:'2-digit' })}
                          </div>
                        </td>
                        <td className="p-4 align-top">
                          <div className="font-medium text-slate-700">{order.customerName}</div>
                          <div className="text-sm text-slate-500 mb-2">{order.customerWhatsApp}</div>
                          {getPaymentBadge(order.paymentMethod)}
                        </td>
                        <td className="p-4 align-top max-w-xs">
                          <ul className="text-sm text-slate-700 space-y-1 mb-2">
                            {order.items.map((item, i) => (
                              <li key={i} className="mb-1.5">
                                <div className="font-semibold">{item.quantity}x {item.name}</div>
                                {item.options && item.options.length > 0 && (
                                  <div className="text-[10px] text-slate-500 leading-tight">({item.options.join(", ")})</div>
                                )}
                              </li>
                            ))}
                          </ul>
                          {order.notes && (
                            <div className="bg-amber-50 p-2 rounded text-xs text-amber-800 italic border border-amber-100">
                              " {order.notes} "
                            </div>
                          )}
                        </td>
                        <td className="p-4 align-top font-bold text-slate-800">
                          Rp {order.totalAmount.toLocaleString("id-ID")}
                        </td>
                        <td className="p-4 align-top">
                          <div className="mb-3">
                            {getStatusBadge(order.status)}
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            {/* Branch: Transfer Bank */}
                            {order.paymentMethod === "transfer" && order.status === "menunggu_verifikasi" && (
                              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-sm">
                                <p className="font-bold text-blue-900 mb-2 text-xs">Cek Bukti Transfer:</p>
                                {order.paymentProof ? (
                                  <a href={order.paymentProof} target="_blank" rel="noreferrer" className="block w-full h-16 bg-black/10 rounded overflow-hidden mb-2 relative group">
                                    <img src={order.paymentProof} alt="Bukti Transfer" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">Perbesar</span>
                                  </a>
                                ) : (
                                  <span className="text-xs text-red-500 mb-2 block">Belum ada bukti</span>
                                )}
                                <button 
                                  onClick={() => updateOrderStatus(order.id, "diproses")}
                                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-1.5 rounded transition-colors"
                                >
                                  Verifikasi Pembayaran
                                </button>
                              </div>
                            )}

                            {/* Branch: Cash */}
                            {order.paymentMethod === "cash" && order.status === "menunggu_diambil" && (
                              <button 
                                onClick={() => updateOrderStatus(order.id, "selesai")}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-2 rounded shadow-sm transition-colors"
                              >
                                Tandai Diambil & Dibayar
                              </button>
                            )}

                            {/* General: Diproses -> Selesai */}
                            {order.status === "diproses" && (
                              <button 
                                onClick={() => updateOrderStatus(order.id, "selesai")}
                                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2 rounded shadow-sm transition-colors"
                              >
                                Selesaikan Pesanan
                              </button>
                            )}

                            {/* General: WA Konfirmasi */}
                            <a 
                              href={`https://wa.me/${order.customerWhatsApp.replace(/^0/, '62')}?text=Halo%20${order.customerName},%20pesanan%20Anda%20(${order.id})%20${order.status === 'selesai' ? 'telah selesai.' : 'sedang diproses.'}`}
                              target="_blank" rel="noreferrer"
                              className="w-full text-center bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 font-bold text-xs py-2 rounded transition-colors"
                            >
                              Konfirmasi via WhatsApp
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {orders.length === 0 && (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-slate-400">Belum ada data pesanan.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">Katalog Produk</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50">
                    <tr className="border-b border-slate-200 text-sm text-slate-500">
                      <th className="p-4 font-medium w-16">Foto</th>
                      <th className="p-4 font-medium">Nama Produk & Kategori</th>
                      <th className="p-4 font-medium">Harga</th>
                      <th className="p-4 font-medium">Stok</th>
                      <th className="p-4 font-medium">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {products.map(product => (
                      <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 align-middle">
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                        </td>
                        <td className="p-4 align-middle">
                          <div className="font-bold text-slate-800">{product.name}</div>
                          <div className="text-xs text-slate-500 bg-slate-200 inline-block px-2 py-0.5 rounded-full mt-1">
                            {product.category}
                          </div>
                        </td>
                        <td className="p-4 align-middle font-medium text-slate-700">
                          Rp {product.price.toLocaleString("id-ID")}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateProduct(product.id, { stock: Math.max(0, product.stock - 1) })}
                              className="w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                            >-</button>
                            <span className={`w-8 text-center font-bold ${product.stock === 0 ? "text-red-500" : "text-slate-800"}`}>
                              {product.stock}
                            </span>
                            <button 
                              onClick={() => updateProduct(product.id, { stock: product.stock + 1 })}
                              className="w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold"
                            >+</button>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <button 
                            onClick={() => confirm("Hapus produk ini?") && deleteProduct(product.id)}
                            className="text-red-500 hover:text-red-700 text-sm font-bold bg-red-50 px-3 py-1 rounded"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm border border-blue-200">
              💡 <strong>Info Demo:</strong> Untuk menyederhanakan demo, form tambah produk baru disembunyikan. Anda dapat mengubah stok dan menghapus produk untuk melihat bagaimana efeknya di keranjang belanja dan halaman depan.
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
