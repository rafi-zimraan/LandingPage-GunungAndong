<template>
  <section id="perjalanan" class="py-16 md:py-20 bg-[var(--ui-bg)]">
    <UContainer>
      <p class="font-sans text-xs tracking-widest uppercase text-[var(--ui-color-primary-400)] mb-1">
        Perjalanan
      </p>
      <h2 class="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-[var(--ui-color-primary-500)] mb-2">
        Dari Desa Sawit Hingga Puncak
      </h2>
      <p class="text-[var(--ui-color-neutral-500)] text-base mb-12 max-w-lg">
        Ikuti alur perjalanan melewati 5 pos pendakian — dari ujung desa hingga atap Magelang.
      </p>

      <div class="max-w-2xl mx-auto">
        <BasecampCard
          v-for="(bc, idx) in basecamps"
          :key="bc.number"
          v-bind="bc"
          :is-last="idx === basecamps.length - 1"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const basecamps = [
  {
    number: '1',
    title: 'Basecamp 1 — Desa Sawit',
    elevation: '± 560 mdpl',
    duration: 'Start',
    story: 'Di sinilah petualangan dimulai. Udara pagi yang segar menyambut sebelum kaki melangkah ke jalur bebatuan pertama. Suara ayam dan aroma dapur warga menemanimu mempersiapkan langkah pertama.',
    praktis: ['Titik registrasi', 'Toilet tersedia', 'Parkir aman', 'Warung makan']
  },
  {
    number: '2',
    title: 'Basecamp 2 — Pos Pendaftaran',
    elevation: '± 700 mdpl',
    duration: '+15–20 menit',
    story: 'Kamu resmi masuk kawasan pendakian. Hutan pinus mulai menyambut dan suara keramaian kota menghilang perlahan. Gerbang kayu bertuliskan "Selamat Mendaki" terasa seperti awal dari sesuatu yang istimewa.',
    praktis: ['Wajib lapor petugas', 'Retribusi resmi', 'Cek perlengkapan']
  },
  {
    number: '3',
    title: 'Basecamp 3 — Pos Tengah',
    elevation: '± 900 mdpl',
    duration: '+30–45 menit',
    story: 'Setengah perjalanan. Di sini banyak pendaki berhenti sejenak, mengisi air minum, dan mengatur napas. Pemandangan lembah hijau mulai terlihat dari sela-sela pohon — sebuah pengingat bahwa kamu sudah jauh melangkah.',
    praktis: ['Sumber air terdekat', 'Area istirahat', 'Spot foto lembah']
  },
  {
    number: '4',
    title: 'Basecamp 4 — Sabana',
    elevation: '± 1.100 mdpl',
    duration: '+20–30 menit',
    story: 'Jalur menyempit dan mulai menanjak tajam. Tapi begitu keluar dari rimbunnya hutan, hamparan sabana hijau dan angin sejuk menyambutmu. Semua rasa lelah terbayar seketika oleh panorama 180 derajat yang memukau.',
    praktis: ['Angin cukup kencang', 'Siapkan jaket', 'Spot foto terbaik']
  },
  {
    number: '5',
    title: 'Basecamp 5 — Puncak Andong',
    elevation: '1.726 mdpl',
    duration: '+20–30 menit',
    story: 'Puncak! Dari sini kamu bisa melihat Gunung Merbabu, Merapi, Sumbing, dan Sindoro sekaligus — empat raksasa dalam satu pandangan. Inilah hadiah untuk setiap langkah yang tidak menyerah. Ada tiga puncak kecil: Makam, Jiwa, dan Andong.',
    praktis: ['Sunrise 05.30–06.00 WIB', 'View Merapi & Merbabu', 'Area camping tersedia', 'Bawa sleeping bag'],
    isPuncak: true
  }
]
</script>
