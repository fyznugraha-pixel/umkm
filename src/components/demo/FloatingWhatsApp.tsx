import React from "react";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  bgColor?: string;
  hoverColor?: string;
  label?: string;
}

export default function FloatingWhatsApp({ 
  phoneNumber, 
  message = "Halo",
  bgColor = "bg-[#25D366]",
  hoverColor = "hover:bg-[#20bd5a]",
  label
}: FloatingWhatsAppProps) {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-12 right-6 ${bgColor} ${hoverColor} text-white p-4 rounded-full shadow-lg transition-all hover:-translate-y-1 z-50 flex items-center justify-center gap-3`}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={28} />
      {label && <span className="font-bold tracking-wide pr-2 hidden md:block">{label}</span>}
    </a>
  );
}
