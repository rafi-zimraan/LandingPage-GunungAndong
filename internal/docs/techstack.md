# Tech Stack Document — Gunung Andong Landing Page

## Pilihan Stack & Alasan

### Nuxt 4
- **Versi:** ^4.4.8
- **Alasan:** Framework Vue modern dengan server-side rendering, auto-imports, file-based routing, dan performa optimal. Nuxt 4 adalah stable terbaru dengan directory structure yang rapi (`app/`).
- **Alternatif:** Next.js (React), SvelteKit — dipilih Nuxt karena tim familiar dengan Vue.

### Nuxt UI 4
- **Versi:** ^4.9.0
- **Alasan:** 125+ komponen Vue siap pakai, aksesibel (Reka UI), Tailwind CSS v4 theming, dark mode built-in, TypeScript support. Menghindari boilerplate komponen dari nol.
- **Alternatif:** DaisyUI, Headless UI — Nuxt UI terintegrasi langsung dengan Nuxt.

### Tailwind CSS v4
- **Alasan:** Utility-first CSS, CSS-first konfigurasi via `@theme`, bundle size minimal (purge otomatis). Digunakan oleh Nuxt UI sebagai foundation.
- **Alternatif:** Vanilla CSS, SCSS — Tailwind lebih cepat untuk development.

### TypeScript
- **Alasan:** Type safety, better IDE support, Nuxt 4 first-class support.

### Cloudflare Pages
- **Alasan:** Free tier generous (unlimited bandwidth, 500 builds/month), global CDN, auto-HTTPS, integration dengan Cloudflare VPS. Nitro preset `cloudflare` siap pakai.
- **Alternatif:** Vercel, Netlify — Cloudflare karena permintaan user.

## Versi Spesifik
| Package | Version |
|---------|---------|
| nuxt | ^4.4.8 |
| vue | ^3.5.38 |
| @nuxt/ui | ^4.9.0 |
| vue-router | ^5.1.0 |
| tailwindcss | v4 (via Nuxt UI) |
| node | >= 22.x |

## Tidak Menggunakan
- Pinia — tidak perlu state management untuk static landing page
- Nuxt Content — konten sudah langsung di template
- Axios/ofetch — tidak ada API calls
- i18n — hanya bahasa Indonesia untuk sekarang
