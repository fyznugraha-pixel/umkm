"use client";

import React from "react";
import { Service } from "./BookingContext";
import { Check } from "lucide-react";

interface ServiceSelectionProps {
  services: Service[];
  selectedServiceIds: string[];
  onToggleService: (id: string) => void;
}

export default function ServiceSelection({ services, selectedServiceIds, onToggleService }: ServiceSelectionProps) {
  // Group services by category
  const categories = Array.from(new Set(services.map(s => s.category)));

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Pilih Layanan</h2>
        <p className="text-slate-600">Pilih satu atau beberapa layanan yang Anda inginkan.</p>
      </div>

      {categories.map(category => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-2">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.filter(s => s.category === category).map(service => {
              const isSelected = selectedServiceIds.includes(service.id);
              
              return (
                <div 
                  key={service.id}
                  onClick={() => onToggleService(service.id)}
                  className={`
                    relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                    ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-blue-300'}
                  `}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-bold ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                      {service.name}
                    </h4>
                    <div className={`
                      w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ml-4
                      ${isSelected ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-300'}
                    `}>
                      {isSelected && <Check size={14} strokeWidth={3} />}
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <span className="font-bold text-slate-900">
                      Rp {service.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {service.durationMinutes} mnt
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
