import React from "react";

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 text-slate-800">
      <div className="text-center p-8 max-w-md bg-white rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Demo: {slug}</h1>
        <p className="text-slate-500">
          Halaman ini disiapkan untuk demo klien di masa mendatang.
        </p>
      </div>
    </div>
  );
}
