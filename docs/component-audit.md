# E-commerce Flow Design Tokens Standard

This document outlines the standard for designing and theming e-commerce/booking flow components (Cart, Checkout, Payment, Success) across all UMKM Demos.

**Goal:** Ensure that generic components (`PaymentMethodSelector`, `CartItem`, `OrderForm`) do not look like generic templates. Each brand must feel bespoke and tailor-made using specific design tokens.

## Token Structure

Components should accept a `designTokens` prop (or use a Context) following this interface:

```typescript
export interface OrderDesignTokens {
  // Container Styling
  radius: string;       // e.g., 'rounded-2xl', 'rounded-none', 'rounded-sm'
  shadow: string;       // e.g., 'shadow-xl shadow-amber-900/10', 'shadow-none border'
  surfaceBg: string;    // e.g., 'bg-white', 'bg-[#1A1A1A]'
  pageBg: string;       // e.g., 'bg-[#F5EFE6]', 'bg-[#FAFAFA]'
  
  // Interactions & Borders
  borderStyle: string;  // e.g., 'border-dashed border-2', 'border-solid border-[1px]'
  borderColor: string;  // e.g., 'border-[#E5D3B3]', 'border-gray-200'
  
  // Typography
  fontHeading: string;  // e.g., 'font-serif', 'font-sans font-black uppercase'
  fontBody: string;     // e.g., 'font-sans', 'font-light'
  
  // Colors
  primaryColor: string; // The main accent color (e.g., text/bg of primary buttons)
  textColor: string;    // The main text color (e.g., text-[#3D2B1F])
  
  // Visual Aesthetics
  iconStyle: "organic" | "outline" | "solid";
  
  // Microcopy (Tone of Voice)
  copyTone: {
    cartEmptyTitle: string;
    cartEmptyDesc: string;
    ctaCheckout: string;
    ctaPay: string;
    successTitle: string;
    successSubtitle: string;
  };
}
```

## Brand Implementations

### 1. Kopi Semesta (Warm, Cozy, Organic)
- **Vibe:** Receipt/POS, paper texture, welcoming cafe.
- **Radius:** Large (`rounded-2xl`, `rounded-3xl`)
- **Shadow:** Soft colored shadows (`shadow-xl shadow-amber-900/10`)
- **Border:** Dashed borders to mimic receipt tear-offs (`border-dashed border-2`)
- **Microcopy:** Friendly, conversational ("Pesan Sekarang, Yuk!", "Keranjang kamu kosong nih").
- **Icons:** Organic/soft if possible, or softly padded.

### 2. Ruang & Rupa (Editorial, Minimalist, Premium)
- **Vibe:** Lookbook, magazine, sharp, clean.
- **Radius:** None or small (`rounded-none`, `rounded-sm`)
- **Shadow:** Minimal to none, relies on thin borders (`shadow-none border border-gray-200`)
- **Border:** Thin solid lines (`border-[1px] border-gray-200`)
- **Microcopy:** Confident, brief ("Checkout", "Pesanan Dikonfirmasi").
- **Icons:** Thin outline, minimalist.
- **Typography:** Large bold pricing, high contrast monochrome.
- [x] Kopi Semesta (Basic UMKM Website) - `/demo/kopi-semesta-basic`
- [x] Ruang & Rupa (Mini Landing Page) - `/demo/ruang-rupa`
- [x] Ruang & Rupa (Basic UMKM Website) - `/demo/ruang-rupa-basic`
- [x] RAPI Barbershop (Mini Landing Page) - `/demo/rapi-barbershop`
- [x] RAPI Barbershop (Basic UMKM Website) - `/demo/rapi-barbershop-basic`
- [x] Bersih & Wangi Laundry (Mini Landing Page) - `/demo/bersih-wangi-laundry`
- [x] Bersih & Wangi Laundry (Basic UMKM Website) - `/demo/bersih-wangi-laundry-basic`

### 3. Rapi Barbershop (Masculine, Bold, Dark, Clean)
- **Vibe:** Barber schedule board, sharp tools, high contrast.
- **Radius:** Sharp (`rounded-sm` or `rounded-none`)
- **Shadow:** Heavy dark shadows or none (`shadow-2xl shadow-black/50`)
- **Surface:** Dark background (`bg-[#111111]`, `bg-[#1A1A1A]`)
- **Border:** Sharp borders (`border-[#333333]`)
- **Microcopy:** Actionable, direct ("Booking Sekarang", "Pilih Jadwal").
- **Icons:** Solid, geometric, bold accents (Electric blue/Red).

## Rule of Thumb for Developers
- **Never hardcode generic white cards** on dark-themed sites just because it's a checkout form.
- **Customize empty states** (Empty Cart, Empty Slots) to match the brand.
- **Loading states** should reflect the brand (e.g., snappy for barbershop, organic fade for coffee).
- Always test the checkout flow side-by-side to ensure visual distinction.

