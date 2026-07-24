import React from "react";
import { StoreProvider } from "./StoreContext";

export default function KopiSemestaFullLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
}
