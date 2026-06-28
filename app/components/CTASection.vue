<template>
  <section
    class="py-24 md:py-28 px-6 text-center relative overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-[var(--ui-color-primary-500)]/90 to-[var(--ui-color-secondary-500)]/85 z-0" />
    <div
      class="absolute inset-0 z-0 bg-cover bg-center opacity-30"
      style="background-image: url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80'); background-blend-mode: overlay;"
    />
    <div class="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">
      <h2 class="text-white font-bold text-[clamp(1.75rem,4vw,2.8rem)] leading-tight">
        Siap Menapaki Andong?
      </h2>
      <p class="text-white/80 italic text-lg max-w-lg">
        "Gunung Andong bukan hanya soal puncak. Ia soal perjalanan, keberanian, dan ketenangan yang kamu temukan di setiap langkahnya."
      </p>
      <div class="flex flex-wrap justify-center gap-4 mt-2">
        <UButton
          to="#perjalanan"
          size="lg"
          :ui="{
            rounded: 'rounded-full',
            font: 'font-semibold',
            base: 'bg-[var(--ui-color-primary-400)] hover:bg-[var(--ui-color-primary-500)] text-white px-7 py-2.5'
          }"
        >
          Lihat Jalur Lagi
        </UButton>
        <UButton
          to="#tips"
          variant="outline"
          size="lg"
          :ui="{
            rounded: 'rounded-full',
            font: 'font-semibold',
            base: 'border-2 border-[var(--ui-color-neutral-100)] text-[var(--ui-color-neutral-100)] hover:bg-[var(--ui-color-neutral-100)] hover:text-[var(--ui-color-primary-500)] px-7 py-2.5'
          }"
        >
          Tips Pendakian
        </UButton>
      </div>
    </div>
  </section>
</template>
