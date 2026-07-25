import React from "react";
import { StoreProvider } from "@/components/demo/StoreContext";
import { SEED_PRODUCTS, SEED_ORDERS } from "./data";

export default function KopiSemestaFullLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider storeId="kopi_semesta" seedProducts={SEED_PRODUCTS} seedOrders={SEED_ORDERS}>
      {children}
    </StoreProvider>
  );
}
