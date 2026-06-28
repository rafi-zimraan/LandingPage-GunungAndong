<template>
  <div class="bg-[var(--ui-color-primary-500)] py-8 md:py-10">
    <UContainer>
      <div class="flex justify-around flex-wrap gap-6 text-center">
        <div v-for="stat in stats" :key="stat.label" class="text-[var(--ui-color-neutral-100)]">
          <span class="block text-3xl font-bold">{{ stat.value }}</span>
          <span class="font-sans text-xs tracking-wider opacity-75">{{ stat.label }}</span>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '1.726', label: 'Meter di atas laut' },
  { value: '5', label: 'Basecamp' },
  { value: '~2 Jam', label: 'Estimasi naik' },
  { value: 'Mudah', label: 'Cocok untuk pemula' }
]
</script>
