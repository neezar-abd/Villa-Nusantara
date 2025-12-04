"use client";

import { useState } from "react";
import { format, addDays, differenceInDays } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon, Users, Minus, Plus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Villa, formatRupiah, generateWhatsAppLink } from "@/lib/constants";

interface BookingWidgetProps {
  villa: Villa;
}

export default function BookingWidget({ villa }: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState<Date | undefined>(addDays(new Date(), 1));
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(new Date(), 3));
  const [guests, setGuests] = useState(2);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const subtotal = villa.harga * nights;
  const cleaningFee = 150000;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + cleaningFee + serviceFee;

  const handleGuestsChange = (delta: number) => {
    const newValue = guests + delta;
    if (newValue >= 1 && newValue <= villa.kapasitas) {
      setGuests(newValue);
    }
  };

  const handleCheckInSelect = (date: Date | undefined) => {
    setCheckIn(date);
    if (date && checkOut && date >= checkOut) {
      setCheckOut(addDays(date, 1));
    }
    setIsCheckInOpen(false);
  };

  const handleCheckOutSelect = (date: Date | undefined) => {
    setCheckOut(date);
    setIsCheckOutOpen(false);
  };

  const whatsappLink = generateWhatsAppLink(
    villa.nama,
    checkIn ? format(checkIn, "dd MMMM yyyy", { locale: id }) : "-",
    checkOut ? format(checkOut, "dd MMMM yyyy", { locale: id }) : "-",
    guests,
    formatRupiah(total)
  );

  return (
    <Card className="sticky top-24 border-0 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {formatRupiah(villa.harga)}
          </span>
          <span className="text-gray-500 font-normal text-base">/malam</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Date Selection */}
        <div className="grid grid-cols-2 gap-2">
          {/* Check In */}
          <Dialog open={isCheckInOpen} onOpenChange={setIsCheckInOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="h-auto py-3 px-4 justify-start text-left font-normal border-sky-200 hover:border-sky-400"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Check-in
                  </span>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-sky-500" />
                    <span className="text-sm font-medium">
                      {checkIn ? format(checkIn, "dd MMM", { locale: id }) : "Pilih"}
                    </span>
                  </div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 w-auto">
              <DialogHeader className="p-4 pb-0">
                <DialogTitle>Pilih Tanggal Check-in</DialogTitle>
              </DialogHeader>
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={handleCheckInSelect}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </DialogContent>
          </Dialog>

          {/* Check Out */}
          <Dialog open={isCheckOutOpen} onOpenChange={setIsCheckOutOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="h-auto py-3 px-4 justify-start text-left font-normal border-sky-200 hover:border-sky-400"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Check-out
                  </span>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-sky-500" />
                    <span className="text-sm font-medium">
                      {checkOut ? format(checkOut, "dd MMM", { locale: id }) : "Pilih"}
                    </span>
                  </div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0 w-auto">
              <DialogHeader className="p-4 pb-0">
                <DialogTitle>Pilih Tanggal Check-out</DialogTitle>
              </DialogHeader>
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={handleCheckOutSelect}
                disabled={(date) => date <= (checkIn || new Date())}
                initialFocus
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Guest Selection */}
        <div className="border border-sky-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-500" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Tamu</p>
                <p className="text-sm font-medium">{guests} orang</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-sky-200"
                onClick={() => handleGuestsChange(-1)}
                disabled={guests <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-medium">{guests}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-sky-200"
                onClick={() => handleGuestsChange(1)}
                disabled={guests >= villa.kapasitas}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Maksimal {villa.kapasitas} tamu
          </p>
        </div>

        {/* Pricing Summary */}
        {nights > 0 && (
          <div className="space-y-3 pt-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                {formatRupiah(villa.harga)} × {nights} malam
              </span>
              <span className="font-medium">{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Biaya kebersihan</span>
              <span className="font-medium">{formatRupiah(cleaningFee)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Biaya layanan</span>
              <span className="font-medium">{formatRupiah(serviceFee)}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg text-sky-600">
                {formatRupiah(total)}
              </span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6"
          disabled={nights <= 0}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Reservasi via WhatsApp
          </a>
        </Button>

        <p className="text-xs text-center text-gray-500">
          Anda belum akan dikenakan biaya. Reservasi akan dikonfirmasi via WhatsApp.
        </p>
      </CardContent>
    </Card>
  );
}
