"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Mountain, HeartHandshake } from "lucide-react";
import { features } from "@/lib/constants";

const iconMap: { [key: string]: React.ElementType } = {
  MapPin,
  Sparkles,
  Mountain,
  HeartHandshake,
};

export default function Features() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
        >
          <span className="text-sky-500 font-medium text-xs md:text-sm uppercase tracking-wider">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3 mb-2 md:mb-4">
            Pengalaman Menginap Terbaik
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Kami berkomitmen memberikan pengalaman liburan yang tak terlupakan
            dengan layanan dan fasilitas terbaik.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-3 md:p-6 rounded-xl md:rounded-2xl hover:bg-sky-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-5 rounded-xl md:rounded-2xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-500 transition-colors duration-300">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-sky-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-1 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
