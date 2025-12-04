"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    category: "Reservasi",
    items: [
      {
        question: "Bagaimana cara melakukan reservasi?",
        answer: "Anda dapat melakukan reservasi melalui website kami dengan memilih tanggal check-in dan check-out, lalu klik tombol 'Pesan Sekarang'. Anda juga dapat menghubungi kami langsung melalui WhatsApp untuk bantuan reservasi.",
      },
      {
        question: "Apakah bisa membatalkan reservasi?",
        answer: "Ya, pembatalan gratis dapat dilakukan hingga 7 hari sebelum tanggal check-in. Untuk pembatalan kurang dari 7 hari, akan dikenakan biaya sebesar 50% dari total pembayaran.",
      },
      {
        question: "Berapa deposit yang harus dibayarkan?",
        answer: "Untuk mengkonfirmasi reservasi, Anda perlu membayar deposit sebesar 50% dari total harga. Sisa pembayaran dapat dilunasi saat check-in.",
      },
    ],
  },
  {
    category: "Check-in & Check-out",
    items: [
      {
        question: "Jam berapa waktu check-in dan check-out?",
        answer: "Waktu check-in mulai pukul 14:00 WITA dan check-out paling lambat pukul 12:00 WITA. Early check-in atau late check-out dapat diatur dengan biaya tambahan, tergantung ketersediaan.",
      },
      {
        question: "Apakah tersedia layanan antar-jemput bandara?",
        answer: "Ya, kami menyediakan layanan antar-jemput dari dan ke Bandara Ngurah Rai dengan biaya tambahan Rp 350.000 sekali jalan. Silakan informasikan jadwal penerbangan Anda saat reservasi.",
      },
    ],
  },
  {
    category: "Fasilitas",
    items: [
      {
        question: "Apakah villa menyediakan WiFi gratis?",
        answer: "Ya, semua villa kami dilengkapi dengan WiFi berkecepatan tinggi yang dapat diakses secara gratis di seluruh area villa.",
      },
      {
        question: "Apakah ada kolam renang?",
        answer: "Ya, setiap villa memiliki kolam renang pribadi yang dapat dinikmati secara eksklusif oleh tamu. Handuk kolam renang disediakan oleh pihak villa.",
      },
      {
        question: "Apakah boleh membawa hewan peliharaan?",
        answer: "Mohon maaf, saat ini villa kami belum dapat menerima tamu dengan hewan peliharaan demi kenyamanan semua tamu.",
      },
    ],
  },
  {
    category: "Pembayaran",
    items: [
      {
        question: "Metode pembayaran apa saja yang diterima?",
        answer: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI), kartu kredit/debit, dan e-wallet (GoPay, OVO, DANA). Untuk tamu internasional, pembayaran via PayPal juga tersedia.",
      },
      {
        question: "Apakah harga sudah termasuk pajak?",
        answer: "Ya, semua harga yang tertera sudah termasuk pajak dan biaya layanan. Tidak ada biaya tersembunyi.",
      },
    ],
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        onClick={onClick}
        className={`w-full text-left p-3 md:p-4 rounded-lg transition-all duration-200 ${
          isOpen 
            ? "bg-sky-50 border border-sky-200" 
            : "bg-white hover:bg-gray-50 border border-gray-100"
        }`}
      >
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <h4 className={`font-medium text-sm md:text-base ${isOpen ? "text-sky-700" : "text-gray-900"}`}>
            {question}
          </h4>
          <ChevronDown 
            className={`w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-sky-500" : "text-gray-400"
            }`}
          />
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentFAQ = faqData.find((cat) => cat.category === activeCategory);

  return (
    <section className="py-12 md:py-28 bg-white">
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
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 md:mt-3 mb-3 md:mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Temukan jawaban untuk pertanyaan umum seputar reservasi dan layanan villa kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {/* Category Tabs - Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="border-0 shadow-lg sticky top-24">
              <CardContent className="p-2 md:p-4">
                <div className="flex lg:flex-col gap-1.5 md:gap-2 overflow-x-auto lg:overflow-x-visible pb-1 lg:pb-0">
                  {faqData.map((category) => (
                    <button
                      key={category.category}
                      onClick={() => {
                        setActiveCategory(category.category);
                        setOpenItems({});
                      }}
                      className={`whitespace-nowrap px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 text-left ${
                        activeCategory === category.category
                          ? "bg-sky-500 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category.category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-3"
          >
            {currentFAQ?.items.map((item, index) => (
              <FAQItem
                key={`${activeCategory}-${index}`}
                question={item.question}
                answer={item.answer}
                isOpen={openItems[`${activeCategory}-${index}`] || false}
                onClick={() => toggleItem(`${activeCategory}-${index}`)}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 text-center"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-sky-500 to-sky-600 max-w-2xl mx-auto">
            <CardContent className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 text-white text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Masih Punya Pertanyaan?</h3>
                  <p className="text-white/80 text-xs md:text-sm">
                    Tim kami siap membantu Anda 24/7.
                  </p>
                </div>
                <Button 
                  size="default"
                  className="w-full md:w-auto bg-white text-sky-600 hover:bg-white/90 shrink-0 text-sm"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
