import React from "react";

interface RatingBadgeProps {
  rating: number;
  reviewCount: number;
  theme?: "coffee" | "fashion" | "barber";
}

export default function RatingBadge({ rating, reviewCount, theme = "coffee" }: RatingBadgeProps) {
  let bgClass = "bg-white/80 backdrop-blur-md text-amber-900 border-amber-200";
  let starClass = "text-amber-500";
  let textClass = "text-gray-700";

  if (theme === "fashion") {
    bgClass = "bg-white text-black border-gray-200 shadow-sm";
    starClass = "text-[#C25E3B]"; // rust accent
    textClass = "text-gray-500";
  } else if (theme === "barber") {
    bgClass = "bg-[#1A1A1A] text-white border-[#333333]";
    starClass = "text-[#E63946]"; // electric red
    textClass = "text-gray-400";
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium ${bgClass}`}>
      <span className={starClass}>★</span>
      <span className="font-bold">{rating.toFixed(1)}</span>
      <span className={textClass}>·</span>
      <span className={textClass}>{reviewCount} ulasan</span>
    </div>
  );
}
