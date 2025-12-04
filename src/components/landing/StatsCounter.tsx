"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Star, Home, Award } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Tamu Puas",
    description: "Telah menginap di villa kami",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Rating",
    description: "Dari 200+ ulasan tamu",
    isDecimal: true,
  },
  {
    icon: Home,
    value: 3,
    suffix: "",
    label: "Villa Premium",
    description: "Siap untuk Anda",
  },
  {
    icon: Award,
    value: 5,
    suffix: " Tahun",
    label: "Pengalaman",
    description: "Melayani tamu dari berbagai negara",
  },
];

export default function StatsCounter() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sky-50 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-sky-50 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-xl md:rounded-2xl bg-sky-100 flex items-center justify-center group-hover:bg-sky-500 transition-colors duration-300">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-sky-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-0.5 md:mb-1">
                {stat.isDecimal ? (
                  <span>{stat.value}</span>
                ) : (
                  <Counter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm md:text-lg font-semibold text-gray-800 mb-0.5 md:mb-1">
                {stat.label}
              </div>
              <p className="text-xs md:text-sm text-gray-500 hidden md:block">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
