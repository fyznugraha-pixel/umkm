import { Product, Order } from "@/components/demo/StoreContext";

export const SEED_PRODUCTS: Product[] = [
  { id: "p1", name: "Es Kopi Semesta", price: 25000, description: "Kopi susu gula aren signature kami dengan espresso house blend.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600", stock: 15, category: "Kopi" },
  { id: "p2", name: "Latte Art", price: 30000, description: "Espresso dengan steamed milk yang lembut.", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600", stock: 10, category: "Kopi" },
  { id: "p3", name: "Manual Brew V60", price: 35000, description: "Kopi filter dengan pilihan biji single origin nusantara.", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600", stock: 8, category: "Kopi" },
  { id: "p4", name: "Matcha Latte", price: 32000, description: "Premium Uji Matcha dipadukan dengan fresh milk.", image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=600", stock: 12, category: "Non-Kopi" },
  { id: "p5", name: "Artisan Tea", price: 25000, description: "Pilihan teh artisan dengan aroma menenangkan.", image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=600", stock: 20, category: "Non-Kopi" },
  { id: "p6", name: "Kue Coklat Lumer", price: 18000, description: "Brownies panggang dengan coklat lumer di dalam.", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600", stock: 5, category: "Snack" },
  { id: "p7", name: "Croissant Butter", price: 20000, description: "Classic french pastry yang renyah di luar.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600", stock: 0, category: "Snack" }, // Stok habis contoh
];

export const SEED_ORDERS: Order[] = [
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
