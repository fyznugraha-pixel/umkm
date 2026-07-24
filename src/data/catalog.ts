export interface CatalogEntry {
  slug: string;
  businessName: string;
  packageType: "Mini Landing Page" | "Basic" | "Full Katalog";
  packagePrice: string;
  category: string;
  thumbnail: string;
  description: string;
  comparisonGroup?: string;
}

export const catalogData: CatalogEntry[] = [
  {
    slug: "kopi-semesta",
    businessName: "Kopi Semesta",
    packageType: "Mini Landing Page",
    packagePrice: "Rp 350K",
    category: "Kuliner",
    comparisonGroup: "kopi-semesta",
    // TODO: Ganti dengan screenshot asli setelah deploy web demo kopi-semesta
    thumbnail: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    description: "Landing page kedai kopi lokal yang cocok untuk UMKM F&B yang butuh presence online cepat",
  },
  {
    slug: "kopi-semesta-basic",
    businessName: "Kopi Semesta (Versi Lengkap)",
    packageType: "Basic",
    packagePrice: "Rp 600K - 1.2JT",
    category: "Kuliner",
    comparisonGroup: "kopi-semesta",
    // TODO: Ganti dengan screenshot asli setelah deploy web demo kopi-semesta-basic
    thumbnail: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
    description: "Versi lengkap dari Kopi Semesta dengan galeri suasana, testimoni pelanggan, dan menu terstruktur",
  },
  {
    slug: "kopi-semesta-full",
    businessName: "Kopi Semesta (Full Katalog)",
    packageType: "Full Katalog",
    packagePrice: "Mulai dari Rp 1.5JT",
    category: "Kuliner",
    comparisonGroup: "kopi-semesta",
    thumbnail: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800",
    description: "Versi paling lengkap dari Kopi Semesta — dengan sistem order online dan admin dashboard untuk kelola produk & penjualan",
  },
  {
    slug: "ruang-rupa",
    businessName: "Ruang & Rupa",
    packageType: "Mini Landing Page",
    packagePrice: "Rp 350K",
    category: "Fashion",
    comparisonGroup: "ruang-rupa",
    // TODO: Ganti dengan screenshot asli setelah deploy web demo ruang-rupa
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    description: "Landing page brand fashion lokal yang cocok untuk UMKM retail pakaian/aksesoris yang butuh presence online cepat",
  },
  {
    slug: "ruang-rupa-basic",
    businessName: "Ruang & Rupa (Versi Lengkap)",
    packageType: "Basic",
    packagePrice: "Rp 600K - 1.2JT",
    category: "Fashion",
    comparisonGroup: "ruang-rupa",
    // TODO: Ganti dengan screenshot asli setelah deploy web demo ruang-rupa-basic
    thumbnail: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    description: "Versi lengkap dari Ruang & Rupa — dengan lookbook, testimoni pelanggan, dan koleksi produk lebih lengkap",
  },
  {
    slug: "rapi-barbershop",
    businessName: "RAPI Barbershop",
    packageType: "Mini Landing Page",
    packagePrice: "Rp 350K",
    category: "Jasa",
    comparisonGroup: "rapi-barbershop",
    // TODO: Ganti dengan screenshot asli setelah deploy web demo rapi-barbershop
    thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    description: "Landing page barbershop lokal yang cocok untuk UMKM jasa yang butuh booking cepat via WhatsApp",
  },
  {
    slug: "rapi-barbershop-basic",
    businessName: "RAPI Barbershop (Versi Lengkap)",
    packageType: "Basic",
    packagePrice: "Rp 600K - 1.2JT",
    category: "Jasa",
    comparisonGroup: "rapi-barbershop",
    // TODO: Ganti dengan screenshot asli setelah deploy web demo rapi-barbershop-basic
    thumbnail: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
    description: "Versi lengkap dari RAPI Barbershop — dengan galeri hasil potong, testimoni pelanggan, dan daftar layanan lebih lengkap",
  }
];
