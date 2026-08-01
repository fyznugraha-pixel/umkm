export interface CatalogEntry {
  slug: string;
  businessName: string;
  packageType: "Mini Landing Page" | "Basic" | "Full Katalog";
  packagePrice: string;
  category: string;
  thumbnail: string;
  description: string;
  comparisonGroup?: string;
  originalPrice?: string;
  discountNote?: string;
}

export const getCatalogData = (lang: 'id' | 'en'): CatalogEntry[] => {
  const isEn = lang === 'en';
  return [
    {
      slug: "kopi-semesta",
      businessName: "Kopi Semesta",
      packageType: "Mini Landing Page",
      packagePrice: "Rp 350K",
      originalPrice: "Rp 550K",
      discountNote: isEn ? "36% Off" : "Diskon 36%",
      category: "Kuliner",
      comparisonGroup: "kopi-semesta",
      thumbnail: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Local coffee shop landing page ideal for F&B businesses needing a fast online presence." 
        : "Landing page kedai kopi lokal yang cocok untuk UMKM F&B yang butuh presence online cepat",
    },
    {
      slug: "kopi-semesta-basic",
      businessName: isEn ? "Kopi Semesta (Basic)" : "Kopi Semesta (Versi Lengkap)",
      packageType: "Basic",
      packagePrice: "Rp 600K - 1.2JT",
      category: "Kuliner",
      comparisonGroup: "kopi-semesta",
      thumbnail: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Complete version with ambiance gallery, customer testimonials, and structured menu." 
        : "Versi lengkap dari Kopi Semesta dengan galeri suasana, testimoni pelanggan, dan menu terstruktur",
    },
    {
      slug: "kopi-semesta-full",
      businessName: "Kopi Semesta (Full Katalog)",
      packageType: "Full Katalog",
      packagePrice: isEn ? "Starting from Rp 1.5JT" : "Mulai dari Rp 1.5JT",
      category: "Kuliner",
      comparisonGroup: "kopi-semesta",
      thumbnail: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "The most complete version with an online ordering system and an admin dashboard to manage products & sales." 
        : "Versi paling lengkap dari Kopi Semesta dengan sistem order online dan admin dashboard untuk kelola produk & penjualan",
    },
    {
      slug: "ruang-rupa",
      businessName: "Ruang & Rupa",
      packageType: "Mini Landing Page",
      packagePrice: "Rp 350K",
      originalPrice: "Rp 550K",
      discountNote: isEn ? "36% Off" : "Diskon 36%",
      category: "Fashion",
      comparisonGroup: "ruang-rupa",
      thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Local fashion brand landing page suitable for retail SMEs needing a quick online presence." 
        : "Landing page brand fashion lokal yang cocok untuk UMKM retail pakaian/aksesoris yang butuh presence online cepat",
    },
    {
      slug: "ruang-rupa-basic",
      businessName: isEn ? "Ruang & Rupa (Basic)" : "Ruang & Rupa (Versi Lengkap)",
      packageType: "Basic",
      packagePrice: "Rp 600K - 1.2JT",
      category: "Fashion",
      comparisonGroup: "ruang-rupa",
      thumbnail: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Complete version featuring a lookbook, testimonials, and a comprehensive product collection." 
        : "Versi lengkap dari Ruang & Rupa dengan lookbook, testimoni pelanggan, dan koleksi produk lebih lengkap",
    },
    {
      slug: "ruang-rupa-full",
      businessName: "Ruang & Rupa (Full Katalog)",
      packageType: "Full Katalog",
      packagePrice: isEn ? "Starting from Rp 1.5JT" : "Mulai dari Rp 1.5JT",
      category: "Fashion",
      comparisonGroup: "ruang-rupa",
      thumbnail: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "The most complete version featuring online ordering and a dedicated admin dashboard for inventory management." 
        : "Versi paling lengkap dari Ruang & Rupa dengan sistem order online (mendukung COD/Transfer/QRIS) dan admin dashboard khusus untuk kelola stok pakaian",
    },
    {
      slug: "rapi-barbershop",
      businessName: "RAPI Barbershop",
      packageType: "Mini Landing Page",
      packagePrice: "Rp 350K",
      originalPrice: "Rp 550K",
      discountNote: isEn ? "36% Off" : "Diskon 36%",
      category: "Jasa",
      comparisonGroup: "rapi-barbershop",
      thumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Local barbershop landing page ideal for service SMEs requiring fast WhatsApp bookings." 
        : "Landing page barbershop lokal yang cocok untuk UMKM jasa yang butuh booking cepat via WhatsApp",
    },
    {
      slug: "rapi-barbershop-basic",
      businessName: isEn ? "RAPI Barbershop (Basic)" : "RAPI Barbershop (Versi Lengkap)",
      packageType: "Basic",
      packagePrice: "Rp 600K - 1.2JT",
      category: "Jasa",
      comparisonGroup: "rapi-barbershop",
      thumbnail: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Complete version featuring a haircut gallery, customer testimonials, and a full service list." 
        : "Versi lengkap dari RAPI Barbershop dengan galeri hasil potong, testimoni pelanggan, dan daftar layanan lebih lengkap",
    },
    {
      slug: "rapi-barbershop-full",
      businessName: "RAPI Barbershop (Full Katalog)",
      packageType: "Full Katalog",
      packagePrice: isEn ? "Starting from Rp 1.5JT" : "Mulai dari Rp 1.5JT",
      category: "Jasa",
      comparisonGroup: "rapi-barbershop",
      thumbnail: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "The most complete version featuring an interactive booking system and an admin dashboard to manage availability." 
        : "Versi paling lengkap dari RAPI Barbershop dengan sistem booking jadwal interaktif dan admin dashboard untuk atur ketersediaan capster",
    },
    {
      slug: "bersih-wangi-laundry",
      businessName: "Bersih & Wangi Laundry",
      packageType: "Mini Landing Page",
      packagePrice: "Rp 350K",
      originalPrice: "Rp 550K",
      discountNote: isEn ? "36% Off" : "Diskon 36%",
      category: "Jasa",
      comparisonGroup: "bersih-wangi-laundry",
      thumbnail: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Local laundry landing page perfect for service SMEs needing a fast online presence for per-kg pricing." 
        : "Landing page laundry kiloan lokal — cocok untuk UMKM jasa dengan sistem harga per-kilogram yang butuh presence online cepat",
    },
    {
      slug: "bersih-wangi-laundry-basic",
      businessName: isEn ? "Bersih & Wangi Laundry (Basic)" : "Bersih & Wangi Laundry (Versi Lengkap)",
      packageType: "Basic",
      packagePrice: "Rp 600K - 1.2JT",
      category: "Jasa",
      comparisonGroup: "bersih-wangi-laundry",
      thumbnail: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "Complete version featuring service galleries, customer testimonials, and a detailed service list." 
        : "Versi lengkap dari Bersih & Wangi Laundry — dengan galeri proses & hasil cuci, testimoni pelanggan, dan daftar layanan lebih detail",
    },
    {
      slug: "bersih-wangi-laundry-full",
      businessName: "Bersih & Wangi Laundry (Full Katalog)",
      packageType: "Full Katalog",
      packagePrice: isEn ? "Starting from Rp 1.5JT" : "Mulai dari Rp 1.5JT",
      category: "Jasa",
      comparisonGroup: "bersih-wangi-laundry",
      thumbnail: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800",
      description: isEn 
        ? "The most complete version featuring online drop-off, real-time tracking, and an admin dashboard." 
        : "Versi paling lengkap dari Bersih & Wangi Laundry — dengan sistem drop-off online, tracking status real-time, dan admin dashboard"
    }
  ];
};
