import React from "react";
import { Metadata } from "next";
import { MessageCircle, MapPin, Droplet, Wind, Sparkles, Shirt, Clock } from "lucide-react";
import MapEmbed from "@/components/demo/MapEmbed";
import DemoWatermark from "@/components/demo/DemoWatermark";
import FloatingWhatsApp from "@/components/demo/FloatingWhatsApp";
import { FaInstagram } from "react-icons/fa";
import StatusBadge from "@/components/demo/StatusBadge";

export const metadata: Metadata = {
  title: "Bersih & Wangi Laundry",
  description: "Laundry kiloan dengan deterjen hypoallergenic dan garansi cuci ulang gratis.",
  robots: "noindex, nofollow",
};

const DUMMY_WA = "6280000000000";

const SERVICES = [
  {
    id: "cuci-setrika",
    name: "Cuci + Setrika Uap",
    price: "8.000",
    priceSuffix: "/kg",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600",
    description: "Proses cuci komplit dengan setrika uap panas tinggi. Efektif membunuh tungau & bakteri. Pakaian langsung siap pakai ke kantor atau acara.",
    highlight: "Selesai 24 Jam"
  },
  {
    id: "cuci-lipat",
    name: "Cuci Kering + Lipat",
    price: "6.000",
    priceSuffix: "/kg",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=600",
    description: "Khusus pakaian harian (kaos, celana santai). Kami cuci bersih, keringkan dengan dryer industri anti-kuman, dan lipat rapi sesuai standar lemari Anda.",
    highlight: "Selesai 12 Jam"
  },
  {
    id: "dry-clean",
    name: "Dry Clean Jas / Gaun",
    price: "35.000",
    priceSuffix: "/pcs",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600",
    description: "Perawatan bahan sensitif (sutra, wol, satin) menggunakan pelarut non-air. Serat kain tetap terjaga, warna tidak pudar, bentuk pakaian tidak berubah.",
    highlight: "Garansi Aman"
  },
];

