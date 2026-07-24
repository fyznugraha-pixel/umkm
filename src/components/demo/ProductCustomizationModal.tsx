import React, { useState, useEffect } from "react";
import { X, Plus, Check } from "lucide-react";
import { Product, useStore } from "@/components/demo/StoreContext";

interface ProductCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductCustomizationModal({ isOpen, onClose, product }: ProductCustomizationModalProps) {
  const { products, addToCart } = useStore();
  
  // Customization States
  const [beans, setBeans] = useState("House Blend");
  const [ice, setIce] = useState("Normal");
  const [sugar, setSugar] = useState("Normal");
  const [topping, setTopping] = useState("Tidak Ada");
  
  // Snack recommendations
  const [selectedSnacks, setSelectedSnacks] = useState<string[]>([]);
  
  const snacks = products.filter(p => p.category === "Snack" && p.stock > 0);

  // Reset state when modal opens for a new product
  useEffect(() => {
    if (isOpen) {
      setBeans("House Blend");
      setIce("Normal");
      setSugar("Normal");
      setTopping("Tidak Ada");
      setSelectedSnacks([]);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const toppingPrices: Record<string, number> = {
    "Tidak Ada": 0,
    "Boba": 5000,
    "Oat Milk": 8000
  };

  const beanPrices: Record<string, number> = {
    "House Blend": 0,
    "Arabica": 3000
  };

  const handleAddToCart = () => {
    const options: string[] = [];
    let optionPrice = 0;

    if (product.category === "Kopi") {
      options.push(`Biji Kopi: ${beans}`);
      optionPrice += beanPrices[beans];
    }
    
    if (product.category === "Kopi" || product.category === "Non-Kopi") {
      options.push(`Es: ${ice}`);
      options.push(`Gula: ${sugar}`);
      options.push(`Topping: ${topping}`);
      optionPrice += toppingPrices[topping];
    }

    // Add main product
    addToCart(product.id, 1, options.length > 0 ? options : undefined, optionPrice);

    // Add selected snacks
    selectedSnacks.forEach(snackId => {
      addToCart(snackId, 1);
    });

    onClose();
  };

  const toggleSnack = (snackId: string) => {
    setSelectedSnacks(prev => 
      prev.includes(snackId) ? prev.filter(id => id !== snackId) : [...prev, snackId]
    );
  };

  // Base price + Extra price
  const extraPrice = (product.category === "Kopi" ? beanPrices[beans] : 0) + 
                     ((product.category === "Kopi" || product.category === "Non-Kopi") ? toppingPrices[topping] : 0);
                     
  const totalPrice = product.price + extraPrice + 
    selectedSnacks.reduce((sum, id) => {
      const s = products.find(p => p.id === id);
      return sum + (s ? s.price : 0);
    }, 0);

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-[#F5EFE6] rounded-2xl z-50 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-start p-6 bg-white border-b border-[#E5D3B3]">
          <div>
            <h2 className="text-xl font-bold text-[#3D2B1F]">{product.name}</h2>
            <p className="text-[#B36A5E] font-semibold mt-1">Rp {product.price.toLocaleString("id-ID")}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {(product.category === "Kopi" || product.category === "Non-Kopi") ? (
            <>
              {product.category === "Kopi" && (
                <div>
                  <h3 className="font-bold text-[#3D2B1F] mb-3">Pilihan Biji Kopi</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["House Blend", "Arabica"].map(opt => (
                      <label key={opt} className={`cursor-pointer flex items-center justify-center p-3 rounded-xl border-2 transition-all ${beans === opt ? "border-[#D4A373] bg-[#D4A373]/10 font-bold text-[#3D2B1F]" : "border-[#E5D3B3] bg-white text-[#3D2B1F]/70"}`}>
                        <input type="radio" className="hidden" name="beans" value={opt} checked={beans === opt} onChange={(e) => setBeans(e.target.value)} />
                        {opt} {beanPrices[opt] > 0 && `(+3k)`}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-bold text-[#3D2B1F] mb-3">Level Es</h3>
                <div className="grid grid-cols-3 gap-3">
                  {["Less", "Normal", "Extra"].map(opt => (
                    <label key={opt} className={`cursor-pointer flex items-center justify-center p-3 rounded-xl border-2 transition-all ${ice === opt ? "border-[#D4A373] bg-[#D4A373]/10 font-bold text-[#3D2B1F]" : "border-[#E5D3B3] bg-white text-[#3D2B1F]/70 text-sm"}`}>
                      <input type="radio" className="hidden" name="ice" value={opt} checked={ice === opt} onChange={(e) => setIce(e.target.value)} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-[#3D2B1F] mb-3">Level Gula</h3>
                <div className="grid grid-cols-3 gap-3">
                  {["Less", "Normal", "Extra"].map(opt => (
                    <label key={opt} className={`cursor-pointer flex items-center justify-center p-3 rounded-xl border-2 transition-all ${sugar === opt ? "border-[#D4A373] bg-[#D4A373]/10 font-bold text-[#3D2B1F]" : "border-[#E5D3B3] bg-white text-[#3D2B1F]/70 text-sm"}`}>
                      <input type="radio" className="hidden" name="sugar" value={opt} checked={sugar === opt} onChange={(e) => setSugar(e.target.value)} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-[#3D2B1F] mb-3">Topping Tambahan</h3>
                <div className="space-y-2">
                  {["Tidak Ada", "Boba", "Oat Milk"].map(opt => (
                    <label key={opt} className={`cursor-pointer flex items-center justify-between p-3 rounded-xl border-2 transition-all ${topping === opt ? "border-[#D4A373] bg-[#D4A373]/10 font-bold text-[#3D2B1F]" : "border-[#E5D3B3] bg-white text-[#3D2B1F]/70"}`}>
                      <div className="flex items-center gap-3">
                        <input type="radio" className="w-4 h-4 text-[#B36A5E] focus:ring-[#B36A5E]" name="topping" value={opt} checked={topping === opt} onChange={(e) => setTopping(e.target.value)} />
                        <span>{opt}</span>
                      </div>
                      {toppingPrices[opt] > 0 && <span className="text-sm">+Rp {toppingPrices[opt].toLocaleString("id-ID")}</span>}
                    </label>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-[#3D2B1F]/70 text-center py-4">Item ini bisa langsung ditambahkan ke keranjang.</p>
          )}

          {/* Cross Selling */}
          {snacks.length > 0 && (
            <div className="pt-6 border-t border-[#E5D3B3]">
              <h3 className="font-bold text-[#3D2B1F] mb-1">Rekomendasi Pendamping</h3>
              <p className="text-sm text-[#3D2B1F]/60 mb-4">Makin nikmat dengan cemilan ini.</p>
              <div className="space-y-3">
                {snacks.map(snack => {
                  const isSelected = selectedSnacks.includes(snack.id);
                  return (
                    <div 
                      key={snack.id} 
                      onClick={() => toggleSnack(snack.id)}
                      className={`cursor-pointer flex gap-3 p-3 rounded-xl border-2 transition-all ${isSelected ? "border-[#D4A373] bg-white" : "border-[#E5D3B3] bg-white hover:border-[#D4A373]/50"}`}
                    >
                      <img src={snack.image} alt={snack.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-bold text-[#3D2B1F] text-sm">{snack.name}</h4>
                        <p className="text-[#B36A5E] text-xs font-semibold">+Rp {snack.price.toLocaleString("id-ID")}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${isSelected ? "bg-[#B36A5E] border-[#B36A5E] text-white" : "border-[#E5D3B3]"}`}>
                          {isSelected ? <Check size={14} /> : <Plus size={14} className="text-[#E5D3B3]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E5D3B3]">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#B36A5E] hover:bg-[#8F554A] text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-[#B36A5E]/20 flex justify-between px-6"
          >
            <span>Tambah ke Keranjang</span>
            <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
          </button>
        </div>

      </div>
    </>
  );
}
