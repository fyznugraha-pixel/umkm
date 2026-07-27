"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: "coffee" | "fashion" | "barber" | "laundry";
}

const ACCORDION_THEME = {
  laundry: {
    container: "max-w-3xl mx-auto space-y-4",
    item: "border border-sky-200/30 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden",
    button: "w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white focus:outline-none hover:bg-white/5 transition-colors",
    icon: "text-sky-300 transition-transform duration-300",
    answer: "px-6 pb-6 text-sky-100 leading-relaxed font-light"
  },
  coffee: {
    container: "max-w-3xl mx-auto space-y-4",
    item: "border border-[#E5D3B3] bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-md",
    button: "w-full text-left px-6 py-5 flex items-center justify-between font-bold text-[#3D2B1F] focus:outline-none",
    icon: "text-[#D4A373] transition-transform duration-300",
    answer: "px-6 pb-6 text-[#3D2B1F]/80 leading-relaxed"
  },
  barber: {
    container: "max-w-3xl mx-auto space-y-4",
    item: "border border-[#333333] bg-[#1A1A1A] overflow-hidden",
    button: "w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white focus:outline-none hover:bg-[#222222] transition-colors",
    icon: "text-[#E63946] transition-transform duration-300",
    answer: "px-6 pb-6 text-gray-400 leading-relaxed"
  },
  fashion: {
    container: "max-w-3xl mx-auto space-y-2",
    item: "border-b border-[#111111]/20 bg-transparent overflow-hidden",
    button: "w-full text-left py-5 flex items-center justify-between font-bold uppercase tracking-wider text-[#111111] focus:outline-none",
    icon: "text-[#111111] transition-transform duration-300",
    answer: "pb-6 text-gray-600 leading-relaxed font-light"
  }
};

export default function FAQAccordion({ items, theme = "coffee" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentTheme = ACCORDION_THEME[theme] || ACCORDION_THEME.coffee;

  return (
    <div className={currentTheme.container}>
      {items.map((item, index) => (
        <div key={index} className={currentTheme.item}>
          <button
            onClick={() => toggleItem(index)}
            className={currentTheme.button}
          >
            <span>{item.question}</span>
            <ChevronDown 
              size={20} 
              className={`${currentTheme.icon} ${openIndex === index ? "rotate-180" : ""}`} 
            />
          </button>
          
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className={currentTheme.answer}>
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
