# Final Component Audit

Dokumen ini merupakan referensi final untuk developer (sebagai panduan *production-ready*). Komponen-komponen UI di bawah ini telah berhasil melewati *stress-test* lintas 3 industri yang berbeda (F&B / Kuliner, Retail / Fashion, Jasa / Barbershop) dan terbukti sangat *scalable*.

## 1. ItemCard (Alias: ServiceCard / MenuCard)
Komponen ini sangat serbaguna untuk menampilkan produk (makanan/baju) maupun layanan jasa (potong rambut).

### Props:
```typescript
interface ItemCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  duration?: string; // Khusus Jasa (contoh: "45 Menit")
  aspectRatio?: "square" | "portrait"; // "square" untuk F&B/Jasa, "portrait" (4:5) untuk Fashion
  theme?: "coffee" | "fashion" | "barber"; // Menentukan warna, font, dan corner-radius
  ctaText?: string;
  ctaLink?: string;
}
```
### Bukti Skalabilitas:
- **Kopi Semesta (`coffee`)**: Sudut membulat (*rounded-2xl*), warna *warm/earthy*, foto makanan *square*.
- **Ruang & Rupa (`fashion`)**: Sudut siku tajam (*rounded-none*), warna monokrom *bold*, foto *lookbook portrait*.
- **RAPI Barbershop (`barber`)**: Tema *dark mode* (hitam solid + *dark gray*), aksen merah menyala, border *subtle*, dan bisa menampilkan info durasi layanan di samping harga.

---

## 2. GalleryGrid
Berfungsi untuk membangun galeri estetik asimetris (*masonry-like*) tanpa menggunakan *library* berat eksternal, hanya murni CSS Grid.

### Props:
```typescript
type GalleryImage = string | { src: string; caption?: string };

interface GalleryGridProps {
  images: GalleryImage[];
  aspectRatio?: "portrait" | "landscape" | "square" | "mixed"; // Mengubah orientasi grid
  theme?: "coffee" | "fashion" | "barber"; // Menyesuaikan efek hover dan border
}
```
### Bukti Skalabilitas:
- **Kopi Semesta (`mixed`, `coffee`)**: Grid 3-kolom asimetris untuk menonjolkan foto interior kedai (*landscape/square*).
- **Ruang & Rupa (`portrait`, `fashion`)**: Grid 4-kolom memanjang ke bawah untuk menyesuaikan bentuk model berfoto (4:5) agar tidak terpotong. Pinggiran tegas, *hover grayscale-to-color*.
- **RAPI Barbershop (`portrait`, `barber`)**: Menggunakan Union Type (Array of Objects) untuk mendukung penampilan **Caption** (seperti "Fade Cut") di atas *dark overlay gradient* setiap kali di-*hover* (atau permanen di *mobile*).

---

## 3. TestimonialCard
Komponen *social-proof* untuk memaparkan ulasan pelanggan.

### Props:
```typescript
interface TestimonialCardProps {
  name: string;
  avatar: string;
  comment: string;
  rating?: number; // Jumlah bintang (default: 5)
  role?: string; // Pekerjaan / status pelanggan
  theme?: "coffee" | "fashion" | "barber";
}
```
### Bukti Skalabilitas:
- **Kopi Semesta (`coffee`)**: Estetika hangat, *border* krem lembut, avatar membulat.
- **Ruang & Rupa (`fashion`)**: Monokrom industrial, bintang berwarna *rust*, teks tipis elegan, avatar dipaksa menjadi *grayscale* (hitam putih) untuk menyatu dengan identitas visual.
- **RAPI Barbershop (`barber`)**: Mode super *dark* dengan siluet *shadow* tegas, garis pembatas abu-abu tua, teks kontras tinggi (putih), bintang menyala merah (*electric red*).

---

## 4. Sistem Order (Katalog / Toko Online)
Kumpulan komponen khusus untuk menangani interaksi keranjang belanja dan siklus *checkout* pesanan. Komponen ini dirancang independen dari *backend* dengan memanfaatkan `StoreContext` dan `localStorage`.

### 4.1 PaymentMethodSelector
Komponen interaktif untuk mensimulasikan alur pembayaran yang bercabang (Transfer, QRIS, Cash).

#### Props:
```typescript
type PaymentMethod = "transfer" | "qris" | "cash";

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod | null;
  onSelectMethod: (method: PaymentMethod) => void;
  onProofUploaded: (base64: string) => void;
  onQrisVerified: (isVerified: boolean) => void;
  theme?: "coffee" | "fashion" | "barber";
}
```
**Fungsi Kunci:**
- **Transfer Bank**: Merender UI form *upload* gambar lokal (mengubah *file* ke format *base64 string* via `FileReader`).
- **QRIS**: Menyediakan tombol "Saya Sudah Bayar" dengan efek *loading spinner* tersimulasi (`setTimeout`) untuk UX *dummy verification*.
- **Cash**: Menampilkan instruksi pesan simpel untuk metode pembayaran di kasir (*dine-in / takeaway*).

### 4.2 CartDrawer
Merupakan komponen pembungkus berbentuk *sidebar/drawer* yang muncul dari samping layar. 

- **State Cart**: Menampilkan keranjang belanja dengan kontrol kuantitas (+ / -).
- **Checkout Form**: Jika berlanjut ke tahap pembayaran, komponen beralih *view* untuk menampilkan form identitas pelanggan (Nama, WA, Catatan) dan menyematkan `<PaymentMethodSelector>`.
- **Validation**: Mencegah *submit* jika `paymentProof` (bukti transfer) kosong atau jika simulasi `isQrisVerified` belum diselesaikan.

### 4.3 OrdersTable & SalesSummary (Bagian dari AdminDashboard)
Admin Dashboard telah diperkaya untuk menangani *conditional logic* berbasis `paymentMethod`.
- **Branching Action**: Tombol konfirmasi berbeda-beda (Upload -> *Verifikasi Pembayaran*, Cash -> *Tandai Diambil & Dibayar*).
- **Revenue Logic**: Kalkulasi `totalRevenue` secara pintar mengecualikan pesanan berstatus `menunggu_verifikasi` untuk mencegah perhitungan pendapatan palsu sebelum di-acc.

