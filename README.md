# 🌴 Bali Grand Tour

Website statis untuk **Bali Grand Tour** — tour operator di Bali.

🌐 **Live**: https://baligrandtour.com  
📦 **Repo**: https://github.com/sinar-bonar/bali-grand-tour

## 🛠 Tech Stack

- **Astro** 5.x — Static Site Generator
- **Tailwind CSS** 3.x — Styling
- **GitHub Pages** — Hosting & auto-deploy

## 📁 Struktur Project

```
📁 WebPages/BaliGrandTour/
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navbar + logo
│   │   ├── Hero.astro         # Banner slider (2 gambar, otomatis)
│   │   ├── About.astro        # Deskripsi perusahaan
│   │   ├── Products.astro     # Grid 9 tour cards
│   │   ├── Footer.astro       # Kontak + social media
│   │   └── WhatsAppButton.astro  # Floating WA + telp
│   ├── data/
│   │   └── tours.ts           # DATA UTAMA — semua tour, gambar, destinasi
│   ├── layouts/
│   │   └── Layout.astro       # Layout utama + SEO
│   ├── pages/
│   │   ├── index.astro        # Halaman utama
│   │   └── tour/
│   │       └── [slug].astro   # Halaman detail per tour
│   └── styles/
│       └── global.css         # Tailwind base
├── public/
│   └── images/                # Semua gambar lokal
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Cara Develop

```bash
cd D:\GitHub\WebPages\BaliGrandTour
npm run dev      # Preview lokal (http://localhost:4321)
npm run build    # Build ke folder docs/
npm run preview  # Preview hasil build
```

## 📝 Yang Paling Sering Diganti

### 1. Konten Tour — `src/data/tours.ts`

Array `tours` berisi data semua tour. Struktur per tour:

```typescript
{
  slug: 'nama-tour',         // URL slug
  title: 'Nama Tour',
  location: 'Bali, Indonesia',
  image: '/images/xxx.jpg',   // Gambar card (1 gambar)
  gallery: [                  // Gambar slider (bisa banyak)
    '/images/xxx-1.jpg',
    '/images/xxx-2.jpg',
  ],
  description: 'Deskripsi singkat...',
  highlights: ['Highlight 1', 'Highlight 2'],
  destinations: [             // Detail destinasi
    { name: 'Tempat A', description: 'Deskripsi...' },
  ],
}
```

### 2. Nomor WhatsApp — cari `628179780980` di:
- `src/components/Products.astro`
- `src/components/Footer.astro`
- `src/components/WhatsAppButton.astro`
- `src/pages/tour/[slug].astro`

### 3. Gambar — taruh di `public/images/` lalu update `tours.ts`

### 4. Informasi kontak — di `Footer.astro`
- Email: `pdewa5437@gmail.com`
- Telp: `+62 817 9780 980`
- Facebook: `facebook.com/thebaligrandtour`

## 📋 Daftar Tour (9)

| Slug | Nama | Gallery |
|------|------|---------|
| ubud-monkey-forest-tour | Ubud Monkey Forest Tour | 4 gambar |
| private-beautiful-beach-tour | Private Day Tour - Beautiful Beach | 4 gambar |
| private-bedugul-waterfall-tour | Private Day Tour - Bedugul Waterfall | 4 gambar |
| private-kintamani-full-day-tour | Private Day Tour - Kintamani Full Day | 4 gambar |
| private-nusa-penida-tour | Private Day Tour - Nusa Penida | 3 gambar |
| ubud-rice-terrace-tour | Ubud Rice Terrace Tour | 4 gambar |
| water-sport-beach-tour | Water Sport Beach Tour | 2 gambar |
| lempuyang-east-bali-tour | Lempuyang East Bali Tour | 5 gambar |
| bedugul-tanah-lot-tour | Bedugul Tanah Lot Tour | 4 gambar |

## 🌐 Deploy

Push ke branch `main` → GitHub Pages otomatis build & deploy (1-2 menit).

Source: branch `main`, folder `/docs`.

## ⚠️ Catatan Penting

- **Jangan ganti nama slug** kalo udah live — nanti link detail page broken
- **Kalo mau ganti base URL**, edit `astro.config.mjs` → `base` field
- File `.nojekyll` wajib ada di `docs/` biar GitHub Pages serve folder `_astro/`
- Gambar yang mau dipake harus di-download dulu ke `public/images/`, jangan link langsung ke Rezio
