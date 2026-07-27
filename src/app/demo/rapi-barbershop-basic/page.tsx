import React from "react";
import { Metadata } from "next";
import { MessageCircle, MapPin, Clock, Scissors, CalendarCheck } from "lucide-react";
import ItemCard from "@/components/demo/ItemCard";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import GalleryGrid from "@/components/demo/GalleryGrid";
import TestimonialCard from "@/components/demo/TestimonialCard";
import AnchorNav from "@/components/demo/AnchorNav";
import StatusBadge from "@/components/demo/StatusBadge";
import RatingBadge from "@/components/demo/RatingBadge";
import ScrollReveal from "@/components/demo/ScrollReveal";
import FAQAccordion from "@/components/demo/FAQAccordion";
import { FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "RAPI Barbershop | Layanan Grooming & Portofolio",
  description: "Bukan sekadar potong rambut, ini tentang mengembalikan kepercayaan diri Anda. Lihat portofolio hasil potong dan pesan layanan premium grooming kami.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "RAPI Barbershop | Premium Grooming",
    description: "Mengembalikan versi terbaik dan kepercayaan diri Anda dengan layanan potong rambut premium.",
    type: "website",
  }
};

const DUMMY_WA = "6280000000000";

export default function RapiBarbershopBasicDemo() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-gray-300 font-sans selection:bg-[#E63946] selection:text-white pb-10">
      
      {/* BANNER COMPARISON */}
      <div className="bg-[#1A1A1A] border-b border-[#333333] text-gray-300 py-3 px-4 text-center text-sm font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-gray-500">Sedang melihat versi Basic UMKM Website.</span>
        <a href="/demo/rapi-barbershop" className="text-white underline hover:text-[#E63946] transition-colors">
          Lihat versi Mini Landing Page &rarr;
        </a>
      </div>

      <AnchorNav 
        theme="barber"
        sections={[
          { id: "hero", label: "Beranda" },
          { id: "testimoni", label: "Ulasan" },
          { id: "galeri", label: "Portofolio" },
          { id: "layanan", label: "Layanan" },
          { id: "profil", label: "Tradisi" },
          { id: "faq", label: "FAQ" },
          { id: "lokasi", label: "Lokasi" }
        ]} 
      />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#333333]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1600" 
            alt="Suasana RAPI Barbershop" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <ScrollReveal direction="down" className="mb-4">
            <RatingBadge rating={4.7} reviewCount={31} theme="barber" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#333333] text-gray-400 text-sm font-bold tracking-widest uppercase mb-6 rounded-sm">
              <Scissors size={14} /> Premium Grooming
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              RAPI <span className="text-[#E63946]">Barbershop</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
              Bukan sekadar potong rambut. Kami mengembalikan versi terbaik dan kepercayaan diri Anda.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${DUMMY_WA}?text=Halo%20RAPI%20Barbershop,%20saya%20mau%20booking%20jadwal`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#E63946] hover:bg-[#D90429] text-white font-black uppercase tracking-wider px-10 py-5 transition-transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
            >
              <CalendarCheck size={24} /> Booking via WhatsApp
            </a>
            <a 
              href="#layanan"
              className="bg-[#1A1A1A] hover:bg-[#222222] text-white border border-[#333333] font-black uppercase tracking-wider px-10 py-5 transition-transform hover:scale-105 flex items-center justify-center text-lg"
            >
              Lihat Semua Layanan
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. TESTIMONI (Trust Layer immediately after Hero) */}
      <section id="testimoni" className="py-24 px-6 max-w-7xl mx-auto border-b border-[#333333]">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">The <span className="text-[#E63946]">Gentlemen's</span> Review</h2>
          <p className="text-gray-400">Kepercayaan dari ribuan pelanggan yang telah membuktikan ketajaman pisau cukur kami.</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard 
            name="Raditya M." role="Karyawan Swasta" theme="barber" rating={5}
            avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
            comment="Hasil potongan fade-nya rapi banget, transisinya halus. Asli, ini barber terbaik di kota. Kapsternya ngerti banget bentuk muka."
          />
          <TestimonialCard 
            name="dr. Antonius" role="Dokter Gigi" theme="barber" rating={5}
            avatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
            comment="Tempatnya bersih, sterilisasi alatnya jalan, dan suasananya beneran santai. Hot towel shave-nya bikin fresh lagi setelah seharian praktek."
          />
          <TestimonialCard 
            name="Kevin Sanjaya" role="Mahasiswa" theme="barber" rating={4}
            avatar="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200"
            comment="Gue biasanya susah jelasin maunya potong kayak gimana. Tapi kapster disini jago ngasih referensi yang pas buat tipe rambut ikal gue."
          />
        </ScrollReveal>
      </section>

      {/* 3. GALERI HASIL KERJA (Showcase) */}
      <section id="galeri" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Hall of <span className="text-[#E63946]">Fades</span></h2>
            <p className="text-gray-400">Bukti nyata dari presisi kami. *Real cut, real gentleman.*</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <GalleryGrid 
              aspectRatio="portrait"
              theme="barber"
              images={[
                { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800", caption: "High Fade Pompadour" },
                { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800", caption: "Classic Trim & Style" },
                { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800", caption: "Gentleman Shave" },
                { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", caption: "Beard Trim & Shape" },
                { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800", caption: "Premium Station" },
                { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800", caption: "Skin Fade Cut" },
                { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800", caption: "Hair Treatment" },
                { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800", caption: "Precision Detailing" },
                { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", caption: "Hot Towel Shave" },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. LAYANAN & HARGA LENGKAP */}
      <section id="layanan" className="py-24 px-6 border-y border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Layanan <span className="text-[#E63946]">Lengkap</span></h2>
            <p className="text-gray-400 text-lg">Pilih perawatan yang paling sesuai dengan kebutuhan grooming Anda.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ItemCard 
              title="Premium Haircut" price="Rp 70.000" duration="45 Menit"
              description="Potong presisi, cuci air hangat, pijat ringan, dan styling pomade."
              image="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Premium%20Haircut`}
            />
            <ItemCard 
              title="Gentleman Shave" price="Rp 50.000" duration="30 Menit"
              description="Cukur kumis/jenggot tradisional menggunakan hot towel dan pisau presisi."
              image="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Gentleman%20Shave`}
            />
            <ItemCard 
              title="Full Grooming" price="Rp 150.000" duration="90 Menit"
              description="Haircut, Shaving, Hair Spa, pijat kepala/pundak, serta black mask."
              image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Full%20Grooming`}
            />
            <ItemCard 
              title="Kid's Haircut" price="Rp 50.000" duration="30 Menit"
              description="Potongan khusus anak-anak di bawah 12 tahun yang sabar dan aman."
              image="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Kid's%20Haircut`}
            />
            <ItemCard 
              title="Hair Coloring" price="Mulai Rp 180.000" duration="120+ Menit"
              description="Pewarnaan rambut (Bleach / Non-bleach) dengan produk profesional."
              image="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Hair%20Coloring`}
            />
            <ItemCard 
              title="Perm / Keriting" price="Mulai Rp 250.000" duration="150 Menit"
              description="Proses pengeritingan permanen pria bergaya Korean style atau klasik."
              image="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Perm`}
            />
            <ItemCard 
              title="Creambath" price="Rp 60.000" duration="45 Menit"
              description="Perawatan kulit kepala dengan cream nutrisi dan pijat relaksasi mendalam."
              image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Creambath`}
            />
            <ItemCard 
              title="Hair Tattoo" price="Mulai Rp 40.000" duration="15+ Menit"
              description="Ukiran pola artistik pada bagian rambut yang tipis (fade/undercut)."
              image="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600"
              aspectRatio="square" theme="barber" ctaText="Booking Layanan Ini"
              ctaLink={`https://wa.me/${DUMMY_WA}?text=Halo,%20booking%20Hair%20Tattoo`}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. PROFIL USAHA (LEBIH DETAIL & DIPERSINGKAT) */}
      <section id="profil" className="py-24 px-6 max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Tradisi & <span className="text-[#E63946]">Presisi</span></h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto mb-6"></div>
          <div className="mb-8">
            <StatusBadge theme="barber" schedule={[
              { days: [1, 2, 3, 4, 5], openHour: 10, closeHour: 21 },
              { days: [0, 6], openHour: 9, closeHour: 22 }
            ]} />
          </div>
          <p className="text-xl leading-relaxed text-gray-400 mb-8 font-light max-w-3xl mx-auto">
            Berdiri sejak 2018, RAPI Barbershop menggabungkan teknik pangkas klasik (*old-school barbering*) dengan gaya modern masa kini. Di sini, Anda bukan sekadar pelanggan, melainkan *gentleman* yang berhak mendapatkan perawatan terbaik.
          </p>
        </ScrollReveal>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Info <span className="text-[#E63946]">Grooming</span></h2>
          <p className="text-gray-400">Hal-hal yang sering ditanyakan mengenai layanan RAPI Barbershop.</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <FAQAccordion theme="barber" items={[
            {
              question: "Apakah wajib booking atau bisa walk-in?",
              answer: "Kami sangat menyarankan booking via WhatsApp untuk menghindari antrean panjang. Namun, kami juga melayani pelanggan walk-in selama masih ada slot kursi kosong."
            },
            {
              question: "Berapa lama estimasi waktu tunggu jika walk-in?",
              answer: "Waktu tunggu walk-in bervariasi antara 15-45 menit tergantung kepadatan. Anda bisa menikmati free WiFi dan minuman ringan di ruang tunggu kami sambil bersantai."
            },
            {
              question: "Metode pembayaran apa yang tersedia?",
              answer: "Kami menerima Cash, QRIS, dan transfer bank lokal. Kami juga menerima pembayaran via e-wallet (GoPay, OVO, Dana)."
            },
            {
              question: "Apakah ada garansi potongan?",
              answer: "Ya! Jika Anda merasa ada bagian yang kurang rapi atau tidak sesuai dalam 3 hari setelah potongan, silakan kembali dan kami akan memperbaikinya tanpa biaya tambahan (Touch Up Guarantee)."
            }
          ]} />
        </ScrollReveal>
      </section>

      {/* 7. LOKASI, JAM OPERASIONAL & KONTAK */}
      <section id="lokasi" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center border-t border-[#333333]">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Kunjungi <span className="text-[#E63946]">Kami</span></h2>
          <p className="text-gray-400 mb-10 text-lg">
            Tempat kami dirancang untuk privasi dan kenyamanan pria sejati. Area parkir luas dan ruang tunggu ber-AC dengan free WiFi.
          </p>
          
          <div className="bg-[#1A1A1A] p-6 border-l-4 border-[#E63946] mb-8">
            <div className="flex items-center gap-4 mb-4 text-white">
              <Clock size={28} className="text-[#E63946]" />
              <h3 className="text-xl font-bold uppercase tracking-wider">Jam Buka</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between border-b border-[#333333] pb-2">
                <span>Senin - Jumat</span>
                <span className="font-bold text-white">10.00 - 21.00</span>
              </li>
              <li className="flex justify-between pt-2 border-[#333333]">
                <span>Sabtu - Minggu</span>
                <span className="font-bold text-white">09.00 - 22.00</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`https://wa.me/${DUMMY_WA}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#E63946] text-white font-bold uppercase tracking-wider px-6 py-4 hover:bg-[#D90429] transition-colors">
              <MessageCircle size={20} /> Tanya / Booking WA
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-[#1A1A1A] text-white border border-[#333333] font-bold uppercase tracking-wider px-6 py-4 hover:border-gray-500 transition-colors">
              <FaInstagram size={20} /> @rapibarbershop
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="relative">
          <div className="bg-[#1A1A1A] p-2 border border-[#333333]">
            <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.573117!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1714561234567!5m2!1sen!2sid" />
          </div>
          <div className="mt-4 flex gap-4 items-start bg-[#111111] border border-[#333333] p-4">
            <MapPin className="text-[#E63946] shrink-0 mt-1" size={24} />
            <div>
              <p className="font-bold text-white uppercase tracking-wider mb-1">RAPI Barbershop Pusat</p>
              <p className="text-gray-400 text-sm">Jl. Sudirman No. 45, Kecamatan Pusat Kota, Jakarta Selatan, 12345 (Samping Kedai Kopi Semesta)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#050505] text-center border-t border-[#333333]">
        <h2 className="text-3xl font-black uppercase tracking-widest text-[#333333] mb-4">RAPI BARBERSHOP</h2>
        <p className="text-sm text-gray-600 mb-6 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Rapi Barbershop.
        </p>
      </footer>

      {/* GLOBAL DEMO COMPONENTS */}
      <FloatingWhatsApp 
        phoneNumber={DUMMY_WA} 
        message="Halo RAPI Barbershop, saya mau reservasi potong rambut" 
        bgColor="bg-[#E63946]"
        hoverColor="hover:bg-[#D90429]"
        label="Booking Sekarang"
      />
      <DemoWatermark />
    </div>
  );
}
