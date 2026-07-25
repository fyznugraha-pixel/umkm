"use client";

import React, { useState } from "react";
import BookingDashboard from "@/components/demo/booking/BookingDashboard";
import { Scissors, Lock, ArrowRight } from "lucide-react";

export default function RapiAdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length > 0) { // Accept any password for demo
      setIsLoggedIn(true);
    } else {
      setError("Masukkan password sembarang");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-zinc-800">
          <div className="p-8 text-center bg-zinc-950 border-b border-zinc-800">
            <div className="w-16 h-16 bg-cyan-500 rounded-2xl rotate-45 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20">
              <Scissors size={28} className="text-zinc-950 -rotate-45" />
            </div>
            <h1 className="text-2xl font-display font-bold text-white uppercase tracking-wider">
              RAPI Admin Portal
            </h1>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  Password Admin
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    className={`block w-full pl-10 pr-3 py-3 border ${error ? 'border-red-500' : 'border-zinc-700'} rounded-xl bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all`}
                    placeholder="Masukkan password"
                  />
                </div>
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-zinc-950 bg-cyan-500 hover:bg-cyan-400 transition-colors"
              >
                Masuk <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center text-zinc-500 text-sm">
          <p>Halaman ini adalah simulasi dashboard admin.</p>
          <p>Ketik apa saja di kolom password untuk masuk.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Scissors size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:block">RAPI Barbershop</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-600">Admin</span>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="text-sm text-red-600 font-bold hover:text-red-700"
            >
              Keluar
            </button>
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <BookingDashboard />
      </main>
    </div>
  );
}
