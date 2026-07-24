import React from "react";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="demo-layout">
      {/* 
        This is a placeholder for demo sites. 
        It has no branding to ensure the demo looks like the client's actual site. 
      */}
      {children}
    </div>
  );
}
