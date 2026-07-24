import React from "react";
import { StoreProvider } from "@/components/demo/StoreContext";
import { SEED_PRODUCTS, SEED_ORDERS } from "./data";

export default function RuangRupaFullLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider storeId="ruang_rupa" seedProducts={SEED_PRODUCTS} seedOrders={SEED_ORDERS}>
      {children}
    </StoreProvider>
  );
}
