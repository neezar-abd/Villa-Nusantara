"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon, Users, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function HeroBookingWidget() {
  const [checkIn, setCheckIn] = useState<Date | undefined>(addDays(new Date(), 1));
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(new Date(), 3));
  const [guests, setGuests] = useState(2);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const handleSearch = () => {
    // Navigate to villas page with search params
    const params = new URLSearchParams({
      checkIn: checkIn ? format(checkIn, "yyyy-MM-dd") : "",
      checkOut: checkOut ? format(checkOut, "yyyy-MM-dd") : "",
      guests: guests.toString(),
    });
    window.location.href = `/villas?${params.toString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="w-full max-w-4xl mx-auto mt-4 md:mt-8 px-2 md:px-0"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl shadow-2xl p-2">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-2">
          {/* Check In */}
          <Dialog open={isCheckInOpen} onOpenChange={setIsCheckInOpen}>
            <DialogTrigger asChild>
              <button className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3 p-2 md:p-4 rounded-lg md:rounded-xl hover:bg-sky-50 transition-colors text-center md:text-left group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-sky-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Check-in</p>
                  <p className="text-xs md:text-sm font-semibold text-gray-900 truncate">
                    {checkIn ? format(checkIn, "dd MMM", { locale: id }) : "Pilih"}
                  </p>
                </div>
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hidden md:block" />
              </button>
            </DialogTrigger>
            <DialogContent className="p-0 w-auto">
              <DialogHeader className="p-4 pb-0">
                <DialogTitle>Pilih Tanggal Check-in</DialogTitle>
              </DialogHeader>
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={(date) => {
                  setCheckIn(date);
                  if (date && checkOut && date >= checkOut) {
                    setCheckOut(addDays(date, 1));
                  }
                  setIsCheckInOpen(false);
                }}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </DialogContent>
          </Dialog>

          {/* Check Out */}
          <Dialog open={isCheckOutOpen} onOpenChange={setIsCheckOutOpen}>
            <DialogTrigger asChild>
              <button className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3 p-2 md:p-4 rounded-lg md:rounded-xl hover:bg-sky-50 transition-colors text-center md:text-left group md:border-l border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-sky-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Check-out</p>
                  <p className="text-xs md:text-sm font-semibold text-gray-900 truncate">
                    {checkOut ? format(checkOut, "dd MMM", { locale: id }) : "Pilih"}
                  </p>
                </div>
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hidden md:block" />
              </button>
            </DialogTrigger>
            <DialogContent className="p-0 w-auto">
              <DialogHeader className="p-4 pb-0">
                <DialogTitle>Pilih Tanggal Check-out</DialogTitle>
              </DialogHeader>
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={(date) => {
                  setCheckOut(date);
                  setIsCheckOutOpen(false);
                }}
                disabled={(date) => date <= (checkIn || new Date())}
                initialFocus
              />
            </DialogContent>
          </Dialog>

          {/* Guests */}
          <Dialog open={isGuestOpen} onOpenChange={setIsGuestOpen}>
            <DialogTrigger asChild>
              <button className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3 p-2 md:p-4 rounded-lg md:rounded-xl hover:bg-sky-50 transition-colors text-center md:text-left group md:border-l border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-sky-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">Tamu</p>
                  <p className="text-xs md:text-sm font-semibold text-gray-900 truncate">
                    {guests} Org
                  </p>
                </div>
                <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hidden md:block" />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[300px]">
              <DialogHeader>
                <DialogTitle>Jumlah Tamu</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Tamu</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      disabled={guests <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center font-semibold text-lg">{guests}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      disabled={guests >= 10}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6 bg-sky-500 hover:bg-sky-600"
                  onClick={() => setIsGuestOpen(false)}
                >
                  Selesai
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Search Button */}
          <div className="col-span-3 md:col-span-1 p-1 md:p-2">
            <Button
              onClick={handleSearch}
              className="w-full h-12 md:h-full md:min-h-[64px] bg-sky-500 hover:bg-sky-600 text-white rounded-lg md:rounded-xl text-sm md:text-base font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Cari Villa
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
