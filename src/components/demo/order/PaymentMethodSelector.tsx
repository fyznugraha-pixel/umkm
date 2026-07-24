import React, { useState, useRef } from "react";
import { CreditCard, QrCode, Banknote, Upload, CheckCircle, Loader2 } from "lucide-react";

export type PaymentMethod = "transfer" | "qris" | "cash" | "cod";

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod | null;
  onSelectMethod: (method: PaymentMethod) => void;
  onProofUploaded: (base64: string) => void;
  onQrisVerified: (isVerified: boolean) => void;
  theme?: "coffee" | "fashion" | "barber";
  availableMethods?: PaymentMethod[];
}

export default function PaymentMethodSelector({
  selectedMethod,
  onSelectMethod,
  onProofUploaded,
  onQrisVerified,
  theme = "coffee",
  availableMethods = ["transfer", "qris", "cash"]
}: PaymentMethodSelectorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [isSimulatingQris, setIsSimulatingQris] = useState(false);
  const [qrisSuccess, setQrisSuccess] = useState(false);

  const getThemeColors = () => {
    switch (theme) {
      case "coffee": return { primary: "text-[#B36A5E]", bg: "bg-[#B36A5E]", active: "border-[#B36A5E] bg-orange-50", hover: "hover:border-[#D4A373]" };
      case "fashion": return { primary: "text-slate-900", bg: "bg-slate-900", active: "border-slate-900 bg-slate-50", hover: "hover:border-slate-400" };
      case "barber": return { primary: "text-[#D4AF37]", bg: "bg-[#1A1A1A]", active: "border-[#D4AF37] bg-stone-900 text-white", hover: "hover:border-[#D4AF37]/50" };
    }
  };
  const colors = getThemeColors();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setProofPreview(base64);
        onProofUploaded(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSimulateQris = () => {
    setIsSimulatingQris(true);
    // Simulate checking payment (fake delay)
    setTimeout(() => {
      setIsSimulatingQris(false);
      setQrisSuccess(true);
      onQrisVerified(true);
    }, 2500);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-2">Metode Pembayaran</h3>
      
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => { onSelectMethod("transfer"); setProofPreview(null); }}
          className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
            selectedMethod === "transfer" ? colors.active : `border-slate-200 ${colors.hover} bg-white`
          }`}
        >
          <CreditCard size={24} className={`mb-2 ${selectedMethod === "transfer" ? colors.primary : "text-slate-400"}`} />
          <span className={`text-xs font-bold text-center ${selectedMethod === "transfer" ? (theme === "barber" ? "text-white" : "text-slate-900") : "text-slate-500"}`}>Transfer Bank</span>
        </button>
        
        <button
          type="button"
          onClick={() => { onSelectMethod("qris"); setQrisSuccess(false); onQrisVerified(false); }}
          className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
            selectedMethod === "qris" ? colors.active : `border-slate-200 ${colors.hover} bg-white`
          }`}
        >
          <QrCode size={24} className={`mb-2 ${selectedMethod === "qris" ? colors.primary : "text-slate-400"}`} />
          <span className={`text-xs font-bold text-center ${selectedMethod === "qris" ? (theme === "barber" ? "text-white" : "text-slate-900") : "text-slate-500"}`}>QRIS</span>
        </button>

        {availableMethods.includes("cash") && (
          <button
            type="button"
            onClick={() => onSelectMethod("cash")}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
              selectedMethod === "cash" ? colors.active : `border-slate-200 ${colors.hover} bg-white`
            }`}
          >
            <Banknote size={24} className={`mb-2 ${selectedMethod === "cash" ? colors.primary : "text-slate-400"}`} />
            <span className={`text-xs font-bold text-center ${selectedMethod === "cash" ? (theme === "barber" ? "text-white" : "text-slate-900") : "text-slate-500"}`}>Bayar di Kasir</span>
          </button>
        )}

        {availableMethods.includes("cod") && (
          <button
            type="button"
            onClick={() => onSelectMethod("cod")}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
              selectedMethod === "cod" ? colors.active : `border-slate-200 ${colors.hover} bg-white`
            }`}
          >
            <Banknote size={24} className={`mb-2 ${selectedMethod === "cod" ? colors.primary : "text-slate-400"}`} />
            <span className={`text-xs font-bold text-center ${selectedMethod === "cod" ? (theme === "barber" ? "text-white" : "text-slate-900") : "text-slate-500"}`}>Bayar di Tempat (COD)</span>
          </button>
        )}
      </div>

      {/* --- OPSI A: TRANSFER BANK --- */}
      {selectedMethod === "transfer" && (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mb-4 text-sm text-slate-700">
            <p className="mb-2">Silakan transfer sesuai total tagihan ke rekening berikut:</p>
            <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-center justify-between">
              <div>
                <p className="font-bold text-lg tracking-wider text-slate-900">BCA 1234 567 890</p>
                <p className="text-xs text-slate-500">a.n. Bisnis Demo UMKM</p>
              </div>
              <div className="font-bold text-blue-800 text-xl italic">BCA</div>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-4">
            <p className="text-sm font-bold text-slate-900 mb-2">Upload Bukti Transfer <span className="text-red-500">*</span></p>
            
            {proofPreview ? (
              <div className="relative rounded-lg overflow-hidden border border-slate-200">
                <img src={proofPreview} alt="Bukti Transfer" className="w-full h-32 object-cover" />
                <button 
                  type="button"
                  onClick={() => { setProofPreview(null); onProofUploaded(""); }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold opacity-0 hover:opacity-100 transition-opacity"
                >
                  Ganti Foto
                </button>
              </div>
            ) : (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 hover:border-slate-400 transition-colors"
              >
                <Upload size={24} className="text-slate-400 mb-2" />
                <p className="text-xs text-slate-500 text-center">Klik untuk upload bukti pembayaran (JPG/PNG)</p>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            )}
            <p className="text-[10px] text-slate-400 mt-2 italic">*Simulasi: File hanya diproses di browser lokal Anda.</p>
          </div>
        </div>
      )}

      {/* --- OPSI B: QRIS --- */}
      {selectedMethod === "qris" && (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-4 animate-in fade-in slide-in-from-top-2 duration-300 flex flex-col items-center text-center">
          <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm mb-4">
            {/* Fake QRIS Image */}
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SIMULASI_QRIS_DEMO_UMKM" alt="QRIS Dummy" className="w-40 h-40" />
          </div>
          
          <p className="text-sm text-slate-700 font-medium mb-4">Scan QRIS menggunakan aplikasi E-Wallet atau M-Banking Anda.</p>
          
          {!qrisSuccess ? (
            <button
              type="button"
              onClick={handleSimulateQris}
              disabled={isSimulatingQris}
              className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
                isSimulatingQris ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/20"
              }`}
            >
              {isSimulatingQris ? (
                <><Loader2 size={18} className="animate-spin" /> Memeriksa pembayaran...</>
              ) : (
                "Saya Sudah Bayar"
              )}
            </button>
          ) : (
            <div className="w-full bg-green-50 border border-green-200 text-green-700 py-3 rounded-lg font-bold flex items-center justify-center gap-2 animate-in zoom-in duration-300">
              <CheckCircle size={20} /> Pembayaran Berhasil
            </div>
          )}
          
          <p className="text-[10px] text-slate-400 mt-4 leading-tight italic">
            *Simulasi untuk keperluan demo. Pada implementasi nyata, QRIS statis tetap memerlukan konfirmasi/pengecekan saldo mutasi secara manual oleh admin/kasir.
          </p>
        </div>
      )}

      {/* --- OPSI C: CASH DI KASIR --- */}
      {selectedMethod === "cash" && (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-4 animate-in fade-in slide-in-from-top-2 duration-300 flex items-start gap-4">
          <div className="bg-amber-100 text-amber-700 p-3 rounded-full shrink-0">
            <Banknote size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Bayar Saat Ambil (Dine-in / Takeaway)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Anda tidak perlu membayar sekarang. Pesanan Anda akan langsung kami siapkan, silakan bayar di kasir saat Anda tiba di lokasi.
            </p>
          </div>
        </div>
      )}

      {/* --- OPSI D: COD --- */}
      {selectedMethod === "cod" && (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-4 animate-in fade-in slide-in-from-top-2 duration-300 flex items-start gap-4">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-full shrink-0">
            <Banknote size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Bayar di Tempat (Cash on Delivery)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Anda tidak perlu transfer sekarang. Silakan siapkan uang pas untuk diserahkan ke kurir saat pesanan tiba di alamat Anda.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
