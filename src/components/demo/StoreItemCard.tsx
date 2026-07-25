import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Product, useStore } from "@/components/demo/StoreContext";
import ProductCustomizationModal from "./ProductCustomizationModal";

interface StoreItemCardProps {
  product: Product;
}

export default function StoreItemCard({ product }: StoreItemCardProps) {
  const { addToCart } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const isOutOfStock = product.stock <= 0;

  return (
    <>
      <div className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#E5D3B3] flex flex-col h-full ${isOutOfStock ? "opacity-75" : ""}`}>
      <div className="relative h-32 md:h-48 w-full bg-slate-100 overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isOutOfStock ? "" : "group-hover:scale-110"}`}
        />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-red-500 text-white font-bold py-1 px-4 rounded-full text-sm uppercase tracking-wider">Habis</span>
          </div>
        )}
        {!isOutOfStock && product.isBestseller && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-yellow-400 text-yellow-900 font-bold py-1 px-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-wider shadow-sm flex items-center gap-1">
              ⭐ Terlaris
            </span>
          </div>
        )}
      </div>
      
      <div className="p-3 md:p-5 flex flex-col flex-grow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1 md:gap-2">
          <h4 className="font-bold text-[#3D2B1F] text-sm md:text-lg leading-tight">{product.name}</h4>
          <span className="font-bold text-[#B36A5E] text-xs md:text-base whitespace-nowrap">Rp {product.price.toLocaleString("id-ID")}</span>
        </div>
        
        <p className="text-[#3D2B1F]/70 text-xs md:text-sm mb-3 md:mb-4 flex-grow line-clamp-2 md:line-clamp-3">
          {product.description}
        </p>
        
        <div className="mt-auto pt-3 md:pt-4 border-t border-[#E5D3B3]/30 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <span className="text-[10px] md:text-xs font-medium text-[#3D2B1F]/50">
            {isOutOfStock ? "Stok Kosong" : `Sisa: ${product.stock}`}
          </span>
          <button 
            onClick={() => setIsModalOpen(true)}
            disabled={isOutOfStock}
            className={`flex items-center justify-center gap-1.5 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-colors w-full md:w-auto ${
              isOutOfStock 
                ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                : "bg-[#D4A373] hover:bg-[#B36A5E] text-[#3D2B1F] hover:text-white"
            }`}
          >
            <ShoppingCart size={14} className="md:w-4 md:h-4" /> 
            {isOutOfStock ? "Habis" : "Tambah"}
          </button>
        </div>
      </div>
    </div>
    
    <ProductCustomizationModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      product={product}
    />
    </>
  );
}
