<template>
  <section class="py-16 md:py-20 bg-[var(--ui-color-neutral-100)]">
    <UContainer>
      <p class="font-sans text-xs tracking-widest uppercase text-[var(--ui-color-primary-400)] mb-1">
        Peta Jalur
      </p>
      <h2 class="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-[var(--ui-color-primary-500)] mb-2">
        Navigasi Basecamp 1–5
      </h2>
      <p class="text-[var(--ui-color-neutral-500)] text-base mb-10 max-w-lg">
        Visualisasi jalur pendakian dari Desa Sawit hingga Puncak Andong.
      </p>

      <div class="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9] max-w-3xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&q=80"
          alt="Peta jalur pendakian Gunung Andong"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6 md:p-8">
          <div class="text-white text-sm font-sans">
            <p class="font-semibold text-base">📍 Jalur: Desa Sawit → Puncak Andong</p>
            <p class="text-white/70">± 3,5 km · 1.726 mdpl · Mudah–Sedang</p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
