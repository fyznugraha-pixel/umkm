export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discountNote?: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  waMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "mini",
    name: "Mini Landing Page",
    price: "Rp 350K",
    originalPrice: "Rp 550K",
    discountNote: "Diskon 36% (5 Klien Pertama)",
    description: "Cocok untuk validasi ide atau jualan 1 produk khusus.",
    features: [
      { name: "1 Halaman Website", included: true },
      { name: "Profil Usaha dan Produk", included: true },
      { name: "info Contact (Wa & IG)", included: true },
      { name: "Google Maps Usaha", included: true },
      { name: "Responsive (HP & Laptop)", included: true },
      { name: "Deploy (Subdomain gratis)", included: true },
    ],
    ctaText: "Pilih Paket Mini",
    waMessage: "Halo, saya tertarik dengan paket Mini Landing Page (Rp 350K).",
  },
  {
    id: "basic",
    name: "Basic UMKM Website",
    price: "Rp 600K - 1.2JT",
    description: "Situs company profile lengkap untuk membangun kredibilitas bisnis.",
    isPopular: true,
    features: [
      { name: "1 Halaman Website", included: true },
      { name: "5-7 Section Lebih Lengkap", included: true },
      { name: "Profil Usaha", included: true },
      { name: "Info Produk / Jasa", included: true },
      { name: "Galeri / Testimoni", included: true },
      { name: "Lokasi (Google Maps)", included: true },
      { name: "Contact Info", included: true },
      { name: "SEO Basic", included: true },
    ],
    ctaText: "Pilih Paket Basic",
    waMessage: "Halo, saya tertarik dengan paket Basic UMKM Website. Bisa diskusi lebih lanjut?",
  },
  {
    id: "full",
    name: "Full Katalog / Toko",
    price: "Mulai dari Rp 1.5JT",
    description: "Solusi lengkap untuk menampilkan banyak produk dan menerima order.",
    features: [
      { name: "Halaman Katalog Produk", included: true },
      { name: "Kategori Produk", included: true },
      { name: "Detail Produk", included: true },
      { name: "Bisa Order", included: true },
      { name: "Admin Dashboard", included: true },
      { name: "Info Data Penjualan", included: true },
      { name: "Galeri / Testimoni", included: true },
      { name: "Include Domain Custom", included: true },
    ],
    ctaText: "Pilih Paket Full",
    waMessage: "Halo, saya butuh website Full Katalog untuk bisnis saya. Bagaimana prosesnya?",
  },
];

export const addOns = [
  { name: "Tambah Halaman", price: "Rp 150.000 - 300.000 / halaman" },
  { name: "Maintenance Bulanan", price: "Rp 100.000 - 400.000 / bulan" },
  { name: "Form Custom Order / Booking", price: "Rp 200.000" },
  { name: "Tambah Produk Katalog", price: "Rp 100.000" },
  { name: "Update Konten", price: "Rp 50.000" },
  { name: "Domain Custom (nama usaha.id)", price: "Rp 300.000 / Tahun" },
];
