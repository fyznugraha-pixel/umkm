import React from "react";

interface MarqueeProps {
  text: string;
  speed?: number; // Duration in seconds
}

export default function Marquee({ text, speed = 20 }: MarqueeProps) {
  // A simple marquee using Tailwind arbitrary values for animation
  return (
    <div className="w-full bg-[#B36A5E] text-white py-2 overflow-hidden flex whitespace-nowrap">
      <div 
        className="animate-marquee inline-block text-sm font-bold tracking-widest uppercase"
        style={{ animationDuration: `${speed}s`, animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
      >
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-yellow-300">•</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-yellow-300">•</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-yellow-300">•</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4 text-yellow-300">•</span>
      </div>
      {/* We need global css for the keyframes, but since we can't easily inject keyframes here,
          we'll use a hack with standard tailwind if possible, or just standard inline style. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
        }
      `}} />
    </div>
  );
}
