"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Gallery images from Unsplash - Bento Grid Layout (2 rows)
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80", alt: "Villa Exterior", span: "col-span-2 row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=800&q=80", alt: "Kolam Renang", span: "col-span-1 row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Kamar Tidur", span: "col-span-1 row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Living Room", span: "col-span-1 row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80", alt: "Villa Pemandangan", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-sky-50/50">
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
            Galeri
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 md:mt-3 mb-3 md:mb-4">
            Jelajahi Villa Kami
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Lihat keindahan dan kenyamanan villa kami melalui koleksi foto berikut.
          </p>
        </motion.div>

        {/* Bento Grid Gallery - 2 Rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 grid-rows-2 h-[280px] md:h-[400px] lg:h-[520px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{image.alt}</p>
              </div>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/villas">
              Lihat Semua Foto
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="aspect-video relative">
            {selectedImage && (
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ""}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ""}
                fill
                className="object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
