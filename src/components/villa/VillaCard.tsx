"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  BedDouble, 
  MapPin, 
  Heart, 
  Star, 
  Eye, 
  Wifi, 
  Car, 
  UtensilsCrossed,
  Waves
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Villa, formatRupiah } from "@/lib/constants";

interface VillaCardProps {
  villa: Villa;
  index?: number;
}

const amenityIcons: Record<string, React.ReactNode> = {
  "WiFi Gratis": <Wifi className="w-3.5 h-3.5" />,
  "Parkir Luas": <Car className="w-3.5 h-3.5" />,
  "Dapur Lengkap": <UtensilsCrossed className="w-3.5 h-3.5" />,
  "Kolam Renang Pribadi": <Waves className="w-3.5 h-3.5" />,
};

export default function VillaCard({ villa, index = 0 }: VillaCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const rating = 4.8 + (index * 0.1); // Dummy rating
  const reviewCount = 24 + (index * 12); // Dummy review count
  const isPopular = index === 0; // First villa is popular

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
        {/* Image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={villa.gambar[0]}
            alt={villa.nama}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Top Badges */}
          <div className="absolute top-2 md:top-4 left-2 md:left-4 flex flex-col gap-1 md:gap-2">
            {isPopular && (
              <Badge className="bg-orange-500 text-white font-medium text-[10px] md:text-xs px-2 py-0.5">
                🔥 Populer
              </Badge>
            )}
            <Badge className="bg-white/90 backdrop-blur-sm text-sky-600 font-semibold text-[10px] md:text-xs px-2 py-0.5">
              {formatRupiah(villa.harga)}/malam
            </Badge>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-2 md:top-4 right-2 md:right-4 w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
          >
            <Heart
              className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                isWishlisted 
                  ? "text-red-500 fill-red-500" 
                  : "text-gray-600 hover:text-red-500"
              }`}
            />
          </button>

          {/* Quick View Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white/90 backdrop-blur-sm hover:bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Eye className="w-4 h-4 mr-2" />
                Lihat Cepat
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{villa.nama}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src={villa.gambar[0]}
                    alt={villa.nama}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-500" />
                    <span className="text-gray-600">{villa.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{rating.toFixed(1)}</span>
                    <span className="text-gray-500">({reviewCount} ulasan)</span>
                  </div>
                  <p className="text-gray-600 text-sm">{villa.deskripsi}</p>
                  <div className="flex flex-wrap gap-2">
                    {villa.fasilitas.slice(0, 4).map((fas) => (
                      <Badge key={fas} variant="outline" className="text-xs">
                        {fas}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-2xl font-bold text-sky-600">
                      {formatRupiah(villa.harga)}
                      <span className="text-sm font-normal text-gray-500">/malam</span>
                    </p>
                  </div>
                  <Button asChild className="w-full bg-sky-500 hover:bg-sky-600">
                    <Link href={`/villas/${villa.id}`}>Lihat Detail Lengkap</Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <CardContent className="p-3 md:p-5">
          {/* Rating & Location */}
          <div className="flex items-center justify-between mb-1.5 md:mb-2">
            <div className="flex items-center gap-1 md:gap-1.5 text-gray-500 text-xs md:text-sm">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-sky-500 flex-shrink-0" />
              <span className="truncate max-w-[100px] md:max-w-none">{villa.lokasi}</span>
            </div>
            <div className="flex items-center gap-0.5 md:gap-1">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-xs md:text-sm">{rating.toFixed(1)}</span>
              <span className="text-gray-400 text-[10px] md:text-xs">({reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2 group-hover:text-sky-600 transition-colors line-clamp-1">
            {villa.nama}
          </h3>

          {/* Specs */}
          <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3 text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-1 md:gap-1.5">
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              <span>{villa.kapasitas} Tamu</span>
            </div>
            <div className="flex items-center gap-1 md:gap-1.5">
              <BedDouble className="w-3 h-3 md:w-4 md:h-4" />
              <span>{villa.kamar} Kamar</span>
            </div>
          </div>

          {/* Quick Amenities */}
          <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
            {villa.fasilitas.slice(0, 3).map((fas) => (
              <span 
                key={fas} 
                className="inline-flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs text-gray-500 bg-gray-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full"
              >
                <span className="hidden md:inline">{amenityIcons[fas] || null}</span>
                {fas}
              </span>
            ))}
            {villa.fasilitas.length > 3 && (
              <span className="text-[10px] md:text-xs text-sky-500 px-1.5 md:px-2 py-0.5 md:py-1">
                +{villa.fasilitas.length - 3}
              </span>
            )}
          </div>

          {/* CTA */}
          <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white text-xs md:text-sm h-8 md:h-10">
            <Link href={`/villas/${villa.id}`}>Lihat Detail</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
