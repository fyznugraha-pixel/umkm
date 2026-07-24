import React from "react";
import { MessageCircle } from "lucide-react";

interface ItemCardProps {
  image: string;
  title: string;
  price: string;
  description?: string;
  duration?: string;
  aspectRatio?: "square" | "video" | "portrait";
  ctaText?: string;
  ctaLink?: string;
  theme?: "coffee" | "fashion" | "barber";
}

export default function ItemCard({ 
  image, 
  title, 
  price, 
  description,
  duration,
  aspectRatio = "video",
  ctaText,
  ctaLink,
  theme = "coffee"
}: ItemCardProps) {
  
  const aspectClass = aspectRatio === "square" ? "aspect-square" : aspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]";
  
  // Style Dictionary based on Theme
  let containerClass = "";
  let imageBgClass = "";
  let titleClass = "";
  let descClass = "";
  let priceClass = "";
  let ctaClass = "";
  
  switch (theme) {
    case "fashion":
      containerClass = "bg-white overflow-hidden group flex flex-col";
      imageBgClass = "bg-gray-100";
      titleClass = "font-sans font-bold text-base md:text-lg text-[#111111] uppercase tracking-wide mb-1";
      descClass = "text-sm text-gray-500 mb-4 flex-1";
      priceClass = "text-[#111111] font-medium";
      ctaClass = "text-[#C34A36] hover:text-[#111111]";
      break;
    case "barber":
      containerClass = "bg-[#1A1A1A] border border-[#333333] overflow-hidden shadow-lg group flex flex-col";
      imageBgClass = "bg-[#0A0A0A]";
      titleClass = "font-sans font-black text-xl text-white uppercase tracking-wider mb-2";
      descClass = "text-sm text-gray-400 mb-4 flex-1";
      priceClass = "text-white font-bold text-lg";
      ctaClass = "text-[#E63946] hover:text-white";
      break;
    case "coffee":
    default:
      containerClass = "bg-white border border-[#E5D3B3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col";
      imageBgClass = "bg-[#F5EFE6]";
      titleClass = "font-serif text-xl text-[#3D2B1F] mb-1";
      descClass = "text-sm text-[#3D2B1F]/70 mb-3 flex-1";
      priceClass = "text-[#B36A5E] font-semibold";
      ctaClass = "text-[#B36A5E] hover:text-[#3D2B1F]";
      break;
  }

  return (
    <div className={containerClass}>
      <div className={`${aspectClass} w-full overflow-hidden ${imageBgClass} relative`}>
        <img src={image} alt={title} className={`w-full h-full object-cover ${theme !== 'coffee' ? 'transition-transform duration-700 group-hover:scale-105' : ''}`} />
      </div>
      <div className={theme === 'coffee' ? "p-5 flex-1 flex flex-col" : "p-6 flex-1 flex flex-col"}>
        <div className="flex justify-between items-start mb-1">
          <h3 className={titleClass}>{title}</h3>
          {duration && (
            <span className={`text-xs font-bold uppercase px-2 py-1 ${theme === 'barber' ? 'bg-[#333333] text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
              {duration}
            </span>
          )}
        </div>
        
        {description && <p className={descClass}>{description}</p>}
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className={priceClass}>{price}</div>
          {ctaText && ctaLink && (
            <a 
              href={ctaLink} 
              target="_blank" 
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${ctaClass}`}
            >
              {ctaText} <MessageCircle size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
