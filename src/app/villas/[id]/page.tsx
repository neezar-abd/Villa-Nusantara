"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";
import {
  MapPin,
  Users,
  BedDouble,
  Bath,
  Maximize,
  Wifi,
  Wind,
  Car,
  Tv,
  UtensilsCrossed,
  Waves,
  TreePine,
  Check,
} from "lucide-react";
import { villas, formatRupiah } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BookingWidget from "@/components/reservation/BookingWidget";

// Icon mapping for amenities
const amenityIcons: { [key: string]: React.ElementType } = {
  "WiFi Gratis": Wifi,
  "AC": Wind,
  "Parkir Gratis": Car,
  "TV Smart 55\"": Tv,
  "TV Smart 50\"": Tv,
  "TV Smart 43\"": Tv,
  "Dapur Lengkap": UtensilsCrossed,
  "Kolam Renang Pribadi": Waves,
  "Taman Tropis": TreePine,
  "Taman Pribadi": TreePine,
};

interface VillaDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function VillaDetailPage({ params }: VillaDetailPageProps) {
  const { id } = use(params);
  const villa = villas.find((v) => v.id === id);

  if (!villa) {
    notFound();
  }

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-20">
      <div className="container mx-auto px-4">
        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Main Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 rounded-2xl overflow-hidden">
            {/* Main Image */}
            <div className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto relative min-h-[300px]">
              <Image
                src={villa.gambar[0]}
                alt={villa.nama}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Side Images */}
            {villa.gambar.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="hidden md:block aspect-[4/3] relative"
              >
                <Image
                  src={img}
                  alt={`${villa.nama} - ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-sky-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{villa.lokasi}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {villa.nama}
              </h1>

              {/* Quick Specs */}
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-sky-500" />
                  <span>{villa.kapasitas} Tamu</span>
                </div>
                <div className="flex items-center gap-2">
                  <BedDouble className="w-5 h-5 text-sky-500" />
                  <span>{villa.kamar} Kamar Tidur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-sky-500" />
                  <span>{villa.kamarMandi} Kamar Mandi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-sky-500" />
                  <span>{villa.luas} m²</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Tentang Villa Ini
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {villa.deskripsi}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Villa ini dilengkapi dengan berbagai fasilitas modern untuk kenyamanan Anda.
                Lokasi yang strategis memudahkan Anda untuk mengeksplorasi berbagai destinasi
                wisata di sekitar. Tim kami siap membantu Anda 24 jam untuk memastikan
                pengalaman menginap yang tak terlupakan.
              </p>
            </div>

            <Separator />

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Fasilitas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {villa.fasilitas.map((item, index) => {
                  const Icon = amenityIcons[item] || Check;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-sky-50"
                    >
                      <Icon className="w-5 h-5 text-sky-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Separator />

            {/* House Rules - Placeholder */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Peraturan Villa
              </h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5">Check-in</Badge>
                  <span>14:00 - 22:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5">Check-out</Badge>
                  <span>Sebelum 12:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5">Info</Badge>
                  <span>Tidak diperbolehkan merokok di dalam villa</span>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5">Info</Badge>
                  <span>Hewan peliharaan tidak diperbolehkan</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar - Booking Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <BookingWidget villa={villa} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
