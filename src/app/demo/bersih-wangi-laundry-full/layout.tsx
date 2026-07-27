import React from "react";
import { LaundryProvider } from "@/components/demo/laundry/LaundryContext";

export const metadata = {
  title: "Bersih & Wangi Laundry - Full Katalog",
  description: "Demo Full Katalog untuk sistem pemesanan dan manajemen laundry",
  robots: "noindex, nofollow"
};

export default function LaundryFullLayout({ children }: { children: React.ReactNode }) {
  return (
    <LaundryProvider>
      {children}
    </LaundryProvider>
  );
}
