"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Service = {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  category: string;
  description: string;
  image?: string;
};

export type TimeSlot = {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  isAvailable: boolean;
};

export type Booking = {
  id: string;
  customerName: string;
  customerPhone: string;
  notes?: string;
  serviceIds: string[];
  totalPrice: number;
  bookingDate: string; // YYYY-MM-DD
  bookingTime: string; // HH:mm
  paymentMethod: "transfer" | "qris" | "cash";
  status: string; // "menunggu_verifikasi", "dikonfirmasi", "terjadwal", "selesai"
  paymentProof?: string;
  createdAt: string;
};

interface BookingContextType {
  services: Service[];
  slots: TimeSlot[];
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, "id" | "createdAt" | "status"> & { status?: string }) => void;
  updateBookingStatus: (id: string, status: string) => void;
  updateSlotAvailability: (date: string, time: string, isAvailable: boolean) => void;
  resetDemoData: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

// Generate dummy slots for the next 7 days
function generateSeedSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "19:00", "20:00"]; // Missing some times for break
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dateStr = d.toISOString().split("T")[0];
    
    for (const t of times) {
      // Simulate some slots being already taken
      const isAvailable = Math.random() > 0.2; 
      slots.push({ date: dateStr, time: t, isAvailable });
    }
  }
  return slots;
}

// Initial services (Mock Data)
export const SEED_SERVICES: Service[] = [
  { id: "svc-1", name: "Premium Haircut", price: 70000, durationMinutes: 45, category: "Potong Rambut", description: "Potong presisi, cuci air hangat, pijat ringan, dan styling pomade.", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600" },
  { id: "svc-2", name: "Classic Cut", price: 50000, durationMinutes: 30, category: "Potong Rambut", description: "Potong rambut dan styling standar.", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600" },
  { id: "svc-3", name: "Kids Cut", price: 50000, durationMinutes: 30, category: "Potong Rambut", description: "Potongan khusus anak-anak di bawah 12 tahun yang sabar dan aman.", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600" },
  { id: "svc-4", name: "Hot Towel Shave", price: 50000, durationMinutes: 30, category: "Grooming", description: "Cukur jenggot & kumis dengan handuk hangat dan krim cukur premium.", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600" },
  { id: "svc-5", name: "Full Grooming", price: 150000, durationMinutes: 90, category: "Grooming", description: "Haircut, Shaving, Hair Spa, pijat kepala/pundak, serta black mask.", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600" },
  { id: "svc-6", name: "Hair Coloring", price: 180000, durationMinutes: 120, category: "Perawatan", description: "Pewarnaan rambut (Bleach / Non-bleach) dengan produk profesional.", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600" },
  { id: "svc-7", name: "Creambath", price: 60000, durationMinutes: 45, category: "Perawatan", description: "Perawatan kulit kepala dengan cream nutrisi dan pijat relaksasi mendalam.", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600" },
];

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<Service[]>(SEED_SERVICES);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Load from local storage
    const storedSlots = localStorage.getItem("demo_rapi_slots");
    const storedBookings = localStorage.getItem("demo_rapi_bookings");

    if (storedSlots && storedBookings) {
      setSlots(JSON.parse(storedSlots));
      setBookings(JSON.parse(storedBookings));
    } else {
      setSlots(generateSeedSlots());
      // Add a dummy booking
      setBookings([
        {
          id: "BKG-1001",
          customerName: "Budi Santoso",
          customerPhone: "081234567890",
          serviceIds: ["svc-1", "svc-4"],
          totalPrice: 95000,
          bookingDate: new Date().toISOString().split("T")[0],
          bookingTime: "10:00",
          paymentMethod: "transfer",
          status: "menunggu_verifikasi",
          createdAt: new Date(Date.now() - 3600000).toISOString(),
        }
      ]);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("demo_rapi_slots", JSON.stringify(slots));
      localStorage.setItem("demo_rapi_bookings", JSON.stringify(bookings));
    }
  }, [slots, bookings, isInitialized]);

  const addBooking = (newBooking: Omit<Booking, "id" | "createdAt" | "status"> & { status?: string }) => {
    const booking: Booking = {
      ...newBooking,
      id: `BKG-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: newBooking.status || (newBooking.paymentMethod === "cash" ? "terjadwal" : "menunggu_verifikasi")
    };

    setBookings((prev) => [booking, ...prev]);

    // Simplified scheduling logic: 1 slot = 1 booking capacity. 
    // Service duration does not affect slot availability in this demo.
    setSlots((prev) => 
      prev.map(slot => 
        (slot.date === newBooking.bookingDate && slot.time === newBooking.bookingTime) 
          ? { ...slot, isAvailable: false } 
          : slot
      )
    );
  };

  const updateBookingStatus = (id: string, status: string) => {
    setBookings((prev) => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const updateSlotAvailability = (date: string, time: string, isAvailable: boolean) => {
    setSlots((prev) => prev.map(s => (s.date === date && s.time === time) ? { ...s, isAvailable } : s));
  };

  const resetDemoData = () => {
    localStorage.removeItem("demo_rapi_slots");
    localStorage.removeItem("demo_rapi_bookings");
    setSlots(generateSeedSlots());
    setBookings([]);
  };

  return (
    <BookingContext.Provider value={{ services, slots, bookings, addBooking, updateBookingStatus, updateSlotAvailability, resetDemoData }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
