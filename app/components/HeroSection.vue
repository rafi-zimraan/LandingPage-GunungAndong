<template>
  <section class="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-[var(--ui-color-primary-500)]/60 z-0" />
    <div
      class="absolute inset-0 z-0 bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80');"
    />
    <div class="relative z-10 max-w-2xl flex flex-col items-center gap-6">
      <UBadge
        label="Gunung Andong · Jawa Tengah · 1.726 mdpl"
        :ui="{ base: 'bg-[var(--ui-color-primary-400)] text-white text-xs tracking-widest uppercase px-4 py-1.5 rounded-full' }"
      />
      <h1
        class="text-white font-bold leading-tight"
        :class="titleClass"
      >
        Setiap Langkah Menuju Puncak Adalah Cerita
      </h1>
      <p class="text-white/85 text-lg italic max-w-lg">
        "Andong bukan tentang seberapa cepat kamu sampai puncak, tapi seberapa dalam kamu menikmati perjalanannya."
      </p>
      <UButton
        to="#perjalanan"
        size="lg"
        :ui="{
          rounded: 'rounded-full',
          font: 'font-semibold',
          base: 'bg-[var(--ui-color-primary-400)] hover:bg-[var(--ui-color-primary-500)] text-white px-7 py-2.5'
        }"
      >
        Mulai Perjalanan
      </UButton>
    </div>
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest font-sans">
      SCROLL
      <div class="w-px h-10 bg-white/30" />
    </div>
  </section>
</template>

<script setup lang="ts">
const titleClass = 'text-[clamp(2.2rem,6vw,4rem)]'
</script>
