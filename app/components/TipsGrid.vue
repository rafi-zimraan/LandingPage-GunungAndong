<template>
  <section id="tips" class="py-16 md:py-20 bg-[var(--ui-color-neutral-100)]">
    <UContainer>
      <p class="font-sans text-xs tracking-widest uppercase text-[var(--ui-color-primary-400)] mb-1">
        Persiapan
      </p>
      <h2 class="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-[var(--ui-color-primary-500)] mb-2">
        Tips untuk Pendaki Pemula
      </h2>
      <p class="text-[var(--ui-color-neutral-500)] text-base mb-10 max-w-lg">
        Andong ramah untuk pemula, tapi persiapan yang baik tetap membuat perjalananmu lebih menyenangkan.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <UCard
          v-for="tip in tips"
          :key="tip.title"
          :ui="{
            rounded: 'rounded-xl',
            shadow: 'shadow-sm',
            body: { padding: 'p-6' },
            base: 'border-l-4 border-[var(--ui-color-primary-400)]'
          }"
        >
          <UIcon :name="tip.icon" class="text-2xl mb-3 block" />
          <h3 class="font-bold text-[var(--ui-color-primary-500)] text-base mb-1">{{ tip.title }}</h3>
          <p class="font-sans text-sm text-[var(--ui-color-neutral-500)]">{{ tip.desc }}</p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const tips = [
  { icon: 'i-lucide-sunrise', title: 'Mulai Pagi', desc: 'Berangkat sebelum pukul 07.00 agar sampai puncak saat cahaya pagi masih indah dan udara sejuk.' },
  { icon: 'i-lucide-droplets', title: 'Cukupi Air', desc: 'Bawa minimal 1,5 liter air per orang. Sumber air tersedia di Pos 3, tapi jangan andalkan itu saja.' },
  { icon: 'i-lucide-footprints', title: 'Alas Kaki Tepat', desc: 'Gunakan sepatu hiking atau sneakers bersol karet. Hindari sandal karena jalur bisa licin saat basah.' },
  { icon: 'i-lucide-shirt', title: 'Siapkan Jaket', desc: 'Di sabana dan puncak angin cukup kencang. Bawa jaket windbreaker meski cuaca cerah di bawah.' },
  { icon: 'i-lucide-trash-2', title: 'Bawa Sampahmu', desc: 'Tidak ada tempat sampah di jalur. Bawa kantong untuk menyimpan sampahmu hingga kembali ke bawah.' },
  { icon: 'i-lucide-battery-charging', title: 'Charge Penuh', desc: 'Pastikan HP penuh sebelum naik. Tidak ada colokan di jalur. Powerbank sangat disarankan.' }
]
</script>
