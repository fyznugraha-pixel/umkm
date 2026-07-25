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
  category: "Kopi" | "Non-Kopi" | "Snack" | "Atasan" | "Bawahan" | "Aksesoris";
  sizes?: string[]; // Added for fashion
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  quantity: number;
  options?: string[];
  optionPrice?: number;
  selectedSize?: string; // Added for fashion
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  options?: string[];
  optionPrice?: number;
  selectedSize?: string; // Added for fashion
}

export interface Order {
  id: string;
  customerName: string;
  customerWhatsApp: string;
  notes?: string;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: "transfer" | "qris" | "cash" | "cod";
  paymentProof?: string;
  shippingAddress?: string; // Added for COD
  status: "menunggu_verifikasi" | "diproses" | "menunggu_diambil" | "menunggu_pengiriman" | "dikirim" | "selesai";
  createdAt: string;
}

export interface CheckoutDetails {
  customerName: string;
  customerWhatsApp: string;
  shippingAddress?: string;
  notes?: string;
  paymentMethod?: Order["paymentMethod"];
  paymentProof?: string;
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
  
  // Checkout flow state
  checkoutDetails: CheckoutDetails;
  updateCheckoutDetails: (details: Partial<CheckoutDetails>) => void;
  clearCheckoutDetails: () => void;
  
  // Order actions
  checkout: (customerName: string, customerWhatsApp: string, paymentMethod: Order["paymentMethod"], paymentProof?: string, notes?: string, shippingAddress?: string) => Order | null;
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

// Seed Data moved to respective demo folders

// --- Context ---

const StoreContext = createContext<StoreContextType | null>(null);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
};

export const StoreProvider = ({ 
  children, 
  storeId, 
  seedProducts, 
  seedOrders 
}: { 
  children: React.ReactNode;
  storeId: string;
  seedProducts: Product[];
  seedOrders: Order[];
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState<CheckoutDetails>({
    customerName: "",
    customerWhatsApp: ""
  });

  // Load from localStorage on mount
  useEffect(() => {
    const loadState = () => {
      const storedProducts = localStorage.getItem(`${storeId}_products`);
      const storedCart = localStorage.getItem(`${storeId}_cart`);
      const storedOrders = localStorage.getItem(`${storeId}_orders`);
      const storedAuth = localStorage.getItem(`${storeId}_admin_auth`);

      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      } else {
        setProducts(seedProducts);
        localStorage.setItem(`${storeId}_products`, JSON.stringify(seedProducts));
      }

      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      } else {
        setOrders(seedOrders);
        localStorage.setItem(`${storeId}_orders`, JSON.stringify(seedOrders));
      }

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        const migratedCart = parsedCart.map((item: any) => ({
          ...item,
          cartItemId: item.cartItemId || Math.random().toString(36).substring(7)
        }));
        setCart(migratedCart);
      }
      
      const storedCheckout = localStorage.getItem(`${storeId}_checkout`);
      if (storedCheckout) {
        setCheckoutDetails(JSON.parse(storedCheckout));
      }

      if (storedAuth) setIsAdminLoggedIn(JSON.parse(storedAuth));
      
      setIsLoaded(true);
    };

    loadState();
  }, [storeId, seedProducts, seedOrders]);

  // Save to localStorage when state changes
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(`${storeId}_products`, JSON.stringify(products));
    localStorage.setItem(`${storeId}_cart`, JSON.stringify(cart));
    localStorage.setItem(`${storeId}_orders`, JSON.stringify(orders));
    localStorage.setItem(`${storeId}_admin_auth`, JSON.stringify(isAdminLoggedIn));
    localStorage.setItem(`${storeId}_checkout`, JSON.stringify(checkoutDetails));
  }, [products, cart, orders, isAdminLoggedIn, checkoutDetails, isLoaded, storeId]);

  // --- Cart Methods ---
  const addToCart = (productId: string, quantity = 1, options?: string[], optionPrice = 0, selectedSize?: string) => {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock < quantity) return; // Prevent adding if out of stock

    setCart(prev => {
      const optionsStr = options ? JSON.stringify(options) : "";
      const existing = prev.find(item => 
        item.productId === productId && 
        (item.options ? JSON.stringify(item.options) : "") === optionsStr &&
        item.selectedSize === selectedSize
      );
      
      if (existing) {
        if (existing.quantity + quantity > product.stock) return prev;
        return prev.map(item => item.cartItemId === existing.cartItemId 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
        );
      }
      
      const cartItemId = Math.random().toString(36).substring(7);
      return [...prev, { cartItemId, productId, quantity, options, optionPrice, selectedSize }];
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
  const checkout = (customerName: string, customerWhatsApp: string, paymentMethod: Order["paymentMethod"], paymentProof?: string, notes?: string, shippingAddress?: string) => {
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
          price: product.price,
          quantity: cartItem.quantity,
          options: cartItem.options,
          optionPrice: cartItem.optionPrice,
          selectedSize: cartItem.selectedSize
        });
        totalAmount += itemPrice * cartItem.quantity;
      }
    }

    // Determine initial status based on payment method
    let initialStatus: Order["status"] = "menunggu_verifikasi"; // Default for transfer
    if (paymentMethod === "qris") initialStatus = "diproses";
    if (paymentMethod === "cash") initialStatus = "menunggu_diambil";
    if (paymentMethod === "cod") initialStatus = "menunggu_pengiriman";

    const newOrder: Order = {
      id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      customerWhatsApp,
      notes,
      items: orderItems,
      totalAmount,
      paymentMethod,
      paymentProof,
      shippingAddress,
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

  const updateCheckoutDetails = (details: Partial<CheckoutDetails>) => {
    setCheckoutDetails(prev => ({ ...prev, ...details }));
  };

  const clearCheckoutDetails = () => {
    setCheckoutDetails({ customerName: "", customerWhatsApp: "" });
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
    setProducts(seedProducts);
    setOrders(seedOrders);
    setCart([]);
    setIsAdminLoggedIn(false);
    localStorage.clear();
  };

  // Don't render children until hydration is complete to prevent mismatch
  if (!isLoaded) return <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center font-bold text-amber-900">Memuat data demo...</div>;

  return (
    <StoreContext.Provider value={{
      products,
      cart,
      orders,
      isAdminLoggedIn,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      getCartTotal,
      checkoutDetails,
      updateCheckoutDetails,
      clearCheckoutDetails,
      checkout,
      updateOrderStatus,
      addProduct, updateProduct, deleteProduct,
      loginAdmin, logoutAdmin, resetDemoData
    }}>
      {children}
    </StoreContext.Provider>
  );
};
