import { Phone, MapPin, Clock, Scissors, ShieldCheck, SprayCan } from "lucide-react";

export const businessData = {
  name: "RAPI Barbershop",
  tagline: "Gaya Rambut Premium, Harga Bersahabat",
  description: "Barbershop modern dengan layanan profesional untuk tampilan maksimal Anda. Berpengalaman lebih dari 5 tahun melayani pria-pria di kota ini.",
  heroImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1600",
  contacts: {
    whatsapp: "6281234567890",
    instagram: "@rapibarbershop",
    address: "Jl. Gaya Pria No. 99, Jakarta Selatan",
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24056262174!2d106.74479901463993!3d-6.229746487915573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1709628045095!5m2!1sid!2sid"
  },
  hours: [
    { day: "Senin - Jumat", time: "10:00 - 21:00" },
    { day: "Sabtu - Minggu", time: "09:00 - 22:00" }
  ],
  features: [
    { icon: Scissors, title: "Capster Profesional", desc: "Berpengalaman dan tersertifikasi" },
    { icon: ShieldCheck, title: "Peralatan Steril", desc: "Kebersihan alat terjamin" },
    { icon: SprayCan, title: "Pomade Premium", desc: "Menggunakan produk berkualitas" },
    { icon: Clock, title: "Tepat Waktu", desc: "Tanpa antre lama" }
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800", caption: "High Fade Pompadour" },
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800", caption: "Classic Trim & Style" },
    { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800", caption: "Gentleman Shave" },
    { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", caption: "Beard Trim & Shape" },
    { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800", caption: "Premium Station" },
    { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800", caption: "Skin Fade Cut" },
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800", caption: "Hair Treatment" },
    { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800", caption: "Precision Detailing" },
    { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", caption: "Hot Towel Shave" },
  ],
  testimonials: [
    {
      name: "Budi Santoso",
      role: "Pelanggan Setia",
      avatar: "https://i.pravatar.cc/150?u=budi",
      comment: "Sudah 2 tahun langganan di sini. Capsternya asik diajak ngobrol dan hasil potongannya selalu sesuai ekspektasi. Tempatnya juga bersih dan nyaman.",
      rating: 5,
    },
    {
      name: "Andi Wijaya",
      role: "First-time Customer",
      avatar: "https://i.pravatar.cc/150?u=andi",
      comment: "Baru pertama kali coba karena rekomendasi teman. Pelayanannya juara! Handuk hangatnya bikin rileks banget setelah seharian kerja.",
      rating: 5,
    },
    {
      name: "Reza Rahadian",
      role: "Mahasiswa",
      avatar: "https://i.pravatar.cc/150?u=reza",
      comment: "Harga bersahabat buat kantong mahasiswa tapi kualitas potongannya setara barbershop mahal di mall. Mantap RAPI!",
      rating: 4,
    }
  ],
  faqs: [
    {
      question: "Apakah harus booking dulu?",
      answer: "Sangat disarankan untuk booking melalui website ini agar Anda tidak perlu mengantre lama. Namun kami juga menerima walk-in (datang langsung) jika kebetulan ada slot kosong."
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer: "Kami menerima pembayaran tunai (cash) di tempat, transfer bank (BCA, Mandiri), dan QRIS (Gopay, OVO, Dana, LinkAja, dll)."
    },
    {
      question: "Apakah melayani potong rambut anak?",
      answer: "Ya, kami melayani potong rambut untuk anak usia di bawah 12 tahun dengan harga khusus (Kids Cut)."
    },
    {
      question: "Produk pomade apa yang digunakan?",
      answer: "Kami menggunakan berbagai brand pomade lokal dan internasional berkualitas. Anda juga bisa membeli pomade tersebut untuk perawatan di rumah."
    }
  ]
};
