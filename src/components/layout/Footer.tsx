import Link from "next/link";
import { Home, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-sky-500 flex items-center justify-center">
                <Home className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="font-semibold text-base md:text-lg">{SITE_NAME}</span>
            </Link>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Temukan ketenangan dan kemewahan di villa-villa eksklusif kami.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Menu</h4>
            <ul className="space-y-1.5 md:space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-sky-400 transition-colors text-xs md:text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/villas" className="text-gray-400 hover:text-sky-400 transition-colors text-xs md:text-sm">
                  Villa Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-400 hover:text-sky-400 transition-colors text-xs md:text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Kontak</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-sky-400 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-xs md:text-sm">
                  Seminyak, Bali
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-sky-400 shrink-0" />
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sky-400 transition-colors text-xs md:text-sm"
                >
                  +62 838-9920-0333
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-sky-400 shrink-0" />
                <a 
                  href="mailto:nizarabdurr@gmail.com"
                  className="text-gray-400 hover:text-sky-400 transition-colors text-xs md:text-sm"
                >
                  nizarabdurr@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Ikuti Kami</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://instagram.com/neezar-abd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
