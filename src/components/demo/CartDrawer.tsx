import React, { useState } from "react";
import { X, ShoppingBag, Plus, Minus, ArrowRight, CheckCircle } from "lucide-react";
import { useStore } from "@/components/demo/StoreContext";
import PaymentMethodSelector, { PaymentMethod } from "./order/PaymentMethodSelector";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  requiresShipping?: boolean;
  theme?: "coffee" | "fashion";
}

export default function CartDrawer({ isOpen, onClose, requiresShipping = false, theme = "coffee" }: CartDrawerProps) {
  const { cart, products, updateCartQuantity, removeFromCart, getCartTotal, checkout } = useStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerWA, setCustomerWA] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [successOrderId, setSuccessOrderId] = useState<string | null>(null);
  const [successMethod, setSuccessMethod] = useState<PaymentMethod | null>(null);
  
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [paymentProof, setPaymentProof] = useState<string>("");
  const [isQrisVerified, setIsQrisVerified] = useState(false);

  // If closed, reset state
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsCheckingOut(false);
        setSuccessOrderId(null);
        setCustomerName("");
        setCustomerWA("");
        setShippingAddress("");
        setNotes("");
        setSelectedMethod(null);
        setPaymentProof("");
        setIsQrisVerified(false);
      }, 300); // delay to let transition finish
    }
  }, [isOpen]);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerWA || (requiresShipping && !shippingAddress)) {
      alert("Mohon lengkapi data pemesan (Nama, WhatsApp" + (requiresShipping ? ", dan Alamat" : "") + ").");
      return;
    }
    if (!selectedMethod) {
      alert("Mohon pilih metode pembayaran.");
      return;
    }
    if (selectedMethod === "transfer" && !paymentProof) {
      alert("Mohon upload bukti transfer terlebih dahulu.");
      return;
    }
    if (selectedMethod === "qris" && !isQrisVerified) {
      alert("Mohon selesaikan simulasi pembayaran QRIS.");
      return;
    }
    
    const order = checkout(customerName, customerWA, selectedMethod, paymentProof, notes, shippingAddress);
    if (order) {
      setSuccessOrderId(order.id);
      setSuccessMethod(selectedMethod);
    }
  };

  const handleWAConfirmation = () => {
    const text = `Halo Admin Kopi Semesta, saya ${customerName} baru saja membuat order dengan ID ${successOrderId}. Mohon segera diproses ya!`;
    window.open(`https://wa.me/6280000000000?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#F5EFE6] z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#E5D3B3] bg-white">
          <h2 className="text-xl font-bold text-[#3D2B1F] flex items-center gap-2">
            <ShoppingBag size={24} className="text-[#B36A5E]" />
            Keranjang Belanja
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-800">
            <X size={24} />
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-6">
          {successOrderId ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#3D2B1F] mb-2">Order Berhasil!</h3>
                <p className="text-[#3D2B1F]/70 mb-2">Terima kasih, pesanan Anda telah kami terima dengan nomor order:</p>
                <p className="text-2xl font-mono font-bold text-[#B36A5E] bg-white px-4 py-2 rounded-lg border border-[#E5D3B3] inline-block">{successOrderId}</p>
              </div>
              <p className="text-sm text-[#3D2B1F]/60 max-w-xs mb-2">
                {successMethod === "transfer" && "Admin kami akan memverifikasi bukti pembayaran Anda dalam 1x24 jam."}
                {successMethod === "qris" && "Pembayaran Anda telah berhasil diverifikasi secara otomatis."}
                {successMethod === "cash" && "Silakan menuju kasir untuk melakukan pembayaran saat mengambil pesanan."}
                {successMethod === "cod" && "Pesanan Anda akan segera diproses dan dikirim ke alamat tujuan."}
              </p>
              <p className="text-sm text-[#3D2B1F]/60 max-w-xs">
                Anda dapat mengkonfirmasi pesanan langsung via WhatsApp.
              </p>
              <button 
                onClick={handleWAConfirmation}
                className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4 shadow-lg shadow-green-500/20"
              >
                Konfirmasi via WhatsApp <ArrowRight size={18} />
              </button>
              <button 
                onClick={onClose}
                className="w-full border-2 border-[#D4A373] text-[#3D2B1F] font-bold py-3 rounded-xl hover:bg-[#D4A373] transition-colors"
              >
                Tutup
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#3D2B1F]/50 space-y-4">
              <ShoppingBag size={64} className="opacity-20" />
              <p className="text-lg">Keranjang Anda masih kosong</p>
              <button onClick={onClose} className="text-[#B36A5E] font-bold hover:underline mt-4">
                Mulai Belanja
              </button>
            </div>
          ) : isCheckingOut ? (
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-xl border border-[#E5D3B3]">
                <h3 className="font-bold text-[#3D2B1F] border-b border-[#E5D3B3] pb-2 mb-3">Ringkasan Order</h3>
                <div className="space-y-2 mb-3">
                  {cart.map(item => {
                    const product = products.find(p => p.id === item.productId);
                    if (!product) return null;
                    const itemPrice = product.price + (item.optionPrice || 0);
                    return (
                      <div key={item.cartItemId} className="flex justify-between text-sm">
                        <span className="text-[#3D2B1F]/70">
                          {item.quantity}x {product.name} 
                          {item.selectedSize && <span className="text-xs font-bold px-1 ml-2 bg-gray-200 text-gray-800 rounded">{item.selectedSize}</span>}
                          {item.options && item.options.length > 0 && <span className="text-xs text-opacity-50 italic block ml-5">{item.options.join(", ")}</span>}
                        </span>
                        <span className="font-medium text-[#3D2B1F]">Rp {(itemPrice * item.quantity).toLocaleString("id-ID")}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between font-bold text-lg text-[#B36A5E] border-t border-[#E5D3B3] pt-2">
                  <span>Total</span>
                  <span>Rp {getCartTotal().toLocaleString("id-ID")}</span>
                </div>
              </div>

              <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                <h3 className="font-bold text-[#3D2B1F]">Data Pemesan</h3>
                <div>
                  <label className="block text-sm font-medium text-[#3D2B1F]/70 mb-1">Nama Lengkap *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-[#E5D3B3] focus:outline-none focus:ring-2 focus:ring-[#B36A5E] bg-white"
                    placeholder="Contoh: Budi Santoso"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium opacity-70 mb-1">Nomor WhatsApp *</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 bg-white"
                    placeholder="Contoh: 08123456789"
                    value={customerWA}
                    onChange={e => setCustomerWA(e.target.value)}
                  />
                </div>
                {requiresShipping && (
                  <div>
                    <label className="block text-sm font-medium opacity-70 mb-1">Alamat Pengiriman Lengkap *</label>
                    <textarea 
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 bg-white"
                      placeholder="Jalan, RT/RW, Kelurahan, Kecamatan, Kota, Kode Pos"
                      value={shippingAddress}
                      onChange={e => setShippingAddress(e.target.value)}
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium opacity-70 mb-1">Catatan Tambahan (Opsional)</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-[#E5D3B3] focus:outline-none focus:ring-2 focus:ring-[#B36A5E] bg-white"
                    placeholder="Contoh: Esnya dipisah, gulanya dikit"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  />
                </div>
                
                <div className="pt-2 border-t border-[#E5D3B3]">
                  <PaymentMethodSelector 
                    selectedMethod={selectedMethod}
                    onSelectMethod={setSelectedMethod}
                    onProofUploaded={setPaymentProof}
                    onQrisVerified={setIsQrisVerified}
                    theme={theme}
                    availableMethods={requiresShipping ? ["transfer", "qris", "cod"] : ["transfer", "qris", "cash"]}
                  />
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => {
                const product = products.find(p => p.id === item.productId);
                if (!product) return null;
                
                return (
                  <div key={item.cartItemId} className="flex gap-4 bg-white p-3 rounded-xl border border-[#E5D3B3] shadow-sm">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-sm line-clamp-2 pr-2">{product.name}</h4>
                          {item.selectedSize && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 mt-1 inline-block bg-gray-200 text-gray-800 rounded">{item.selectedSize}</span>
                          )}
                          {item.options && item.options.length > 0 && (
                            <p className="text-[10px] opacity-60 mt-0.5 leading-tight">{item.options.join(", ")}</p>
                          )}
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                          title="Hapus"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="text-[#B36A5E] font-medium text-sm">
                        Rp {(product.price + (item.optionPrice || 0)).toLocaleString("id-ID")}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-[#F5EFE6] rounded-lg p-1">
                          <button 
                            onClick={() => updateCartQuantity(item.cartItemId, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#3D2B1F] hover:bg-white rounded transition-colors shadow-sm"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateCartQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-[#3D2B1F] hover:bg-white rounded transition-colors shadow-sm"
                            disabled={item.quantity >= product.stock}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="text-xs text-[#3D2B1F]/50">
                          Total: Rp {((product.price + (item.optionPrice || 0)) * item.quantity).toLocaleString("id-ID")}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Area */}
        {cart.length > 0 && !successOrderId && (
          <div className="border-t border-[#E5D3B3] p-6 bg-white shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.05)]">
            {!isCheckingOut && (
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#3D2B1F]/70 font-medium">Total Pembayaran</span>
                <span className="text-2xl font-bold text-[#B36A5E]">Rp {getCartTotal().toLocaleString("id-ID")}</span>
              </div>
            )}
            
            {isCheckingOut ? (
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsCheckingOut(false)}
                  className="flex-1 py-4 font-bold text-[#3D2B1F] border-2 border-[#D4A373] rounded-xl hover:bg-[#F5EFE6] transition-colors"
                >
                  Kembali
                </button>
                <button 
                  type="submit"
                  form="checkout-form"
                  className="flex-1 py-4 font-bold text-white bg-[#B36A5E] hover:bg-[#8F554A] rounded-xl transition-colors shadow-lg shadow-[#B36A5E]/20"
                >
                  Proses Order
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-4 font-bold text-[#3D2B1F] bg-[#D4A373] hover:bg-[#C29262] rounded-xl transition-colors shadow-lg shadow-[#D4A373]/20 flex items-center justify-center gap-2"
              >
                Lanjut ke Pembayaran <ArrowRight size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
