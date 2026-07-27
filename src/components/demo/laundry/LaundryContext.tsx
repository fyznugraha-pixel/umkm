"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// --- Types ---

export type LaundryService = {
  id: string;
  name: string;
  category: "perKg" | "perItem";
  speedOptions?: { label: "Reguler" | "Express"; pricePerKg: number; estimasiHari: string }[];
  priceFlat?: number;
  unit?: "pcs" | "pasang";
  image?: string;
  description?: string;
};

export type DropoffOrder = {
  id: string;
  referenceNumber: string;
  customerName: string;
  customerPhone: string;
  speedOption: "Reguler" | "Express";
  estimatedKg: number;
  actualKg?: number;
  pricePerKg: number;
  finalPrice?: number;
  paymentMethod?: "transfer" | "qris" | "cash";
  paymentProof?: string;
  status: "menunggu_dropoff" | "menunggu_pembayaran" | "menunggu_verifikasi" | "diproses" | "siap_diambil" | "selesai";
  createdAt: string;
};

export type ItemOrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

export type ItemOrder = {
  id: string;
  customerName: string;
  customerWhatsApp: string;
  items: ItemOrderItem[];
  totalAmount: number;
  paymentMethod: "transfer" | "qris" | "cash";
  paymentProof?: string;
  status: "menunggu_verifikasi" | "diproses" | "menunggu_diambil" | "selesai";
  createdAt: string;
};

export type CartItem = {
  cartItemId: string;
  productId: string;
  quantity: number;
};

export interface CheckoutDetails {
  customerName: string;
  customerWhatsApp: string;
  paymentMethod?: "transfer" | "qris" | "cash";
  paymentProof?: string;
}

// --- Seed Data ---

export const SEED_LAUNDRY_SERVICES: LaundryService[] = [
  {
    id: "s1",
    name: "Cuci Kering Lipat",
    category: "perKg",
    speedOptions: [
      { label: "Reguler", pricePerKg: 7000, estimasiHari: "2-3 Hari" },
      { label: "Express", pricePerKg: 10000, estimasiHari: "24 Jam" }
    ],
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600",
    description: "Pakaian dicuci bersih, dikeringkan sempurna, dan dilipat rapi."
  },
  {
    id: "s2",
    name: "Cuci Kering Setrika",
    category: "perKg",
    speedOptions: [
      { label: "Reguler", pricePerKg: 9000, estimasiHari: "2-3 Hari" },
      { label: "Express", pricePerKg: 13000, estimasiHari: "24 Jam" }
    ],
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=600",
    description: "Pakaian dicuci, dikeringkan, lalu disetrika rapi dan wangi."
  },
  {
    id: "s3",
    name: "Bed Cover / Selimut",
    category: "perItem",
    priceFlat: 35000,
    unit: "pcs",
    image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    description: "Pencucian khusus bed cover dan selimut agar tetap lembut."
  },
  {
    id: "s4",
    name: "Cuci Sepatu Premium",
    category: "perItem",
    priceFlat: 45000,
    unit: "pasang",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    description: "Deep clean untuk sepatu kesayangan dengan sabun khusus."
  }
];

export const SEED_DROPOFF_ORDERS: DropoffOrder[] = [
  {
    id: "do_1",
    referenceNumber: "LDY-001",
    customerName: "Budi Santoso",
    customerPhone: "08123456789",
    speedOption: "Reguler",
    estimatedKg: 3,
    pricePerKg: 7000,
    status: "menunggu_dropoff",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString()
  },
  {
    id: "do_2",
    referenceNumber: "LDY-002",
    customerName: "Siti Aminah",
    customerPhone: "08198765432",
    speedOption: "Express",
    estimatedKg: 5,
    actualKg: 5.2,
    pricePerKg: 13000,
    finalPrice: 67600,
    status: "menunggu_pembayaran",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString()
  },
  {
    id: "do_3",
    referenceNumber: "LDY-003",
    customerName: "Rudi Hartono",
    customerPhone: "08122334455",
    speedOption: "Reguler",
    estimatedKg: 4,
    actualKg: 4,
    pricePerKg: 9000,
    finalPrice: 36000,
    paymentMethod: "qris",
    status: "diproses",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  }
];

export const SEED_ITEM_ORDERS: ItemOrder[] = [
  {
    id: "#ORD-SAT-1",
    customerName: "Andi Permana",
    customerWhatsApp: "089988776655",
    items: [
      { productId: "s4", name: "Cuci Sepatu Premium", price: 45000, quantity: 2 }
    ],
    totalAmount: 90000,
    paymentMethod: "transfer",
    paymentProof: "data:image/png;base64,iVBORw0KGgo...",
    status: "menunggu_verifikasi",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString()
  }
];

