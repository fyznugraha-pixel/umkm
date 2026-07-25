export interface OrderDesignTokens {
  radius: string;
  shadow: string;
  surfaceBg: string;
  borderStyle: string;
  borderColor: string;
  primaryColor: string;
  primaryBg: string;
  textColor: string;
  activeCardBg: string;
  iconStyle: "organic" | "outline" | "solid";
  copyTone: {
    uploadProof: string;
    uploading: string;
    uploaded: string;
    qrisTitle: string;
    qrisDesc: string;
    qrisSimulate: string;
    qrisSuccess: string;
    checking: string;
  };
}

export const defaultCoffeeTokens: OrderDesignTokens = {
  radius: "rounded-2xl",
  shadow: "shadow-xl shadow-amber-900/10",
  surfaceBg: "bg-white",
  borderStyle: "border-dashed border-2",
  borderColor: "border-[#E5D3B3]",
  primaryColor: "text-[#B36A5E]",
  primaryBg: "bg-[#B36A5E]",
  textColor: "text-[#3D2B1F]",
  activeCardBg: "bg-orange-50",
  iconStyle: "organic",
  copyTone: {
    uploadProof: "Upload Bukti Transfer",
    uploading: "Sedang mengunggah...",
    uploaded: "Bukti terunggah!",
    qrisTitle: "Scan QRIS",
    qrisDesc: "Buka aplikasi M-Banking atau E-Wallet kamu dan scan QR Code di bawah ya.",
    qrisSimulate: "Simulasikan Pembayaran QRIS",
    qrisSuccess: "Yay! Pembayaran Berhasil",
    checking: "Mengecek dana masuk...",
  }
};

export const defaultFashionTokens: OrderDesignTokens = {
  radius: "rounded-none",
  shadow: "shadow-none",
  surfaceBg: "bg-white",
  borderStyle: "border-solid border-[1px]",
  borderColor: "border-gray-200",
  primaryColor: "text-[#111111]",
  primaryBg: "bg-[#111111]",
  textColor: "text-[#111111]",
  activeCardBg: "bg-gray-50",
  iconStyle: "outline",
  copyTone: {
    uploadProof: "Unggah Bukti",
    uploading: "Mengunggah",
    uploaded: "Bukti Diterima",
    qrisTitle: "Pembayaran QRIS",
    qrisDesc: "Scan kode QRIS menggunakan aplikasi pembayaran pilihan Anda.",
    qrisSimulate: "Simulasi Bayar QRIS",
    qrisSuccess: "Pembayaran Terverifikasi",
    checking: "Verifikasi...",
  }
};

export const defaultBarberTokens: OrderDesignTokens = {
  radius: "rounded-sm",
  shadow: "shadow-2xl shadow-black/50",
  surfaceBg: "bg-[#1A1A1A]",
  borderStyle: "border-solid border-2",
  borderColor: "border-[#333333]",
  primaryColor: "text-[#E63946]",
  primaryBg: "bg-[#E63946]",
  textColor: "text-gray-300",
  activeCardBg: "bg-zinc-900",
  iconStyle: "solid",
  copyTone: {
    uploadProof: "Upload Struk",
    uploading: "Uploading...",
    uploaded: "Struk OK",
    qrisTitle: "Scan QRIS",
    qrisDesc: "Scan menggunakan E-Wallet untuk menyelesaikan booking.",
    qrisSimulate: "Simulasi Bayar",
    qrisSuccess: "Pembayaran OK",
    checking: "Validasi...",
  }
};
