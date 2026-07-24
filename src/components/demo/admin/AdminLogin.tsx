import React, { useState } from "react";
import { useStore } from "@/app/(demo)/kopi-semesta-full/StoreContext";
import { Lock, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const { loginAdmin } = useStore();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password);
    if (!success) {
      setError("Password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-[#3D2B1F] p-8 text-center">
          <div className="w-16 h-16 bg-[#D4A373] rounded-full flex items-center justify-center mx-auto mb-4 text-[#3D2B1F]">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-white/70">Kopi Semesta - Mode Demo</p>
        </div>
        
        <div className="p-8">
          <div className="bg-amber-50 text-amber-800 p-4 rounded-xl text-sm mb-6 border border-amber-200 text-center font-medium">
            💡 Untuk demo, gunakan password: <br/>
            <span className="font-mono text-lg font-bold mt-1 block">demo123</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D4A373] bg-slate-50 text-slate-900"
                placeholder="Masukkan password admin"
              />
              {error && <p className="text-red-500 text-xs mt-2 font-medium">{error}</p>}
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#D4A373] hover:bg-[#B36A5E] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-[#D4A373]/30 flex items-center justify-center gap-2 mt-4"
            >
              Masuk Dashboard <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <a href="/kopi-semesta-full" className="text-sm text-slate-500 hover:text-[#3D2B1F] transition-colors underline">
              &larr; Kembali ke halaman toko
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