// --- Context Definition ---

interface LaundryContextType {
  services: LaundryService[];
  cart: CartItem[];
  dropoffOrders: DropoffOrder[];
  itemOrders: ItemOrder[];
  isAdminLoggedIn: boolean;
  checkoutDetails: CheckoutDetails;
  
  // Cart Actions (Branch A)
  addToCart: (productId: string, quantity?: number) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  
  updateCheckoutDetails: (details: Partial<CheckoutDetails>) => void;
  clearCheckoutDetails: () => void;
  checkoutItemOrder: (customerName: string, customerWhatsApp: string, paymentMethod: ItemOrder["paymentMethod"], paymentProof?: string) => ItemOrder | null;
  updateItemOrderStatus: (orderId: string, newStatus: ItemOrder["status"]) => void;
  
  // Dropoff Actions (Branch B)
  submitDropoff: (customerName: string, customerPhone: string, speedOption: "Reguler" | "Express", estimatedKg: number, serviceId: string) => DropoffOrder | null;
  updateDropoffWeight: (orderId: string, actualKg: number) => void;
  payDropoff: (orderId: string, paymentMethod: DropoffOrder["paymentMethod"], paymentProof?: string) => void;
  updateDropoffStatus: (orderId: string, newStatus: DropoffOrder["status"]) => void;
  
  // Admin & System
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  resetDemoData: () => void;
}

const LaundryContext = createContext<LaundryContextType | null>(null);

export const useLaundryStore = () => {
  const context = useContext(LaundryContext);
  if (!context) throw new Error("useLaundryStore must be used within a LaundryProvider");
  return context;
};

