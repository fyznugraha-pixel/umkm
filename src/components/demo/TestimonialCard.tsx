import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  comment: string;
  rating?: number;
  role?: string;
  theme?: "coffee" | "fashion" | "barber" | "laundry";
}

const THEME_CONFIG = {
  laundry: {
    container: "bg-[#ECFEFF] border border-[#22D3EE]/30 p-8 shadow-[0_8px_30px_rgb(8,145,178,0.1)] flex flex-col h-full rounded-2xl hover:shadow-[0_20px_40px_rgb(8,145,178,0.15)] transition-shadow",
    star: "text-[#0891B2]",
    starEmpty: "text-[#22D3EE]/50",
    text: "text-[#164E63] font-light leading-relaxed mb-8 flex-1 text-base md:text-lg",
    name: "font-bold text-[#164E63] text-sm md:text-base",
    role: "text-xs text-[#0891B2] uppercase tracking-wider font-bold",
    avatar: "w-14 h-14 rounded-full object-cover border-2 border-[#22D3EE]/50"
  },
  coffee: {
    container: "bg-[#FEF3C7] border border-[#FBBF24]/50 rounded-2xl p-6 shadow-sm flex flex-col h-full",
    star: "text-[#D4A373]",
    starEmpty: "text-[#FBBF24]/30",
    text: "text-[#451A03]/80 italic mb-6 flex-1 text-sm md:text-base",
    name: "font-bold text-[#451A03] text-sm md:text-base",
    role: "text-xs text-[#451A03]/60",
    avatar: "w-12 h-12 rounded-full object-cover border-2 border-[#FEF3C7]"
  },
  barber: {
    container: "bg-[#1E293B]/80 backdrop-blur-md border border-white/10 p-6 shadow-2xl flex flex-col h-full rounded-sm",
    star: "text-[#F97316]",
    starEmpty: "text-slate-600",
    text: "text-slate-300 italic mb-6 flex-1 text-sm md:text-base",
    name: "font-black text-white text-sm md:text-base uppercase tracking-wider",
    role: "text-xs text-slate-400",
    avatar: "w-12 h-12 rounded-none object-cover border-2 border-[#F97316]"
  },
  fashion: {
    container: "bg-[#FAFAFA] border border-[#111111] p-6 flex flex-col h-full rounded-none",
    star: "text-[#2563EB]",
    starEmpty: "text-gray-300",
    text: "text-[#111111] font-light italic mb-6 flex-1 text-sm md:text-base",
    name: "font-bold text-[#111111] text-sm md:text-base uppercase tracking-wider",
    role: "text-xs text-gray-500 uppercase tracking-widest",
    avatar: "w-12 h-12 rounded-none grayscale object-cover border border-[#111111]"
  }
};

export default function TestimonialCard({ 
  name, 
  avatar, 
  comment, 
  rating = 5,
  role = "Pelanggan",
  theme = "coffee"
}: TestimonialCardProps) {
  
  const currentTheme = THEME_CONFIG[theme] || THEME_CONFIG.coffee;

  return (
    <div className={currentTheme.container}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} className={i < rating ? currentTheme.star : currentTheme.starEmpty} />
        ))}
      </div>
      <p className={currentTheme.text}>"{comment}"</p>
      
      <div className="flex items-center gap-4 mt-auto">
        <img 
          src={avatar} 
          alt={name} 
          className={currentTheme.avatar}
        />
        <div>
          <p className={currentTheme.name}>{name}</p>
          <p className={currentTheme.role}>{role}</p>
        </div>
      </div>
    </div>
  );
}
