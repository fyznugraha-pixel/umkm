import React from "react";

export default function MapEmbed({ src }: { src: string }) {
  return (
    <div className="w-full aspect-video md:aspect-[21/9] bg-[#E5D3B3] rounded-2xl overflow-hidden relative border border-[#E5D3B3]">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>
    </div>
  );
}
