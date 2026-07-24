import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  comment: string;
  rating?: number;
  role?: string;
  theme?: "coffee" | "fashion" | "barber";
}

export default function TestimonialCard({ 
  name, 
  avatar, 
  comment, 
  rating = 5,
  role = "Pelanggan",
  theme = "coffee"
}: TestimonialCardProps) {
  
  let containerClass = "";
  let starClass = "";
  let starEmptyClass = "";
  let textClass = "";
  let nameClass = "";
  let roleClass = "";
  let avatarClass = "";
  
  switch (theme) {
    case "fashion":
      containerClass = "bg-[#FAFAFA] border border-[#111111] p-6 flex flex-col h-full";
      starClass = "text-[#C34A36]";
      starEmptyClass = "text-gray-300";
      textClass = "text-[#111111] font-light italic mb-6 flex-1 text-sm md:text-base";
      nameClass = "font-bold text-[#111111] text-sm md:text-base uppercase tracking-wider";
      roleClass = "text-xs text-gray-500 uppercase tracking-widest";
      avatarClass = "w-12 h-12 rounded-full grayscale object-cover border border-[#111111]";
      break;
    case "barber":
      containerClass = "bg-[#1A1A1A] border border-[#333333] p-6 shadow-lg flex flex-col h-full";
      starClass = "text-[#E63946]";
      starEmptyClass = "text-gray-600";
      textClass = "text-gray-300 italic mb-6 flex-1 text-sm md:text-base";
      nameClass = "font-black text-white text-sm md:text-base uppercase tracking-wider";
      roleClass = "text-xs text-gray-400";
      avatarClass = "w-12 h-12 rounded-full object-cover border-2 border-[#E63946]";
      break;
    case "coffee":
    default:
      containerClass = "bg-white border border-[#E5D3B3] rounded-2xl p-6 shadow-sm flex flex-col h-full";
      starClass = "text-[#D4A373]";
      starEmptyClass = "text-gray-300";
      textClass = "text-[#3D2B1F]/80 italic mb-6 flex-1 text-sm md:text-base";
      nameClass = "font-bold text-[#3D2B1F] text-sm md:text-base";
      roleClass = "text-xs text-[#3D2B1F]/60";
      avatarClass = "w-12 h-12 rounded-full object-cover border-2 border-[#F5EFE6]";
      break;
  }

  return (
    <div className={containerClass}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} className={i < rating ? starClass : starEmptyClass} />
        ))}
      </div>
      <p className={textClass}>"{comment}"</p>
      
      <div className="flex items-center gap-4 mt-auto">
        <img 
          src={avatar} 
          alt={name} 
          className={avatarClass}
        />
        <div>
          <p className={nameClass}>{name}</p>
          <p className={roleClass}>{role}</p>
        </div>
      </div>
    </div>
  );
}
