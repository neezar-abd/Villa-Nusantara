"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

// Extended testimonials for carousel
const extendedTestimonials = [
  ...testimonials,
  {
    id: 4,
    nama: "Maya Putri",
    asal: "Yogyakarta",
    rating: 5,
    komentar: "Pengalaman menginap yang luar biasa! Villa sangat bersih, pemandangan indah, dan staff yang sangat membantu. Akan kembali lagi!",
    tanggal: "Agustus 2024",
    villa: "Villa Tepi Pantai",
  },
  {
    id: 5,
    nama: "Rudi Hermawan",
    asal: "Medan",
    rating: 5,
    komentar: "Perfect untuk honeymoon! Suasana romantis, privasi terjaga, dan fasilitas lengkap. Highly recommended!",
    tanggal: "Juli 2024",
    villa: "Villa Bukit Hijau",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white overflow-hidden">
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
            Testimoni
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3 mb-3 md:mb-4">
            Kata Tamu Kami
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Dengarkan pengalaman para tamu yang telah menikmati liburan di villa kami.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex -translate-x-4 w-12 h-12 rounded-full shadow-lg bg-white hover:bg-sky-50 border-sky-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex translate-x-4 w-12 h-12 rounded-full shadow-lg bg-white hover:bg-sky-50 border-sky-100"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Embla Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_85%] min-w-0 pl-3 md:pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="h-full border-0 shadow-lg shadow-sky-100/50 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 mx-1 md:mx-2">
                    <CardContent className="p-4 md:p-6 lg:p-8 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <Quote className="w-10 h-10 text-sky-200" />
                        {/* Rating */}
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Comment */}
                      <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                        "{testimonial.komentar}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <Avatar className="w-12 h-12 ring-2 ring-sky-100">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.nama}`} />
                          <AvatarFallback className="bg-sky-100 text-sky-600 font-semibold">
                            {testimonial.nama.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-gray-900">
                              {testimonial.nama}
                            </p>
                            <BadgeCheck className="w-4 h-4 text-sky-500" />
                          </div>
                          <p className="text-sm text-gray-500">
                            {testimonial.asal} • {testimonial.villa}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-sky-500"
                    : "bg-sky-200 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
