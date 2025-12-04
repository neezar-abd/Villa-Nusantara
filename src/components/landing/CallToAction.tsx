"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function CallToAction() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo, saya tertarik untuk mengetahui lebih lanjut tentang villa Anda. Bisakah Anda memberikan informasi lebih detail?"
  )}`;

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-sky-600 via-sky-500 to-sky-400 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-white/5" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-white/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
            Siap Untuk Liburan Impian Anda?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-10 leading-relaxed">
            Jangan tunda lagi! Hubungi kami sekarang untuk mendapatkan penawaran
            terbaik dan jadikan liburan Anda tak terlupakan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-600 hover:bg-sky-50 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold"
            >
              <Link href="/villas">
                Lihat Villa
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 border-2 border-white text-white hover:bg-white/20 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold backdrop-blur-sm"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white">500+</span>
              <span className="text-xs md:text-sm">Tamu Puas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white">4.9</span>
              <span className="text-xs md:text-sm">Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white">24/7</span>
              <span className="text-xs md:text-sm">Layanan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
