// Konfigurasi WhatsApp
export const WHATSAPP_NUMBER = "6283899200333";
export const EMAIL_ADDRESS = "nizarabdurr@gmail.com";
export const INSTAGRAM_HANDLE = "neezar-abd";

// Nama Villa
export const SITE_NAME = "Villa Nusantara";
export const SITE_DESCRIPTION = "Nikmati ketenangan dan kemewahan di villa eksklusif kami";

// Data Villa Dummy
export interface Villa {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  kapasitas: number;
  kamar: number;
  kamarMandi: number;
  luas: number;
  lokasi: string;
  fasilitas: string[];
  gambar: string[];
}

export const villas: Villa[] = [
  {
    id: "tepi-pantai",
    nama: "Villa Tepi Pantai",
    deskripsi: "Villa mewah dengan pemandangan langsung ke pantai. Nikmati sunrise dan sunset yang memukau dari balkon pribadi Anda. Dilengkapi dengan kolam renang infinity yang menghadap ke laut.",
    harga: 1500000,
    kapasitas: 4,
    kamar: 2,
    kamarMandi: 2,
    luas: 150,
    lokasi: "Pantai Indah, Bali",
    fasilitas: ["Kolam Renang Pribadi", "WiFi Gratis", "AC", "Dapur Lengkap", "TV Smart 55\"", "Parkir Gratis", "Akses Pantai Pribadi", "BBQ Area"],
    gambar: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
      "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
  },
  {
    id: "bukit-hijau",
    nama: "Villa Bukit Hijau",
    deskripsi: "Tersembunyi di tengah hamparan sawah dan perbukitan hijau. Villa ini menawarkan ketenangan sempurna jauh dari hiruk pikuk kota. Cocok untuk retreat keluarga atau pasangan.",
    harga: 1200000,
    kapasitas: 6,
    kamar: 3,
    kamarMandi: 3,
    luas: 200,
    lokasi: "Ubud, Bali",
    fasilitas: ["Kolam Renang Pribadi", "WiFi Gratis", "AC", "Dapur Lengkap", "TV Smart 50\"", "Parkir Gratis", "Taman Tropis", "Yoga Deck"],
    gambar: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
  },
  {
    id: "garden-view",
    nama: "Villa Garden View",
    deskripsi: "Villa nyaman dengan taman tropis yang asri. Ideal untuk keluarga kecil yang mencari liburan tenang dengan budget yang ramah. Lokasi strategis dekat dengan pusat wisata.",
    harga: 900000,
    kapasitas: 4,
    kamar: 2,
    kamarMandi: 1,
    luas: 120,
    lokasi: "Seminyak, Bali",
    fasilitas: ["WiFi Gratis", "AC", "Dapur Lengkap", "TV Smart 43\"", "Parkir Gratis", "Taman Pribadi", "Laundry"],
    gambar: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    ],
  },
];

// Testimoni Dummy
export interface Testimonial {
  id: number;
  nama: string;
  asal: string;
  rating: number;
  komentar: string;
  tanggal: string;
  villa: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    nama: "Budi Santoso",
    asal: "Jakarta",
    rating: 5,
    komentar: "Villa sangat bersih dan nyaman. Pemandangan pantai yang luar biasa! Staff sangat ramah dan membantu. Pasti akan kembali lagi.",
    tanggal: "November 2024",
    villa: "Villa Tepi Pantai",
  },
  {
    id: 2,
    nama: "Sari Dewi",
    asal: "Surabaya",
    rating: 5,
    komentar: "Liburan keluarga yang sempurna! Anak-anak sangat senang dengan kolam renangnya. Lokasi tenang dan pemandangan sawah yang indah.",
    tanggal: "Oktober 2024",
    villa: "Villa Bukit Hijau",
  },
  {
    id: 3,
    nama: "Andi Pratama",
    asal: "Bandung",
    rating: 4,
    komentar: "Lokasi strategis, dekat dengan tempat wisata. Villa bersih dan fasilitas lengkap. Harga sangat worth it untuk kualitasnya.",
    tanggal: "September 2024",
    villa: "Villa Garden View",
  },
];

// Fitur Unggulan
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "MapPin",
    title: "Lokasi Strategis",
    description: "Terletak di lokasi terbaik Bali dengan akses mudah ke pantai, restoran, dan tempat wisata populer.",
  },
  {
    icon: "Sparkles",
    title: "Fasilitas Lengkap",
    description: "Dilengkapi kolam renang pribadi, WiFi cepat, dapur modern, dan berbagai fasilitas premium lainnya.",
  },
  {
    icon: "Mountain",
    title: "Pemandangan Indah",
    description: "Nikmati panorama alam yang memukau, dari hamparan laut biru hingga hijaunya perbukitan tropis.",
  },
  {
    icon: "HeartHandshake",
    title: "Layanan Prima",
    description: "Tim kami siap membantu 24 jam untuk memastikan pengalaman menginap Anda sempurna dan tak terlupakan.",
  },
];

// Format harga ke Rupiah
export function formatRupiah(angka: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
}

// Generate WhatsApp link
export function generateWhatsAppLink(
  villaName: string,
  checkIn: string,
  checkOut: string,
  guests: number,
  totalPrice: string
): string {
  const message = encodeURIComponent(
    `Halo, saya ingin reservasi:\n\n🏠 Villa: ${villaName}\n📅 Check-in: ${checkIn}\n📅 Check-out: ${checkOut}\n👥 Tamu: ${guests} orang\n💰 Estimasi: ${totalPrice}\n\nMohon informasi ketersediaannya. Terima kasih!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
