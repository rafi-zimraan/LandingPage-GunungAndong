<template>
  <UHeader
    :ui="{
      wrapper: 'bg-[var(--ui-color-primary-500)]/95 backdrop-blur-sm border-b-0',
      links: 'text-[var(--ui-color-neutral-100)] hover:text-white'
    }"
  >
    <template #left>
      <span class="text-[var(--ui-color-neutral-100)] font-bold tracking-wide text-sm">
        ⛰ Gunung Andong
      </span>
    </template>
    <template #right>
      <UNavigationMenu
        :items="navLinks"
        :ui="{
          wrapper: 'hidden sm:flex gap-6',
          link: 'text-[var(--ui-color-neutral-100)] hover:text-white text-sm opacity-85 hover:opacity-100 transition-opacity',
          linkLeading: 'hidden'
        }"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Perjalanan', to: '#perjalanan' },
  { label: 'Tips', to: '#tips' },
  { label: 'Ringkasan', to: '#ringkasan' }
]
</script>
