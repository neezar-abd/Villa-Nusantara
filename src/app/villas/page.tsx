"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { villas, formatRupiah } from "@/lib/constants";
import VillaCard from "@/components/villa/VillaCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  SlidersHorizontal, 
  MapPin, 
  Users, 
  Star,
  Grid3X3,
  LayoutList,
  X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const locations = ["Semua Lokasi", "Ubud", "Seminyak", "Canggu"];
const capacities = ["Semua Kapasitas", "1-4 Tamu", "5-8 Tamu", "9+ Tamu"];
const priceRanges = ["Semua Harga", "< Rp 2 Juta", "Rp 2-4 Juta", "> Rp 4 Juta"];

export default function VillasPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Semua Lokasi");
  const [selectedCapacity, setSelectedCapacity] = useState("Semua Kapasitas");
  const [selectedPrice, setSelectedPrice] = useState("Semua Harga");
  const [sortBy, setSortBy] = useState("recommended");

  // Filter logic (simplified for demo)
  const filteredVillas = villas.filter((villa) => {
    const matchesSearch = villa.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      villa.lokasi.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "Semua Lokasi" || villa.lokasi.includes(selectedLocation);
    return matchesSearch && matchesLocation;
  });

  const activeFiltersCount = [selectedLocation, selectedCapacity, selectedPrice]
    .filter(f => !f.startsWith("Semua")).length;

  const clearFilters = () => {
    setSelectedLocation("Semua Lokasi");
    setSelectedCapacity("Semua Kapasitas");
    setSelectedPrice("Semua Harga");
    setSearchQuery("");
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-br from-sky-600 via-sky-500 to-sky-400 py-10 md:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="bg-white/20 text-white border-0 mb-3 md:mb-4 text-xs md:text-sm">
              {villas.length} Villa Tersedia
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Temukan Villa Impian Anda
            </h1>
            <p className="text-sm md:text-lg text-white/90 mb-5 md:mb-8 px-4">
              Pilih dari koleksi villa premium kami untuk pengalaman menginap yang tak terlupakan.
            </p>

            {/* Search Bar */}
            <Card className="border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-3 md:p-4">
                <div className="flex gap-2 md:gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 md:left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Cari villa..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 md:pl-10 border-gray-200 focus:border-sky-400 h-10 md:h-12 text-sm md:text-base"
                    />
                  </div>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="default" className="h-10 md:h-12 px-3 md:px-4 relative">
                        <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
                        {activeFiltersCount > 0 && (
                          <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-sky-500 text-white text-[10px] md:text-xs rounded-full flex items-center justify-center">
                            {activeFiltersCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Filter Villa</SheetTitle>
                      </SheetHeader>
                      <div className="space-y-6 mt-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Lokasi</label>
                          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {locations.map((loc) => (
                                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Kapasitas</label>
                          <Select value={selectedCapacity} onValueChange={setSelectedCapacity}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {capacities.map((cap) => (
                                <SelectItem key={cap} value={cap}>{cap}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Harga per Malam</label>
                          <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {priceRanges.map((price) => (
                                <SelectItem key={price} value={price}>{price}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <Button onClick={clearFilters} variant="outline" className="w-full">
                          Reset Filter
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Villa List */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <p className="text-sm md:text-base text-gray-600">
                Menampilkan <span className="font-semibold text-gray-900">{filteredVillas.length}</span> villa
              </p>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs md:text-sm text-sky-600 hover:text-sky-700"
                >
                  <X className="w-3 h-3 md:w-4 md:h-4" />
                  Hapus filter
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px] bg-white h-9 md:h-10 text-sm">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Rekomendasi</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle - hidden on mobile */}
              <div className="hidden sm:flex bg-white border rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-sky-100 text-sky-600" : "text-gray-400"}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-sky-100 text-sky-600" : "text-gray-400"}`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
              {selectedLocation !== "Semua Lokasi" && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  <MapPin className="w-3 h-3" />
                  {selectedLocation}
                  <button onClick={() => setSelectedLocation("Semua Lokasi")}>
                    <X className="w-3 h-3 ml-1" />
                  </button>
                </Badge>
              )}
              {selectedCapacity !== "Semua Kapasitas" && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  <Users className="w-3 h-3" />
                  {selectedCapacity}
                  <button onClick={() => setSelectedCapacity("Semua Kapasitas")}>
                    <X className="w-3 h-3 ml-1" />
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Villa Grid */}
          {filteredVillas.length > 0 ? (
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                : "space-y-4"
            }>
              {filteredVillas.map((villa, index) => (
                <VillaCard key={villa.id} villa={villa} index={index} />
              ))}
            </div>
          ) : (
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12 text-center">
                <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tidak ada villa ditemukan
                </h3>
                <p className="text-gray-500 mb-4">
                  Coba ubah filter pencarian Anda
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Reset Filter
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Load More */}
          {filteredVillas.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-500 text-sm mb-4">
                Menampilkan {filteredVillas.length} dari {villas.length} villa
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-sky-500 to-sky-600 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Butuh Bantuan Memilih?
                  </h3>
                  <p className="text-white/80">
                    Tim kami siap membantu Anda menemukan villa yang sempurna.
                  </p>
                </div>
                <Button size="lg" className="bg-white text-sky-600 hover:bg-white/90 shrink-0">
                  Hubungi Kami
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
