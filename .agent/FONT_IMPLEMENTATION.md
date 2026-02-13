# Font Implementation - UPTTIK Website

## Font Pairing Strategy

Untuk menciptakan nuansa **Tech, Modern, dan Cyberpunk**, website UPTTIK menggunakan kombinasi 2 font:

### 1. **Geist** (Headings)
- **Penggunaan**: Semua heading tags (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
- **Karakteristik**: Modern, tech-focused, geometris
- **Sumber**: Package `geist` dari Vercel
- **CSS Variable**: `--font-geist-sans` / `--font-heading`

### 2. **Plus Jakarta Sans** (Body Text)
- **Penggunaan**: Paragraf, span, list items, links
- **Karakteristik**: Modern, mudah dibaca, geometris namun lebih friendly
- **Sumber**: Google Fonts
- **CSS Variable**: `--font-sans`

## Implementation Details

### 1. Layout Configuration (`app/layout.tsx`)
```tsx
import { GeistSans } from "geist/font/sans";
import { Plus_Jakarta_Sans } from "next/font/google";

const geist = GeistSans;
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
```

### 2. Global Styles (`app/globals.css`)
```css
@layer base {
  /* Headings use Geist */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }

  /* Body text uses Plus Jakarta Sans */
  p, span, li, a {
    font-family: var(--font-sans);
  }
}
```

## Affected Components

All components now automatically use the correct fonts:

1. **Hero** - Headings: Geist, Descriptions: Plus Jakarta Sans
2. **Tentang Kami** - Headings: Geist, Content: Plus Jakarta Sans
3. **Layanan** - Headings: Geist, Descriptions: Plus Jakarta Sans
4. **Testimonials** - Headings: Geist, Testimonial text: Plus Jakarta Sans
5. **Footer** - All text: Plus Jakarta Sans (small headings will use Geist)
6. **Profile Page** - Consistent with the same pattern

## Why This Combination?

✅ **Geist (Headings)**
- Memberikan kesan tech & futuristic
- Kuat dan menonjol untuk judul
- Konsisten dengan branding modern tech companies

✅ **Plus Jakarta Sans (Body)**
- Lebih mudah dibaca dalam paragraf panjang
- Tetap modern dan geometris
- Digunakan oleh startup Indonesia (Gojek, Tokopedia)
- Komplementer dengan Geist

## Browser Compatibility

- ✅ All modern browsers
- ✅ Optimal rendering dengan `antialiased` class
- ✅ Variable fonts untuk performance yang lebih baik
