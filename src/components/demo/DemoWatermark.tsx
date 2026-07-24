import React from "react";
import Link from "next/link";

export default function DemoWatermark() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center z-[100] border-t border-slate-800 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] flex justify-center items-center gap-2">
      <span className="opacity-80">Halaman ini adalah demo web dari</span>
      <Link href="/" className="font-bold text-yellow-500 hover:text-yellow-400 transition-colors">
        Faiz Web UMKM
      </Link>
    </div>
  );
}
