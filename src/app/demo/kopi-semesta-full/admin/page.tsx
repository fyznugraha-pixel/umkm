"use client";

import React from "react";
import { useStore } from "@/components/demo/StoreContext";
import AdminLogin from "@/components/demo/admin/AdminLogin";
import AdminDashboard from "@/components/demo/admin/AdminDashboard";

export default function AdminPage() {
  const { isAdminLoggedIn } = useStore();

  return isAdminLoggedIn ? <AdminDashboard /> : <AdminLogin />;
}
