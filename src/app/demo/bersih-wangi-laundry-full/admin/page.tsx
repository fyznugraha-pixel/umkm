"use client";

import React, { useState } from "react";
import { Lock, ArrowRight, LayoutDashboard, RefreshCw, LogOut, Package, CreditCard, Droplets } from "lucide-react";
import { useLaundryStore } from "@/components/demo/laundry/LaundryContext";
import DropoffTable from "@/components/demo/laundry/DropoffTable";
import ItemOrderTable from "@/components/demo/laundry/ItemOrderTable";

export default function AdminDashboard() {
  const { 
    isAdminLoggedIn, 
    loginAdmin, 
    logoutAdmin, 
    dropoffOrders, 
    itemOrders, 
    resetDemoData 
  } = useLaundryStore();
  
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"dropoff" | "satuan">("dropoff");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginAdmin(password)) {
      setError("Password salah. Silakan coba lagi.");
    }
  };

  const handleReset = () => {
    if (confirm("Reset seluruh data ke kondisi awal demo?")) {
      resetDemoData();
      alert("Data berhasil direset.");
    }
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-sky-500 p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Lock size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-white/80">Bersih & Wangi Laundry - Mode Demo</p>
          </div>
          
          <div className="p-8">
            <div className="bg-sky-50 text-sky-800 p-4 rounded-xl text-sm mb-6 border border-sky-200 text-center font-medium">
              💡 Untuk demo, gunakan password: <br/>
              <span className="font-mono text-lg font-bold mt-1 block">demo123</span>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 text-slate-900"
                  placeholder="Masukkan password admin"
                />
                {error && <p className="text-red-500 text-xs mt-2 font-medium">{error}</p>}
              </div>
              
              <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                Masuk Dashboard <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <a href="/demo/bersih-wangi-laundry-full" className="text-sm text-slate-500 hover:text-sky-500 transition-colors underline">
                &larr; Kembali ke halaman toko
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Dashboard Data Processing ---
  const activeDropoffs = dropoffOrders.filter(o => o.status !== "selesai").length;
  const activeItemOrders = itemOrders.filter(o => o.status !== "selesai").length;
  
  const totalDropoffRevenue = dropoffOrders
    .filter(o => o.status === "selesai" || o.status === "siap_diambil" || o.status === "diproses")
    .reduce((sum, o) => sum + (o.finalPrice || 0), 0);
    
  const totalItemRevenue = itemOrders
    .filter(o => o.status !== "menunggu_verifikasi")
    .reduce((sum, o) => sum + o.totalAmount, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                <LayoutDashboard size={20} className="text-white" />
              </div>
              <div>
                <h1 className="font-bold text-slate-900 leading-tight">Dashboard Admin</h1>
                <p className="text-xs text-slate-500 font-medium">Bersih & Wangi Laundry</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleReset}
                className="text-slate-500 hover:text-amber-600 p-2 rounded-lg hover:bg-amber-50 transition-colors"
                title="Reset Data Demo"
              >
                <RefreshCw size={20} />
              </button>
              <button 
                onClick={logoutAdmin}
                className="text-slate-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <LogOut size={20} className="hidden sm:block" /> 
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
              <Package size={28} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Drop-off Aktif</p>
              <p className="text-3xl font-black text-slate-900">{activeDropoffs} <span className="text-lg font-medium text-slate-400">order</span></p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
              <Droplets size={28} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Satuan Aktif</p>
              <p className="text-3xl font-black text-slate-900">{activeItemOrders} <span className="text-lg font-medium text-slate-400">order</span></p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center">
              <CreditCard size={28} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Pendapatan</p>
              <p className="text-2xl font-black text-slate-900">Rp {(totalDropoffRevenue + totalItemRevenue).toLocaleString("id-ID")}</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6 border-b border-slate-200 pb-px">
          <button 
            onClick={() => setActiveTab("dropoff")}
            className={`pb-4 px-2 font-bold text-lg border-b-2 transition-colors ${activeTab === "dropoff" ? "border-sky-500 text-sky-600" : "border-transparent text-slate-500 hover:text-slate-700"}`}
          >
            Pesanan Kiloan (Drop-off)
          </button>
          <button 
            onClick={() => setActiveTab("satuan")}
            className={`pb-4 px-2 font-bold text-lg border-b-2 transition-colors ${activeTab === "satuan" ? "border-amber-500 text-amber-600" : "border-transparent text-slate-500 hover:text-slate-700"}`}
          >
            Pesanan Satuan (Online)
          </button>
        </div>

        {/* Tables */}
        {activeTab === "dropoff" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DropoffTable orders={dropoffOrders} />
          </div>
        )}

        {activeTab === "satuan" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ItemOrderTable orders={itemOrders} />
          </div>
        )}

      </main>
    </div>
  );
}
