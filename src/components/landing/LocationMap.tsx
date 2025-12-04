"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Plane, 
  Car, 
  UtensilsCrossed,
  ShoppingBag,
  Waves,
  TreePalm,
  Mountain
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const nearbyAttractions = [
  {
    name: "Pantai Kuta",
    distance: "15 menit",
    icon: Waves,
    type: "Pantai",
  },
  {
    name: "Ubud Palace",
    distance: "30 menit",
    icon: TreePalm,
    type: "Wisata Budaya",
  },
  {
    name: "Tegallalang Rice Terrace",
    distance: "25 menit",
    icon: Mountain,
    type: "Alam",
  },
  {
    name: "Beachwalk Mall",
    distance: "20 menit",
    icon: ShoppingBag,
    type: "Belanja",
  },
  {
    name: "Restoran Bebek Bengil",
    distance: "10 menit",
    icon: UtensilsCrossed,
    type: "Kuliner",
  },
  {
    name: "Bandara Ngurah Rai",
    distance: "45 menit",
    icon: Plane,
    type: "Transportasi",
  },
];

const features = [
  { icon: Clock, text: "Check-in 24 Jam" },
  { icon: Car, text: "Parkir Gratis" },
  { icon: Navigation, text: "Akses Mudah" },
];

export default function LocationMap() {
  return (
    <section className="py-12 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-12"
        >
          <span className="text-sky-500 font-medium text-xs md:text-sm uppercase tracking-wider">
            Lokasi Strategis
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 md:mt-3 mb-3 md:mb-4">
            Lokasi Villa Kami
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Terletak di lokasi premium dengan akses mudah ke berbagai destinasi wisata populer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden border-0 shadow-lg h-full">
              <div className="relative h-[280px] md:h-[400px] lg:h-full min-h-[280px] md:min-h-[400px] bg-sky-50">
                {/* Map Placeholder with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-200">
                  {/* Decorative Map Grid */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-sky-400"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Decorative Map Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Ripple Effect */}
                      <div className="absolute -inset-8 animate-ping opacity-20 bg-sky-500 rounded-full" />
                      <div className="absolute -inset-4 animate-pulse opacity-40 bg-sky-400 rounded-full" />
                      
                      {/* Center Pin */}
                      <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-sky-500 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/50">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Mock Location Labels - Hidden on mobile */}
                  <div className="hidden md:block absolute top-1/4 left-1/4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md text-sm font-medium text-gray-700">
                    🏖️ Pantai Kuta
                  </div>
                  <div className="hidden md:block absolute top-1/3 right-1/4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md text-sm font-medium text-gray-700">
                    🛕 Ubud
                  </div>
                  <div className="hidden md:block absolute bottom-1/4 left-1/3 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md text-sm font-medium text-gray-700">
                    ✈️ Bandara
                  </div>
                  <div className="hidden md:block absolute bottom-1/3 right-1/3 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md text-sm font-medium text-gray-700">
                    🌴 Seminyak
                  </div>
                </div>

                {/* Address Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                  <div className="flex items-start gap-2 md:gap-3 text-white">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm md:text-base">Villa Indah Bali</p>
                      <p className="text-white/80 text-xs md:text-sm">
                        Jl. Sunset Road No. 88, Seminyak, Bali
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Nearby Attractions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 md:space-y-4"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-3 md:mb-4 flex items-center gap-2">
                  <Navigation className="w-4 h-4 md:w-5 md:h-5 text-sky-500" />
                  Tempat Terdekat
                </h3>
                
                <div className="space-y-2 md:space-y-3">
                  {nearbyAttractions.slice(0, 4).map((attraction, index) => (
                    <motion.div
                      key={attraction.name}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-sky-50 transition-colors group"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0 group-hover:bg-sky-200 transition-colors">
                        <attraction.icon className="w-4 h-4 md:w-5 md:h-5 text-sky-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate text-sm md:text-base">{attraction.name}</p>
                        <p className="text-xs md:text-sm text-gray-500">{attraction.type}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-sky-600 border-sky-200 text-[10px] md:text-xs px-1.5 md:px-2">
                        {attraction.distance}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Features */}
            <Card className="border-0 shadow-lg bg-sky-500 text-white">
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 md:mb-2 rounded-full bg-white/20 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <p className="text-[10px] md:text-xs font-medium">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button 
              className="w-full bg-white text-sky-600 hover:bg-sky-50 border-2 border-sky-500 font-semibold py-4 md:py-6 text-sm md:text-base"
              onClick={() => window.open("https://maps.google.com", "_blank")}
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
              Buka di Google Maps
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
