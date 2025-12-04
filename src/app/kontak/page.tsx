"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Instagram,
  Facebook,
  CheckCircle2,
  Headphones,
  Globe,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respon tercepat",
    value: "+62 838-9920-0333",
    action: "Chat Sekarang",
    color: "bg-green-500",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo, saya ingin bertanya tentang villa Anda.")}`,
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Senin - Minggu, 08:00 - 22:00",
    value: "+62 838-9920-0333",
    action: "Hubungi",
    color: "bg-sky-500",
    href: "tel:+6283899200333",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Respon dalam 24 jam",
    value: "nizarabdurr@gmail.com",
    action: "Kirim Email",
    color: "bg-orange-500",
    href: "mailto:nizarabdurr@gmail.com",
  },
];

const features = [
  { icon: Headphones, text: "Layanan 24/7" },
  { icon: Globe, text: "Bahasa Indonesia & Inggris" },
  { icon: CheckCircle2, text: "Respon Cepat" },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "",
    pesan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = encodeURIComponent(
      `Halo, saya ingin menghubungi Villa Nusantara.\n\n*Nama:* ${formData.nama}\n*Email:* ${formData.email}\n*Telepon:* ${formData.telepon}\n*Subjek:* ${formData.subjek}\n\n*Pesan:*\n${formData.pesan}`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-sky-600 via-sky-500 to-sky-400 py-12 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
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
              Kami Siap Membantu
            </Badge>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Hubungi Kami
            </h1>
            <p className="text-sm md:text-lg text-white/90 mb-5 md:mb-8 px-2">
              Punya pertanyaan atau butuh bantuan? Tim kami siap melayani Anda 24/7.
            </p>

            {/* Quick Features */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                >
                  <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <span className="text-white text-xs md:text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 -mt-12 md:-mt-20 relative z-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow h-full">
                  <CardContent className="p-4 md:p-6">
                    <div className={`w-10 h-10 md:w-14 md:h-14 ${method.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4`}>
                      <method.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-1">{method.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-2 md:mb-3">{method.description}</p>
                    <p className="text-sky-600 font-medium text-sm md:text-base mb-3 md:mb-4 truncate">{method.value}</p>
                    <Button asChild variant="outline" size="sm" className="w-full group text-xs md:text-sm h-8 md:h-10">
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.action}
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4 md:space-y-6"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  Informasi Lokasi
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Kunjungi villa kami atau hubungi untuk informasi lebih lanjut.
                </p>
              </div>

              {/* Address Card */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video relative bg-sky-100">
                  {/* Map Placeholder with Styled Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-sky-200">
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
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-4 animate-ping opacity-20 bg-sky-500 rounded-full" />
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-lg">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-start gap-2.5 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Alamat</h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Jl. Pantai Indah No. 123<br />
                        Seminyak, Badung, Bali 80361<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="w-full mt-3 md:mt-4 bg-sky-500 hover:bg-sky-600 text-xs md:text-sm h-8 md:h-10"
                    onClick={() => window.open("https://maps.google.com", "_blank")}
                  >
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                    Buka di Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-start gap-2.5 md:gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-0.5 md:mb-1 text-sm md:text-base">Jam Operasional</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Kantor & Customer Service</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <div className="flex justify-between py-1.5 md:py-2 border-b border-gray-100">
                      <span className="text-gray-600">Senin - Jumat</span>
                      <span className="font-medium text-gray-900">08:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between py-1.5 md:py-2 border-b border-gray-100">
                      <span className="text-gray-600">Sabtu</span>
                      <span className="font-medium text-gray-900">09:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between py-1.5 md:py-2">
                      <span className="text-gray-600">Minggu & Libur</span>
                      <span className="font-medium text-gray-900">10:00 - 20:00</span>
                    </div>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-2 md:mt-3 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    WhatsApp tersedia 24/7
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 md:p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Ikuti Kami</h3>
                  <div className="flex gap-2 md:gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Facebook className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-green-500 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="mb-4 md:mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                      Kirim Pesan
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      Isi form di bawah ini dan kami akan segera merespons pesan Anda.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="nama"
                          name="nama"
                          type="text"
                          required
                          value={formData.nama}
                          onChange={handleChange}
                          placeholder="Masukkan nama lengkap"
                          className="border-gray-200 focus:border-sky-400 h-12"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nama@email.com"
                          className="border-gray-200 focus:border-sky-400 h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nomor Telepon
                        </label>
                        <Input
                          id="telepon"
                          name="telepon"
                          type="tel"
                          value={formData.telepon}
                          onChange={handleChange}
                          placeholder="08xx-xxxx-xxxx"
                          className="border-gray-200 focus:border-sky-400 h-12"
                        />
                      </div>

                      <div>
                        <label htmlFor="subjek" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Subjek <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subjek"
                          name="subjek"
                          required
                          value={formData.subjek}
                          onChange={handleChange}
                          className="w-full h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-gray-900"
                        >
                          <option value="">Pilih subjek</option>
                          <option value="Reservasi">Reservasi Villa</option>
                          <option value="Informasi">Informasi Umum</option>
                          <option value="Harga">Pertanyaan Harga</option>
                          <option value="Keluhan">Keluhan / Feedback</option>
                          <option value="Kerjasama">Kerjasama Bisnis</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Pesan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        required
                        rows={5}
                        value={formData.pesan}
                        onChange={handleChange}
                        placeholder="Tuliskan pesan atau pertanyaan Anda secara detail..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="flex-1 bg-sky-500 hover:bg-sky-600 text-white h-12"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Kirim via WhatsApp
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="h-12 border-green-500 text-green-600 hover:bg-green-50"
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Chat Langsung
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Dengan mengirim pesan, Anda menyetujui{" "}
                      <a href="#" className="text-sky-600 hover:underline">Kebijakan Privasi</a> kami.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