export default function BersihWangiDemo() {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#0EA5E9] selection:text-white pb-10">
      
      {/* BANNER COMPARISON */}
      <div className="bg-[#0B1121] border-b border-slate-800 text-slate-300 py-3 px-4 text-center text-sm font-bold tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-2 relative z-50">
        <span className="text-slate-400 font-light">Sedang melihat versi Mini Landing Page.</span>
        <a href="/demo/bersih-wangi-laundry-basic" className="text-white border-b border-transparent hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-all">
          Lihat versi Basic UMKM Website &rarr;
        </a>
      </div>

      {/* 1. HERO SECTION (Asymmetric Split) */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-12 md:pt-0">
        <div className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 z-10 pr-0 md:pr-12">
            <div className="inline-flex items-center gap-2 mb-8">
              <Droplet className="text-[#0EA5E9] fill-[#0EA5E9]" size={20} />
              <span className="text-[#0EA5E9] font-bold tracking-widest uppercase text-sm">Laundry Kiloan Premium</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Bukan Sekadar <br/>
              <span className="relative">
                Cuci Kering.
                {/* SIGNATURE ELEMENT: Curved washing line under text */}
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#0EA5E9]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Kami menggunakan deterjen <strong className="font-semibold">hypoallergenic</strong> yang aman untuk kulit bayi. Plus garansi 100% cuci ulang gratis jika noda kopi, tinta, atau saus membandel belum tuntas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${DUMMY_WA}?text=Halo%20Admin,%20saya%20mau%20antar%20cucian`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 py-4 transition-colors"
              >
                <MessageCircle size={20} /> Antar Cucian Sekarang
              </a>
              <div className="flex items-center gap-3 px-6 py-4 border border-slate-200 text-slate-600 font-medium">
                <Clock size={20} className="text-slate-400" /> Selesai Max 24 Jam
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 relative h-[50vh] md:h-[80vh] w-full">
            {/* Concrete imagery: Folded towels texture, not a generic smiling person */}
            <img 
              src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800" 
              alt="Detail tekstur pakaian terlipat rapi" 
              className="absolute inset-0 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px]"
            />
            {/* Decorative element: Clean linen watermark overlay */}
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
          </div>
          
        </div>
      </section>

      {/* 2. THE PROCESS (Non-generic, using droplet bullets & staggered layout) */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 tracking-tight">Standard <span className="text-[#0EA5E9]">Kebersihan Kami</span></h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="flex flex-col md:mt-0">
              <div className="w-12 h-12 mb-6">
                <Wind className="w-full h-full text-[#0EA5E9]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sistem Tagging Anti-Tertukar</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Setiap 1 kg pakaian masuk ke 1 mesin khusus. Kami tidak pernah mencampur pakaian Anda dengan pelanggan lain. Risiko hilang atau luntur = 0%.
              </p>
            </div>
            
            <div className="flex flex-col md:mt-12">
              <div className="w-12 h-12 mb-6">
                <Droplet className="w-full h-full text-[#0EA5E9]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Formula Khusus Noda</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Spotting treatment pra-cuci untuk noda membandel (darah, tinta, minyak) menggunakan enzim khusus yang meluruhkan kotoran tanpa merusak serat kain.
              </p>
            </div>
            
            <div className="flex flex-col md:mt-24">
              <div className="w-12 h-12 mb-6">
                <Sparkles className="w-full h-full text-[#0EA5E9]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Setrika Uap Industri</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Bukan setrika rumahan. Setrika boiler uap tekanan tinggi memastikan panas merata, membunuh bakteri tersisa, dan bebas risiko gosong pada bahan tipis.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. LAYANAN & HARGA (Custom staggered list with left-border accent instead of generic grid) */}
      <section className="py-32 px-6 bg-white relative">
        {/* SIGNATURE WAVE DIVIDER AT TOP */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F8FAFC]"></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Daftar <span className="text-[#0EA5E9]">Harga Kiloan</span></h2>
            <p className="text-xl text-slate-600 font-light">
              Harga terukur pasti setelah barang ditimbang di outlet. Transparan, tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row gap-6 bg-white border border-slate-200 border-l-[6px] border-l-[#0EA5E9] p-6 md:p-8 hover:shadow-xl transition-shadow ${index % 2 !== 0 ? 'md:ml-12' : ''}`}
              >
                <div className="w-full md:w-48 h-48 md:h-auto shrink-0 relative overflow-hidden bg-slate-100">
                  <img src={service.image} alt={service.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">{service.name}</h3>
                      <span className="bg-[#E0F2FE] text-[#0284C7] text-xs font-bold px-3 py-1 uppercase tracking-wider">{service.highlight}</span>
                    </div>
                    <p className="text-slate-600 mb-6 font-light leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div>
                      <span className="text-sm text-slate-400 block mb-1">Mulai dari</span>
                      <div className="flex items-baseline gap-1 text-[#0EA5E9]">
                        <span className="text-xl font-bold">Rp</span>
                        <span className="text-4xl font-black tracking-tighter">{service.price}</span>
                        <span className="text-lg font-medium text-slate-500">{service.priceSuffix}</span>
                      </div>
                    </div>
                    <a 
                      href={`https://wa.me/${DUMMY_WA}?text=Halo,%20saya%20mau%20layanan%20${encodeURIComponent(service.name)}`}
                      className="mt-4 sm:mt-0 text-sm font-bold uppercase tracking-wider text-slate-900 hover:text-[#0EA5E9] flex items-center gap-2 group"
                    >
                      Pilih Layanan 
                      <span className="w-6 h-[2px] bg-slate-900 group-hover:bg-[#0EA5E9] group-hover:w-8 transition-all"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. LOKASI & KONTAK */}
      <section className="py-24 px-6 bg-[#0B1121] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Shirt className="w-16 h-16 text-[#0EA5E9] mb-8" strokeWidth={1} />
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Drop-off <br/><span className="text-[#0EA5E9]">Cucian Anda</span></h2>
            
            {/* Real concrete droplet bullet points */}
            <ul className="space-y-4 text-slate-300 font-light mb-10 text-lg">
              <li className="flex items-start gap-4">
                <Droplet className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9] shrink-0 mt-1" />
                <span>Pemisahan pakaian luntur & putih di konter.</span>
              </li>
              <li className="flex items-start gap-4">
                <Droplet className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9] shrink-0 mt-1" />
                <span>Timbang transparan langsung di depan Anda.</span>
              </li>
              <li className="flex items-start gap-4">
                <Droplet className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9] shrink-0 mt-1" />
                <span>Langsung terima e-Nota via WhatsApp.</span>
              </li>
            </ul>

            <div className="p-6 border border-slate-700/50 bg-slate-800/30 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Status Toko</h3>
                <StatusBadge 
                  schedule={[
                    { days: [1, 2, 3, 4, 5, 6], openHour: 7, closeHour: 20 },
                    { days: [0], openHour: 8, closeHour: 17 }
                  ]} 
                />
              </div>
              <div className="text-slate-400 font-light text-sm">
                <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5053155700876!2d106.8249641!3d-6.175392399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1714902170362!5m2!1sid!2sid" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={`https://wa.me/${DUMMY_WA}`}
                className="flex items-center gap-3 bg-[#0EA5E9] text-white font-bold px-8 py-4 hover:bg-[#0284C7] transition-colors"
              >
                <MessageCircle size={20} /> Hubungi via WhatsApp
              </a>
              <a 
                href="https://instagram.com/"
                className="flex items-center justify-center w-14 h-14 border border-slate-700 text-white hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="h-[500px] w-full border border-slate-800 bg-slate-900 p-2">
            <div className="w-full h-full opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5053155700876!2d106.8249641!3d-6.175392399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1714902170362!5m2!1sid!2sid" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#040814] text-slate-500 py-12 px-6 text-center border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="mb-8 font-light">Bersih & Wangi Laundry © {new Date().getFullYear()}. Garansi kepuasan 100%.</p>
          <DemoWatermark />
        </div>
      </footer>

      {/* 7. FLOATING WHATSAPP */}
      <FloatingWhatsApp 
        phoneNumber={DUMMY_WA}
        message="Halo Admin Bersih & Wangi Laundry, saya mau tanya layanan laundry."
        label="Tanya Sekarang"
      />

    </div>
  );
}