## Web Bluetooth & Hardware Integration

### Bluetooth Thermal Printer (BLE)
Fitur cetak struk via bluetooth diimplementasikan menggunakan Web Bluetooth API (`navigator.bluetooth`).

**Komponen Utama:**
- `hooks/usePrinterConnection.ts`: Mengelola siklus koneksi BLE (connect, disconnect, chunking transfer).
- `lib/escpos.ts`: Menggunakan `@point-of-sale/receipt-printer-encoder` untuk me-*render* data struk menjadi *raw byte arrays* ESC/POS.
- `config/printerConfig.ts`: Konfigurasi *hardware-dependent* (`serviceUUID`, `characteristicUUID`, `paperWidth`).

> **PENTING (HARDWARE DEPENDENT):**
> 1. Web Bluetooth API hanya didukung di **Chrome & Edge** (Desktop/Android). Safari dan iOS **tidak didukung**.
> 2. Printer harus menggunakan protokol BLE (Bluetooth Low Energy) GATT. Printer Classic Bluetooth SPP tidak bisa terkoneksi melalui browser.
> 3. Pengembang selanjutnya harus melakukan uji coba langsung ke fisik printer BLE (misal GOOJPRT dsb.) untuk memastikan UUID di `printerConfig.ts` sudah sesuai dengan spesifikasi *hardware* klien. Gunakan `printerContext.simulatePrint` untuk simulasi pada konsol saat *hardware* fisik belum tersedia.

## Final Section Ordering Rules (Basic Tier)

To avoid generic AI-slop layouts, each Basic Tier demo has a strictly enforced, bespoke section ordering that overrides standard conventions (Hero-Profil-Produk-Galeri-Testimoni-FAQ-Lokasi). Do not alter these sequences.

### 1. Kopi Semesta
1. Hero (compact)
2. Katalog Rasa / Menu
3. Tentang Semesta (shortened strip)
4. Sudut Semesta / Galeri
5. Mari Berkunjung / Lokasi
6. Kata Mereka / Testimoni (carousel style)
7. FAQ
8. Footer

### 2. Ruang & Rupa
1. Hero
2. Produk / Koleksi Terkini
3. Lookbook / Galeri (grid)
4. Tentang Kami (Manifesto)
5. Testimoni (Editorial quote)
6. FAQ
7. Lokasi (flagship store)
8. Footer

### 3. RAPI Barbershop
1. Hero
2. Testimoni (The Gentlemen's Review - Trust Layer immediately)
3. Galeri (Hall of Fades - Showcase before pricing)
4. Layanan & Harga Lengkap
5. Profil (Tradisi & Presisi - shortened)
6. FAQ
7. Lokasi
8. Footer

### 4. Bersih & Wangi Laundry
1. Hero
2. Kalkulator Harga (Interactive Widget)
3. Timeline Proses (Interactive flow)
4. Layanan / Paket
5. Testimoni
6. FAQ
7. Galeri
14. Lokasi
15. Footer

## Architecture Patterns: Commerce Flows

Penting untuk dicatat bahwa proyek ini sekarang mengimplementasikan 3 pola *commerce/booking flow* utama:

### 1. Direct Cart (Kopi Semesta, Ruang & Rupa)
- **Karakteristik:** Harga diketahui 100% di awal.
- **Alur:** Tambah ke Keranjang → Review Order → Pilih Pembayaran → Proses Pembayaran (Transfer/QRIS/COD) → Selesai.
- **Kapan Digunakan:** F&B, Retail Fashion, atau produk fisik dengan harga statis.

### 2. Time-Slot Booking (RAPI Barbershop)
- **Karakteristik:** Transaksi berbasis kalender dan *slot* ketersediaan, bukan inventaris barang.
- **Alur:** Pilih Layanan → Pilih Jadwal (Hari & Jam) → Konfirmasi Pemesan → Opsional Pembayaran (DP) / Bayar di Tempat → Selesai.
- **Kapan Digunakan:** Jasa potong rambut, klinik kecantikan, reservasi meja.

### 3. Delayed Pricing / Harga Tertunda (Bersih & Wangi Laundry)
- **Karakteristik:** Estimasi diberikan di awal, namun *harga final dikunci setelah ada campur tangan Admin* (misal: penimbangan aktual, diagnosis kerusakan).
- **Alur (2-Branch Architecture):**
  - *Sisi Pelanggan:* Isi Form Drop-off (Estimasi) → Terima Resi (e.g. LDY-001) → Tunggu.
  - *Sisi Admin:* Timbang Aktual di Konter → Masukkan Berat Aktual → Sistem Hitung Harga Final.
  - *Sisi Pelanggan (Lanjutan):* Cek Status Pesanan dengan Resi → Lihat Harga Final → Bayar via Portal Status → Selesai.
- **Kapan Digunakan:** Laundry Kiloan, Servis Elektronik, Reparasi Otomotif, Jasa Kustom.
