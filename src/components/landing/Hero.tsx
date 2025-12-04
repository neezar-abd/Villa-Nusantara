"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Play } from "lucide-react";
import HeroBookingWidget from "./HeroBookingWidget";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 pb-8 md:pt-20 md:pb-12">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1920&q=80"
          alt="Villa dengan kolam renang"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sky-200 text-sm font-medium mb-6 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Villa Tersedia untuk Booking
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight"
          >
            Nikmati Ketenangan
            <br />
            <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
              di Villa Kami
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-4 leading-relaxed max-w-2xl mx-auto px-4 md:px-0"
          >
            Temukan pengalaman liburan tak terlupakan dengan pemandangan alam
            yang memukau, fasilitas premium, dan pelayanan terbaik.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-6 md:mb-8 text-white/60 text-xs md:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5 md:-space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 border-2 border-white/20" />
                ))}
              </div>
              <span>500+ Tamu</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★★★★★</span>
              <span>4.9</span>
            </div>
          </motion.div>

          {/* Hero Booking Widget */}
          <HeroBookingWidget />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
