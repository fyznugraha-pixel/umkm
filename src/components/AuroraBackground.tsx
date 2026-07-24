"use client";

import React from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  colorStops?: string[];
}

export default function AuroraBackground({
  colorStops = ["#3b82f6", "#8b5cf6", "#14b8a6"],
  className = "",
  ...props
}: AuroraBackgroundProps) {
  return (
    <div className={`relative flex flex-col min-h-screen w-full bg-slate-950 ${className}`} {...props}>
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -inset-[10px] opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 100% 0%, ${colorStops[0]} 0%, transparent 60%),
              radial-gradient(ellipse at 0% 100%, ${colorStops[1]} 0%, transparent 60%),
              radial-gradient(ellipse at 50% 50%, ${colorStops[2]} 0%, transparent 60%)
            `,
            filter: "blur(80px)",
            animation: "aurora 20s ease-in-out infinite alternate"
          }}
        />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes aurora {
            0% { transform: scale(1) translate(0, 0); }
            33% { transform: scale(1.1) translate(5%, -5%); }
            66% { transform: scale(1.05) translate(-5%, 5%); }
            100% { transform: scale(1) translate(0, 0); }
          }
        `}} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 w-full">
        {props.children}
      </div>
    </div>
  );
}
