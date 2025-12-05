<p align="center">
  <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=400&fit=crop" alt="Villa Nusantara Banner" />
</p>

<h1 align="center">🏡 Villa Nusantara</h1>

<p align="center">
  <strong>Premium Villa Booking Landing Page</strong><br/>
  Modern, Elegant & Mobile-First Design
</p>

<p align="center">
  <a href="#demo">Demo</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#screenshots">Screenshots</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animation-ff69b4?style=flat-square&logo=framer" alt="Framer Motion" />
</p>

---

## ✨ Demo

🌐 **Live Preview:** [villa-nusantara.vercel.app](https://villa-nusantara.vercel.app)

---

## 🎯 Features

### 🏠 Landing Page
- **Hero Section** - Full-screen hero dengan booking widget terintegrasi
- **Bento Gallery** - Layout galeri modern dengan lightbox
- **Stats Counter** - Animasi counter untuk statistik
- **Testimonial Carousel** - Slider review dari tamu
- **Promo Banner** - Countdown timer untuk promo
- **FAQ Accordion** - Pertanyaan yang sering diajukan
- **Location Map** - Peta lokasi interaktif

### 🏡 Villa Listing
- **Search & Filter** - Cari berdasarkan lokasi, harga, kapasitas
- **Villa Cards** - Card design dengan quick preview
- **Detail Page** - Informasi lengkap villa dengan gallery

### 📱 Mobile Experience
- **Responsive Design** - Optimal di semua ukuran layar
- **Touch-Friendly** - UI yang mudah di-tap
- **Fast Loading** - Optimized images & lazy loading

### 💬 Booking System
- **WhatsApp Integration** - Reservasi langsung via WhatsApp
- **Date Picker** - Pilih tanggal check-in/check-out
- **Price Calculator** - Hitung total harga otomatis

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Font** | Satoshi (Fontshare) |
| **Date Handling** | date-fns |
| **Carousel** | Embla Carousel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/neezar-abd/Villa-Nusantara.git

# Masuk ke direktori
cd Villa-Nusantara

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📸 Screenshots

<details>
<summary>🖥️ Desktop View</summary>

| Hero Section | Villa Listing |
|--------------|---------------|
| ![Hero](https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=250&fit=crop) | ![Listing](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop) |

| Gallery | Contact |
|---------|---------|
| ![Gallery](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop) | ![Contact](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop) |

</details>

<details>
<summary>📱 Mobile View</summary>

| Home | Menu | Villa |
|------|------|-------|
| Mobile responsive dengan UI yang optimal untuk layar kecil |

</details>

---

## 📁 Project Structure

```
villa-app/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── villas/           # Villa listing & detail
│   │   └── kontak/           # Contact page
│   ├── components/
│   │   ├── landing/          # Landing page sections
│   │   ├── layout/           # Header, Footer
│   │   ├── reservation/      # Booking components
│   │   ├── villa/            # Villa card components
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       ├── constants.ts      # Villa data & config
│       └── utils.ts          # Utility functions
├── public/
└── ...config files
```

---

## ⚙️ Configuration

### WhatsApp Number
Edit `src/lib/constants.ts`:
```typescript
export const WHATSAPP_NUMBER = "6283899200333";
```

### Site Info
```typescript
export const SITE_NAME = "Villa Nusantara";
export const EMAIL_ADDRESS = "your@email.com";
export const INSTAGRAM_HANDLE = "your-instagram";
```

---

## 🎨 Customization

### Color Palette
Website menggunakan tema **Sky Blue** yang dapat diubah di `src/app/globals.css`:

```css
--color-sky-500: oklch(0.685 0.169 237.323);
```

### Adding New Villa
Tambah data villa di `src/lib/constants.ts`:

```typescript
export const villas: Villa[] = [
  {
    id: "villa-baru",
    nama: "Villa Baru",
    deskripsi: "Deskripsi villa...",
    harga: 2000000,
    // ... properties lainnya
  }
];
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Nizar Abdurrahman**

- GitHub: [@neezar-abd](https://github.com/neezar-abd)
- Instagram: [@neezar-abd](https://instagram.com/neezar-abd)
- Email: nizarabdurr@gmail.com

---

<p align="center">
  <strong>⭐ Star this repo if you find it useful! ⭐</strong>
</p>

<p align="center">
  Made with ❤️ in Indonesia 🇮🇩
</p>
