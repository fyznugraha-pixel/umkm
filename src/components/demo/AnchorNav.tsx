"use client";

import React, { useState, useEffect } from "react";

interface AnchorSection {
  id: string;
  label: string;
}

interface AnchorNavProps {
  sections: AnchorSection[];
  theme?: "coffee" | "fashion" | "barber";
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
}

export default function AnchorNav({ sections, theme = "coffee", rightContent, leftContent }: AnchorNavProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background solid when scrolled past 100px (or hero)
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const scrollPosition = window.scrollY + 200; // offset for sticky nav

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by roughly navbar height (64px)
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  let navBg = "bg-transparent";
  if (isScrolled) {
    if (theme === "coffee") navBg = "bg-[#f8f5f0]/95 backdrop-blur-md shadow-sm";
    if (theme === "fashion") navBg = "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm";
    if (theme === "barber") navBg = "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#333333]";
  }

  let textClass = "text-white drop-shadow-md"; // Default top
  if (isScrolled) {
    if (theme === "coffee") textClass = "text-amber-900";
    if (theme === "fashion") textClass = "text-black";
    if (theme === "barber") textClass = "text-gray-300";
  }

  const getActivePillClass = () => {
    if (theme === "coffee") return "bg-amber-800 text-white shadow-md";
    if (theme === "fashion") return "bg-black text-white rounded-none";
    if (theme === "barber") return "bg-[#E63946] text-white rounded-sm";
    return "bg-black text-white";
  };

  const getInactivePillClass = () => {
    if (isScrolled) {
      if (theme === "coffee") return "hover:bg-amber-100 text-amber-800";
      if (theme === "fashion") return "hover:bg-gray-100 text-gray-600 rounded-none";
      if (theme === "barber") return "hover:bg-[#1A1A1A] text-gray-400 rounded-sm hover:text-white";
    }
    return "hover:bg-white/20 text-white";
  };

  return (
    <div className={`sticky top-0 z-40 transition-all duration-300 -mb-16 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Optional Left Content (e.g. Admin Button) */}
          {leftContent && (
            <div className="mr-4 flex-shrink-0">
              {leftContent}
            </div>
          )}
          
          {/* Horizontal scroll pills */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-hide py-2 gap-2 flex-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                    isActive ? getActivePillClass() : getInactivePillClass()
                  } ${!isScrolled && !isActive ? "drop-shadow-md" : ""}`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
          
          {/* Optional Right Content (e.g. Cart Icon) */}
          {rightContent && (
            <div className="ml-4 flex-shrink-0">
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
