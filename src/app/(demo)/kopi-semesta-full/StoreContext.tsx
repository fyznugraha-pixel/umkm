"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// --- Types ---

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  category: "Kopi" | "Non-Kopi" | "Snack";
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  quantity: number;
  options?: string[];
  optionPrice?: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  options?: string[];
  optionPrice?: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerWhatsApp: string;
  notes?: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: "transfer" | "qris" | "cash";
  paymentProof?: string;
  status: "menunggu_verifikasi" | "diproses" | "menunggu_diambil" | "selesai";
  createdAt: string;
}

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  isAdminLoggedIn: boolean;
  
  // Cart actions
  addToCart: (productId: string, quantity?: number, options?: string[], optionPrice?: number) => void;
  updateCartQuantity: (cartItemId: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  
  // Order actions
  checkout: (customerName: string, customerWhatsApp: string, paymentMethod: Order["paymentMethod"], paymentProof?: string, notes?: string) => Order | null;
  updateOrderStatus: (orderId: string, newStatus: Order["status"]) => void;
  
  // Admin Product actions
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Auth & System
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  resetDemoData: () => void;
}

// --- Seed Data ---

const SEED_PRODUCTS: Product[] = [
  { id: "p1", name: "Es Kopi Semesta", price: 25000, description: "Kopi susu gula aren signature kami dengan espresso house blend.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600", stock: 15, category: "Kopi" },
  { id: "p2", name: "Latte Art", price: 30000, description: "Espresso dengan steamed milk yang lembut.", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600", stock: 10, category: "Kopi" },
  { id: "p3", name: "Manual Brew V60", price: 35000, description: "Kopi filter dengan pilihan biji single origin nusantara.", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600", stock: 8, category: "Kopi" },
  { id: "p4", name: "Matcha Latte", price: 32000, description: "Premium Uji Matcha dipadukan dengan fresh milk.", image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=600", stock: 12, category: "Non-Kopi" },
  { id: "p5", name: "Artisan Tea", price: 25000, description: "Pilihan teh artisan dengan aroma menenangkan.", image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=600", stock: 20, category: "Non-Kopi" },
  { id: "p6", name: "Kue Coklat Lumer", price: 18000, description: "Brownies panggang dengan coklat lumer di dalam.", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600", stock: 5, category: "Snack" },
  { id: "p7", name: "Croissant Butter", price: 20000, description: "Classic french pastry yang renyah di luar.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600", stock: 0, category: "Snack" }, // Stok habis contoh
];

const SEED_ORDERS: Order[] = [
  {
    id: "#ORD-1001",
    customerName: "Budi Santoso",
    customerWhatsApp: "08123456789",
    notes: "Es kopi gulanya dikit aja ya",
    items: [
      { productId: "p1", name: "Es Kopi Semesta", price: 25000, quantity: 2 },
      { productId: "p6", name: "Kue Coklat Lumer", price: 18000, quantity: 1 }
    ],
    totalAmount: 68000,
    paymentMethod: "transfer",
    paymentProof: "data:image/png;base64,iVBORw0KGgo...", // Dummy
    status: "menunggu_verifikasi",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 mins ago
  },
  {
    id: "#ORD-1002",
    customerName: "Siti Aminah",
    customerWhatsApp: "08198765432",
    notes: "",
    items: [
      { productId: "p4", name: "Matcha Latte", price: 32000, quantity: 1 }
    ],
    totalAmount: 32000,
    paymentMethod: "qris",
    status: "diproses",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
  },
  {
    id: "#ORD-1003",
    customerName: "Rudi Hartono",
    customerWhatsApp: "08122334455",
    notes: "Minum di tempat",
    items: [
      { productId: "p2", name: "Latte Art", price: 30000, quantity: 2 }
    ],
    totalAmount: 60000,
    paymentMethod: "cash",
    status: "menunggu_diambil",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
  }
];

// --- Context ---

const StoreContext = createContext<StoreContextType | null>(null);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
};

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const loadState = () => {
      const storedProducts = localStorage.getItem("kopi_semesta_products");
      const storedCart = localStorage.getItem("kopi_semesta_cart");
      const storedOrders = localStorage.getItem("kopi_semesta_orders");
      const storedAuth = localStorage.getItem("kopi_semesta_admin_auth");

      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      } else {
        setProducts(SEED_PRODUCTS);
        localStorage.setItem("kopi_semesta_products", JSON.stringify(SEED_PRODUCTS));
      }

      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      } else {
        setOrders(SEED_ORDERS);
        localStorage.setItem("kopi_semesta_orders", JSON.stringify(SEED_ORDERS));
      }

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        const migratedCart = parsedCart.map((item: any) => ({
          ...item,
          cartItemId: item.cartItemId || Math.random().toString(36).substring(7)
        }));
        setCart(migratedCart);
      }
      if (storedAuth) setIsAdminLoggedIn(JSON.parse(storedAuth));
      
      setIsLoaded(true);
    };

    loadState();
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("kopi_semesta_products", JSON.stringify(products));
    localStorage.setItem("kopi_semesta_cart", JSON.stringify(cart));
    localStorage.setItem("kopi_semesta_orders", JSON.stringify(orders));
    localStorage.setItem("kopi_semesta_admin_auth", JSON.stringify(isAdminLoggedIn));
  }, [products, cart, orders, isAdminLoggedIn, isLoaded]);

  // --- Cart Methods ---
  const addToCart = (productId: string, quantity = 1, options?: string[], optionPrice = 0) => {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock < quantity) return; // Prevent adding if out of stock

    setCart(prev => {
      const optionsStr = options ? JSON.stringify(options) : "";
      const existing = prev.find(item => 
        item.productId === productId && (item.options ? JSON.stringify(item.options) : "") === optionsStr
      );
      
      if (existing) {
        if (existing.quantity + quantity > product.stock) return prev;
        return prev.map(item => item.cartItemId === existing.cartItemId 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
        );
      }
      
      const cartItemId = Math.random().toString(36).substring(7);
      return [...prev, { cartItemId, productId, quantity, options, optionPrice }];
    });
  };

  const updateCartQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        const product = products.find(p => p.id === item.productId);
        if (product && quantity <= product.stock) {
          return { ...item, quantity };
        }
      }
      return item;
    }));
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      const basePrice = product ? product.price : 0;
      const extraPrice = item.optionPrice || 0;
      return total + ((basePrice + extraPrice) * item.quantity);
    }, 0);
  };

  // --- Order Methods ---
  const checkout = (customerName: string, customerWhatsApp: string, paymentMethod: Order["paymentMethod"], paymentProof?: string, notes?: string) => {
    if (cart.length === 0) return null;

    // Build order items
    const orderItems: OrderItem[] = [];
    let totalAmount = 0;

    for (const cartItem of cart) {
      const product = products.find(p => p.id === cartItem.productId);
      if (product) {
        const itemPrice = product.price + (cartItem.optionPrice || 0);
        orderItems.push({
          productId: product.id,
          name: product.name,
          price: itemPrice,
          quantity: cartItem.quantity,
          options: cartItem.options,
          optionPrice: cartItem.optionPrice
        });
        totalAmount += itemPrice * cartItem.quantity;
      }
    }

    let initialStatus: Order["status"] = "menunggu_verifikasi";
    if (paymentMethod === "qris") initialStatus = "diproses";
    if (paymentMethod === "cash") initialStatus = "menunggu_diambil";

    const newOrder: Order = {
      id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      customerWhatsApp,
      notes,
      items: orderItems,
      totalAmount,
      paymentMethod,
      paymentProof,
      status: initialStatus,
      createdAt: new Date().toISOString()
    };

    // Deduct stock
    setProducts(prev => prev.map(p => {
      const cartItem = cart.find(c => c.productId === p.id);
      if (cartItem) {
        return { ...p, stock: Math.max(0, p.stock - cartItem.quantity) };
      }
      return p;
    }));

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  // --- Product Methods ---
  const addProduct = (productData: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...productData,
      id: `p${Math.floor(Date.now() / 1000)}`
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    // Also remove from cart if it was there
    setCart(prev => prev.filter(c => c.productId !== id));
  };

  // --- Auth & System ---
  const loginAdmin = (password: string) => {
    if (password === "demo123") {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  const resetDemoData = () => {
    setProducts(SEED_PRODUCTS);
    setOrders(SEED_ORDERS);
    setCart([]);
    setIsAdminLoggedIn(false);
    localStorage.clear();
  };

  // Don't render children until hydration is complete to prevent mismatch
  if (!isLoaded) return <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center font-bold text-amber-900">Memuat data demo...</div>;

  return (
    <StoreContext.Provider value={{
      products, cart, orders, isAdminLoggedIn,
      addToCart, updateCartQuantity, removeFromCart, clearCart, getCartTotal,
      checkout, updateOrderStatus,
      addProduct, updateProduct, deleteProduct,
      loginAdmin, logoutAdmin, resetDemoData
    }}>
      {children}
    </StoreContext.Provider>
  );
};
