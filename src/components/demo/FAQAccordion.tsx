"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  theme?: "coffee" | "fashion" | "barber";
}

export default function FAQAccordion({ items, theme = "coffee" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let containerClass = "max-w-3xl mx-auto space-y-4";
  let itemClass = "border bg-white rounded-xl overflow-hidden transition-colors";
  let buttonClass = "w-full text-left px-6 py-5 flex items-center justify-between font-bold text-gray-900 focus:outline-none";
  let iconClass = "text-gray-500 transition-transform duration-300";
  let answerClass = "px-6 pb-6 text-gray-600 leading-relaxed";

  if (theme === "fashion") {
    itemClass = "border-b border-gray-200 bg-transparent overflow-hidden";
    buttonClass = "w-full text-left py-5 flex items-center justify-between font-bold uppercase tracking-wider text-black focus:outline-none";
    iconClass = "text-black transition-transform duration-300";
    answerClass = "pb-6 text-gray-500 leading-relaxed";
  } else if (theme === "barber") {
    itemClass = "border border-[#333333] bg-[#1A1A1A] overflow-hidden";
    buttonClass = "w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white focus:outline-none";
    iconClass = "text-[#E63946] transition-transform duration-300";
    answerClass = "px-6 pb-6 text-gray-400 leading-relaxed";
  }

  return (
    <div className={containerClass}>
      {items.map((item, index) => (
        <div key={index} className={itemClass}>
          <button
            onClick={() => toggleItem(index)}
            className={buttonClass}
          >
            <span>{item.question}</span>
            <ChevronDown 
              size={20} 
              className={`${iconClass} ${openIndex === index ? "rotate-180" : ""}`} 
            />
          </button>
          
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className={answerClass}>
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
