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

export const getPricingPlans = (lang: 'id' | 'en'): PricingPlan[] => {
  const isEn = lang === 'en';
  return [
    {
      id: "mini",
      name: isEn ? "Mini Landing Page" : "Mini Landing Page",
      price: "Rp 350K",
      originalPrice: "Rp 550K",
      discountNote: isEn ? "36% Off (First 5 Clients)" : "Diskon 36% (5 Klien Pertama)",
      description: isEn ? "Perfect for validating ideas or selling a specific product." : "Cocok untuk validasi ide atau jualan 1 produk khusus.",
      features: [
        { name: isEn ? "1 Website Page" : "1 Halaman Website", included: true },
        { name: isEn ? "Business & Product Profile" : "Profil Usaha dan Produk", included: true },
        { name: isEn ? "Contact Info (WA & IG)" : "info Contact (Wa & IG)", included: true },
        { name: isEn ? "Google Maps Location" : "Google Maps Usaha", included: true },
        { name: isEn ? "Responsive (Mobile & Desktop)" : "Responsive (HP & Laptop)", included: true },
        { name: isEn ? "Deployment (Free Subdomain)" : "Deploy (Subdomain gratis)", included: true },
      ],
      ctaText: isEn ? "Choose Mini Plan" : "Pilih Paket Mini",
      waMessage: isEn ? "Hi, I'm interested in the Mini Landing Page plan (Rp 350K)." : "Halo, saya tertarik dengan paket Mini Landing Page (Rp 350K).",
    },
    {
      id: "basic",
      name: isEn ? "Basic SME Website" : "Basic UMKM Website",
      price: "Rp 600K - 1.2JT",
      description: isEn ? "Complete company profile site to build business credibility." : "Situs company profile lengkap untuk membangun kredibilitas bisnis.",
      isPopular: true,
      features: [
        { name: isEn ? "1 Website Page" : "1 Halaman Website", included: true },
        { name: isEn ? "5-7 Detailed Sections" : "5-7 Section Lebih Lengkap", included: true },
        { name: isEn ? "Business Profile" : "Profil Usaha", included: true },
        { name: isEn ? "Product / Service Info" : "Info Produk / Jasa", included: true },
        { name: isEn ? "Gallery / Testimonials" : "Galeri / Testimoni", included: true },
        { name: isEn ? "Location (Google Maps)" : "Lokasi (Google Maps)", included: true },
        { name: isEn ? "Contact Info" : "Contact Info", included: true },
        { name: isEn ? "Basic SEO" : "SEO Basic", included: true },
      ],
      ctaText: isEn ? "Choose Basic Plan" : "Pilih Paket Basic",
      waMessage: isEn ? "Hi, I'm interested in the Basic SME Website plan. Can we discuss further?" : "Halo, saya tertarik dengan paket Basic UMKM Website. Bisa diskusi lebih lanjut?",
    },
    {
      id: "full",
      name: isEn ? "Full Catalog / Store" : "Full Katalog / Toko",
      price: isEn ? "Starting from Rp 1.5JT" : "Mulai dari Rp 1.5JT",
      description: isEn ? "Complete solution to display many products and receive orders." : "Solusi lengkap untuk menampilkan banyak produk dan menerima order.",
      features: [
        { name: isEn ? "Product Catalog Page" : "Halaman Katalog Produk", included: true },
        { name: isEn ? "Product Categories" : "Kategori Produk", included: true },
        { name: isEn ? "Product Details" : "Detail Produk", included: true },
        { name: isEn ? "Order Capability" : "Bisa Order", included: true },
        { name: isEn ? "Admin Dashboard" : "Admin Dashboard", included: true },
        { name: isEn ? "Bluetooth Receipt Printing" : "Cetak Struk Bluetooth", included: true },
        { name: isEn ? "Sales Data Info" : "Info Data Penjualan", included: true },
        { name: isEn ? "Gallery / Testimonials" : "Galeri / Testimoni", included: true },
        { name: isEn ? "Custom Domain Included" : "Include Domain Custom", included: true },
      ],
      ctaText: isEn ? "Choose Full Plan" : "Pilih Paket Full",
      waMessage: isEn ? "Hi, I need a Full Catalog website for my business. What's the process?" : "Halo, saya butuh website Full Katalog untuk bisnis saya. Bagaimana prosesnya?",
    },
  ];
};

export const getAddOns = (lang: 'id' | 'en') => {
  const isEn = lang === 'en';
  return [
    { name: isEn ? "Additional Page" : "Tambah Halaman", price: isEn ? "Rp 150.000 - 300.000 / page" : "Rp 150.000 - 300.000 / halaman" },
    { name: isEn ? "Monthly Maintenance" : "Maintenance Bulanan", price: isEn ? "Rp 100.000 - 400.000 / month" : "Rp 100.000 - 400.000 / bulan" },
    { name: isEn ? "Custom Order / Booking Form" : "Form Custom Order / Booking", price: "Rp 200.000" },
    { name: isEn ? "Add Catalog Product" : "Tambah Produk Katalog", price: "Rp 100.000" },
    { name: isEn ? "Content Update" : "Update Konten", price: "Rp 50.000" },
    { name: isEn ? "Custom Domain (yourbusiness.id)" : "Domain Custom (nama usaha.id)", price: isEn ? "Rp 300.000 / Year" : "Rp 300.000 / Tahun" },
  ];
};
