"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { SITE_NAME } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/villas", label: "Villa" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on homepage
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-homepage, always show solid background
  const showSolidBg = isScrolled || !isHomepage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center group-hover:bg-sky-600 transition-colors">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span
              className={`font-semibold text-lg transition-colors ${
                showSolidBg ? "text-gray-900" : "text-white"
              }`}
            >
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                  showSolidBg ? "text-gray-600" : "text-white/90"
                } ${pathname === link.href ? "text-sky-500" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/villas">Reservasi</Link>
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={showSolidBg ? "text-gray-900" : "text-white"}
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white p-6 pt-14">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium hover:text-sky-500 transition-colors py-2 ${
                      pathname === link.href ? "text-sky-500" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-sky-500 hover:bg-sky-600 text-white mt-4 w-full"
                >
                  <Link href="/villas" onClick={() => setIsOpen(false)}>
                    Reservasi Sekarang
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
