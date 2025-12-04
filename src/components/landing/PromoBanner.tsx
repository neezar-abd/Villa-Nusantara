"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, Percent, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 2;
          hours = 14;
          minutes = 32;
          seconds = 45;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-linear-to-r from-sky-600 via-sky-500 to-cyan-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Promo Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-4 text-center md:text-left"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-[10px] md:text-xs font-bold rounded-full">
                  PROMO
                </span>
                <span className="text-white/80 text-xs md:text-sm">Penawaran Terbatas</span>
              </div>
              <h3 className="text-base md:text-2xl font-bold text-white">
                Diskon 25% Minggu Ini!
              </h3>
              <p className="text-white/70 text-xs md:text-sm mt-1">
                Kode: <span className="font-mono font-bold text-white bg-white/20 px-1.5 md:px-2 py-0.5 rounded text-xs md:text-sm">VILLA25</span>
              </p>
            </div>
          </motion.div>

          {/* Center - Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 md:gap-3"
          >
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-white/80 hidden sm:block" />
            <div className="flex items-center gap-1 md:gap-2">
              {[
                { label: "Hari", value: timeLeft.days },
                { label: "Jam", value: timeLeft.hours },
                { label: "Menit", value: timeLeft.minutes },
                { label: "Detik", value: timeLeft.seconds },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-1 md:gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1.5 md:py-2 min-w-[40px] md:min-w-[56px] text-center">
                    <span className="text-base md:text-2xl font-bold text-white font-mono">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <p className="text-[8px] md:text-[10px] text-white/70 uppercase tracking-wide">
                      {item.label}
                    </p>
                  </div>
                  {i < 3 && <span className="text-white/50 text-sm md:text-xl font-bold">:</span>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-white text-sky-600 hover:bg-sky-50 font-semibold shadow-lg shadow-sky-900/20 group text-sm md:text-base h-10 md:h-11"
            >
              <Link href="/villas">
                Booking Sekarang
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
