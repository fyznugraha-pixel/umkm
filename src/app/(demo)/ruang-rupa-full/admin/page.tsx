"use client";

import React from "react";
import { useStore } from "@/components/demo/StoreContext";
import AdminLogin from "@/components/demo/admin/AdminLogin";
import AdminDashboard from "@/components/demo/admin/AdminDashboard";

export default function RuangRupaFullAdmin() {
  const { isAdminAuthenticated } = useStore();

  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <AdminLogin />
      </div>
    );
  }

  return <AdminDashboard />;
}
