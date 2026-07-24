import { Product, Order } from "@/components/demo/StoreContext";

export const SEED_PRODUCTS: Product[] = [
  {
    id: "rr-1",
    name: "Classic Oxford Shirt",
    category: "Atasan",
    price: 349000,
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f6b717?auto=format&fit=crop&q=80&w=600",
    stock: 12,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "rr-2",
    name: "Selvedge Denim Jacket",
    category: "Luaran",
    price: 699000,
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ea?auto=format&fit=crop&q=80&w=600",
    stock: 5,
    sizes: ["M", "L"]
  },
  {
    id: "rr-3",
    name: "Signature Pleated Trousers",
    category: "Bawahan",
    price: 459000,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600",
    stock: 8,
    sizes: ["28", "30", "32", "34"]
  },
  {
    id: "rr-4",
    name: "Minimalist Leather Totebag",
    category: "Aksesoris",
    price: 899000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600",
    stock: 3
  }
];

export const SEED_ORDERS: Order[] = [
  {
    id: "RR-5231",
    customerName: "Rina Gunawan",
    customerWhatsApp: "081234567890",
    items: [
      { productId: "rr-1", name: "Classic Oxford Shirt", price: 349000, quantity: 1, selectedSize: "M" }
    ],
    totalAmount: 349000,
    paymentMethod: "transfer",
    status: "menunggu_verifikasi",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    shippingAddress: "Jl. Sudirman No. 45, RT 01/02, Jakarta Selatan, 12190"
  },
  {
    id: "RR-5232",
    customerName: "Doni Pratama",
    customerWhatsApp: "081987654321",
    items: [
      { productId: "rr-2", name: "Selvedge Denim Jacket", price: 699000, quantity: 1, selectedSize: "L" },
      { productId: "rr-3", name: "Signature Pleated Trousers", price: 459000, quantity: 1, selectedSize: "32" }
    ],
    totalAmount: 1158000,
    paymentMethod: "cod",
    status: "menunggu_pengiriman",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    shippingAddress: "Perumahan Indah Asri Blok C2, Bandung, 40123",
    notes: "Tolong kirim sebelum jam 5 sore"
  }
];
