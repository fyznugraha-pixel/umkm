"use client";

import React, { useState } from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";

interface ItemCardProps {
  image: string;
  title: string;
  price: string | number;
  description?: string;
  duration?: string;
  aspectRatio?: "square" | "video" | "portrait";
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  theme?: "coffee" | "fashion" | "barber";
  sizes?: string[];
  stock?: number;
  onAddToCart?: (size?: string) => void;
}

export default function ItemCard({ 
  image, 
  title, 
  price, 
  description,
  duration,
  aspectRatio = "square",
  ctaText,
  ctaLink,
  onCtaClick,
  theme = "coffee",
  sizes,
  stock,
  onAddToCart
}: ItemCardProps) {
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>(sizes?.[0]);
  
  const aspectClass = aspectRatio === "square" ? "aspect-square" : aspectRatio === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]";
  
  // Style Dictionary based on Theme
  let containerClass = "";
  let imageBgClass = "";
  let titleClass = "";
  let descClass = "";
  let priceClass = "";
  let ctaClass = "";
  let sizeBtnClass = "";
  
  switch (theme) {
    case "fashion":
      containerClass = "bg-white overflow-hidden group flex flex-col";
      imageBgClass = "bg-gray-100";
      titleClass = "font-sans font-bold text-base md:text-lg text-[#111111] uppercase tracking-wide mb-1";
      descClass = "text-sm text-gray-500 mb-4 flex-1";
      priceClass = "text-[#111111] font-medium";
      ctaClass = "text-white bg-[#111111] hover:bg-[#333333] px-4 py-2 rounded";
      sizeBtnClass = "border border-gray-300 text-gray-600 hover:border-[#111111] hover:text-[#111111]";
      break;
    case "barber":
      containerClass = "bg-[#1A1A1A] border border-[#333333] overflow-hidden shadow-lg group flex flex-col";
      imageBgClass = "bg-[#0A0A0A]";
      titleClass = "font-sans font-black text-xl text-white uppercase tracking-wider mb-2";
      descClass = "text-sm text-gray-400 mb-4 flex-1";
      priceClass = "text-white font-bold text-lg";
      ctaClass = "text-white bg-[#E63946] hover:bg-[#d62839] px-4 py-2 rounded";
      sizeBtnClass = "border border-[#444] text-gray-400 hover:border-white hover:text-white";
      break;
    case "coffee":
    default:
      containerClass = "bg-white border border-[#E5D3B3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col";
      imageBgClass = "bg-[#F5EFE6]";
      titleClass = "font-serif text-xl text-[#3D2B1F] mb-1";
      descClass = "text-sm text-[#3D2B1F]/70 mb-3 flex-1";
      priceClass = "text-[#B36A5E] font-semibold";
      ctaClass = "text-[#B36A5E] hover:text-[#3D2B1F]";
      sizeBtnClass = "border border-[#E5D3B3] text-[#3D2B1F] hover:bg-[#F5EFE6]";
      break;
  }

  const formatPrice = (p: string | number) => {
    if (typeof p === 'number') {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p);
    }
    return p;
  };

  const isOutOfStock = stock !== undefined && stock <= 0;

  return (
    <div className={containerClass}>
      <div className={`${aspectClass} w-full overflow-hidden ${imageBgClass} relative`}>
        <img src={image} alt={title} className={`w-full h-full object-cover ${theme !== 'coffee' ? 'transition-transform duration-700 group-hover:scale-105' : ''}`} />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm z-10">
            <span className="bg-red-500 text-white font-bold text-xs uppercase tracking-wider px-3 py-1 rounded">Habis</span>
          </div>
        )}
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
        
        {/* Sizes Selector */}
        {sizes && sizes.length > 0 && !isOutOfStock && (
          <div className="mb-4">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ukuran</div>
            <div className="flex gap-2 flex-wrap">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${selectedSize === size ? (theme === 'fashion' ? 'bg-[#111111] text-white border-[#111111]' : theme === 'barber' ? 'bg-white text-black border-white' : 'bg-[#3D2B1F] text-white border-[#3D2B1F]') : sizeBtnClass} ${theme === 'coffee' ? 'rounded-md' : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
          <div className={priceClass}>{formatPrice(price)}</div>
          
          {onAddToCart ? (
            <button
              onClick={() => onAddToCart(selectedSize)}
              disabled={isOutOfStock}
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${ctaClass}`}
            >
              {ctaText || "Tambah"} <ShoppingBag size={14} />
            </button>
          ) : onCtaClick ? (
            <button
              onClick={onCtaClick}
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${ctaClass}`}
            >
              {ctaText || "Booking"}
            </button>
          ) : ctaText && ctaLink ? (
            <a 
              href={ctaLink} 
              target="_blank" 
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${ctaClass}`}
            >
              {ctaText} <MessageCircle size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