export const LaundryProvider = ({ children }: { children: React.ReactNode }) => {
  const storeId = "laundry_full_v1";
  
  const [services, setServices] = useState<LaundryService[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [dropoffOrders, setDropoffOrders] = useState<DropoffOrder[]>([]);
  const [itemOrders, setItemOrders] = useState<ItemOrder[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [checkoutDetails, setCheckoutDetails] = useState<CheckoutDetails>({
    customerName: "",
    customerWhatsApp: ""
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadState = () => {
      const storedServices = localStorage.getItem(`${storeId}_services`);
      if (storedServices) setServices(JSON.parse(storedServices));
      else { setServices(SEED_LAUNDRY_SERVICES); localStorage.setItem(`${storeId}_services`, JSON.stringify(SEED_LAUNDRY_SERVICES)); }

      const storedDropoffs = localStorage.getItem(`${storeId}_dropoffs`);
      if (storedDropoffs) setDropoffOrders(JSON.parse(storedDropoffs));
      else { setDropoffOrders(SEED_DROPOFF_ORDERS); localStorage.setItem(`${storeId}_dropoffs`, JSON.stringify(SEED_DROPOFF_ORDERS)); }

      const storedItems = localStorage.getItem(`${storeId}_item_orders`);
      if (storedItems) setItemOrders(JSON.parse(storedItems));
      else { setItemOrders(SEED_ITEM_ORDERS); localStorage.setItem(`${storeId}_item_orders`, JSON.stringify(SEED_ITEM_ORDERS)); }

      const storedCart = localStorage.getItem(`${storeId}_cart`);
      if (storedCart) setCart(JSON.parse(storedCart));
      
      const storedCheckout = localStorage.getItem(`${storeId}_checkout`);
      if (storedCheckout) setCheckoutDetails(JSON.parse(storedCheckout));

      const storedAuth = localStorage.getItem(`${storeId}_admin_auth`);
      if (storedAuth) setIsAdminLoggedIn(JSON.parse(storedAuth));
      
      setIsLoaded(true);
    };
    loadState();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(`${storeId}_services`, JSON.stringify(services));
    localStorage.setItem(`${storeId}_cart`, JSON.stringify(cart));
    localStorage.setItem(`${storeId}_dropoffs`, JSON.stringify(dropoffOrders));
    localStorage.setItem(`${storeId}_item_orders`, JSON.stringify(itemOrders));
    localStorage.setItem(`${storeId}_admin_auth`, JSON.stringify(isAdminLoggedIn));
    localStorage.setItem(`${storeId}_checkout`, JSON.stringify(checkoutDetails));
  }, [services, cart, dropoffOrders, itemOrders, isAdminLoggedIn, checkoutDetails, isLoaded]);

  // --- Cart Methods ---
  const addToCart = (productId: string, quantity = 1) => {
    const service = services.find(s => s.id === productId && s.category === "perItem");
    if (!service) return;

    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => item.cartItemId === existing.cartItemId 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
        );
      }
      return [...prev, { cartItemId: Math.random().toString(36).substring(7), productId, quantity }];
    });
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(cartItemId);
    setCart(prev => prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity } : item));
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const service = services.find(s => s.id === item.productId);
      return total + ((service?.priceFlat || 0) * item.quantity);
    }, 0);
  };

  // --- Checkout Flow (Branch A) ---
  const updateCheckoutDetails = (details: Partial<CheckoutDetails>) => {
    setCheckoutDetails(prev => ({ ...prev, ...details }));
  };

  const clearCheckoutDetails = () => {
    setCheckoutDetails({ customerName: "", customerWhatsApp: "" });
  };

  const checkoutItemOrder = (customerName: string, customerWhatsApp: string, paymentMethod: ItemOrder["paymentMethod"], paymentProof?: string) => {
    if (cart.length === 0) return null;

    const orderItems: ItemOrderItem[] = cart.map(item => {
      const service = services.find(s => s.id === item.productId)!;
      return {
        productId: service.id,
        name: service.name,
        price: service.priceFlat || 0,
        quantity: item.quantity
      };
    });

    const newOrder: ItemOrder = {
      id: `#ORD-SAT-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      customerWhatsApp,
      items: orderItems,
      totalAmount: getCartTotal(),
      paymentMethod,
      paymentProof,
      status: paymentMethod === "cash" ? "menunggu_diambil" : (paymentMethod === "qris" ? "diproses" : "menunggu_verifikasi"),
      createdAt: new Date().toISOString()
    };

    setItemOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const updateItemOrderStatus = (orderId: string, newStatus: ItemOrder["status"]) => {
    setItemOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  // --- Dropoff Flow (Branch B) ---
  const submitDropoff = (customerName: string, customerPhone: string, speedOption: "Reguler" | "Express", estimatedKg: number, serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (!service || !service.speedOptions) return null;
    
    const speedOpt = service.speedOptions.find(opt => opt.label === speedOption);
    if (!speedOpt) return null;

    const newDropoff: DropoffOrder = {
      id: `do_${Math.random().toString(36).substring(7)}`,
      referenceNumber: `LDY-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      customerPhone,
      speedOption,
      estimatedKg,
      pricePerKg: speedOpt.pricePerKg,
      status: "menunggu_dropoff",
      createdAt: new Date().toISOString()
    };

    setDropoffOrders(prev => [newDropoff, ...prev]);
    return newDropoff;
  };

  const updateDropoffWeight = (orderId: string, actualKg: number) => {
    setDropoffOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          actualKg,
          finalPrice: actualKg * o.pricePerKg,
          status: "menunggu_pembayaran"
        };
      }
      return o;
    }));
  };

  const payDropoff = (orderId: string, paymentMethod: DropoffOrder["paymentMethod"], paymentProof?: string) => {
    setDropoffOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          paymentMethod,
          paymentProof,
          status: paymentMethod === "cash" || paymentMethod === "qris" ? "diproses" : "menunggu_verifikasi"
        };
      }
      return o;
    }));
  };

  const updateDropoffStatus = (orderId: string, newStatus: DropoffOrder["status"]) => {
    setDropoffOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  // --- Admin ---
  const loginAdmin = (password: string) => {
    if (password === "demo123") {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => setIsAdminLoggedIn(false);

  const resetDemoData = () => {
    setServices(SEED_LAUNDRY_SERVICES);
    setDropoffOrders(SEED_DROPOFF_ORDERS);
    setItemOrders(SEED_ITEM_ORDERS);
    setCart([]);
    setCheckoutDetails({ customerName: "", customerWhatsApp: "" });
  };

  return (
    <LaundryContext.Provider value={{
      services, cart, dropoffOrders, itemOrders, isAdminLoggedIn, checkoutDetails,
      addToCart, updateCartQuantity, removeFromCart, clearCart, getCartTotal,
      updateCheckoutDetails, clearCheckoutDetails, checkoutItemOrder, updateItemOrderStatus,
      submitDropoff, updateDropoffWeight, payDropoff, updateDropoffStatus,
      loginAdmin, logoutAdmin, resetDemoData
    }}>
      {children}
    </LaundryContext.Provider>
  );
};
