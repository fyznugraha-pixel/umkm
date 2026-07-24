import React from "react";

type GalleryImage = string | { src: string; caption?: string };

interface GalleryGridProps {
  images: GalleryImage[];
  aspectRatio?: "portrait" | "landscape" | "square" | "mixed";
  theme?: "coffee" | "fashion" | "barber";
}

export default function GalleryGrid({ images, aspectRatio = "mixed", theme = "coffee" }: GalleryGridProps) {
  // Use 4 columns for portrait to accommodate more vertical images, 3 for others
  const gridCols = aspectRatio === "portrait" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3";
  const roundedClass = theme === "fashion" || theme === "barber" ? "rounded-none" : "rounded-xl";

  return (
    <div className={`grid ${gridCols} gap-2 md:gap-4`}>
      {images.map((img, idx) => {
        const imgSrc = typeof img === "string" ? img : img.src;
        const imgCaption = typeof img === "object" ? img.caption : undefined;
        
        let aspectClass = "aspect-square";
        
        if (aspectRatio === "mixed") {
          // Perfectly tiled masonry logic for 6 or 8 items
          if (idx === 0) aspectClass = "aspect-video md:col-span-2";
          else if (idx === 1) aspectClass = "aspect-square md:aspect-auto md:row-span-2 md:h-full";
          else if (idx === 5) aspectClass = "aspect-video md:col-span-2";
          else if (idx === 6) aspectClass = "aspect-video md:col-span-2";
          else aspectClass = "aspect-square";
        } else if (aspectRatio === "portrait") {
          // Portrait layout (4:5) for fashion lookbooks
          aspectClass = "aspect-[4/5]";
          // First item is larger
          if (idx === 0) aspectClass = "aspect-[4/5] col-span-2 row-span-2";
        } else if (aspectRatio === "landscape") {
          aspectClass = "aspect-video";
        }
        
        return (
          <div key={idx} className={`${aspectClass} overflow-hidden ${roundedClass} bg-slate-200 relative group`}>
            <img 
              src={imgSrc} 
              alt={imgCaption || `Gallery ${idx + 1}`} 
              className={`w-full h-full object-cover transition-transform duration-700 ${theme === "fashion" ? "hover:scale-105" : "hover:scale-110"}`}
            />
            {theme === "fashion" && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            )}
            {imgCaption && (
              <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-end transition-opacity duration-300 ${theme === "barber" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                <p className={`font-bold uppercase tracking-wider ${theme === "barber" ? "text-white text-sm" : "text-white"}`}>{imgCaption}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
