"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ 
  message = "Halo, saya tertarik dengan villa Anda. Bisakah Anda memberikan informasi lebih lanjut?",
  className = ""
}: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 ${className}`}
    >
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Chat WhatsApp</span>
      </Button>
    </a>
  );
}
