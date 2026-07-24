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
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden group">
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
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h4 className="font-bold text-[#3D2B1F] text-lg leading-tight">{product.name}</h4>
          <span className="font-bold text-[#B36A5E] whitespace-nowrap">Rp {product.price.toLocaleString("id-ID")}</span>
        </div>
        
        <p className="text-[#3D2B1F]/70 text-sm mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-[#E5D3B3]/30 flex items-center justify-between">
          <span className="text-xs font-medium text-[#3D2B1F]/50">
            {isOutOfStock ? "Stok Kosong" : `Sisa Stok: ${product.stock}`}
          </span>
          <button 
            onClick={() => setIsModalOpen(true)}
            disabled={isOutOfStock}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
              isOutOfStock 
                ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                : "bg-[#D4A373] hover:bg-[#B36A5E] text-[#3D2B1F] hover:text-white"
            }`}
          >
            <ShoppingCart size={16} /> 
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
