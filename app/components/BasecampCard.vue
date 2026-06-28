<template>
  <div class="relative pl-14 md:pl-16 pb-8 last:pb-0">
    <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--ui-color-primary-400)] to-[var(--ui-color-primary-500)] last:hidden" :class="{ '!hidden': isLast }" />
    <div
      class="absolute left-0 top-1 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-xs font-bold font-sans border-[3px] border-[var(--ui-color-neutral-100)] z-10"
      :class="isPuncak ? 'bg-[var(--ui-color-secondary-500)] w-9 h-9 md:w-10 md:h-10 -left-0.5' : 'bg-[var(--ui-color-primary-500)]'"
    >
      {{ isPuncak ? '⛰' : number }}
    </div>
    <UCard
      :ui="{
        rounded: 'rounded-2xl',
        shadow: 'shadow-md hover:shadow-xl',
        body: { padding: 'p-6 md:p-8' },
        base: 'transition-all duration-200 hover:-translate-y-1'
      }"
    >
      <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
        <h3 class="text-lg md:text-xl font-bold text-[var(--ui-color-primary-500)]">
          {{ title }}
        </h3>
        <div class="flex gap-2 flex-wrap">
          <UBadge
            :label="elevation"
            variant="subtle"
            :ui="{
              base: 'text-xs font-semibold px-3 py-0.5 rounded-full bg-[var(--ui-color-neutral-200)] text-[var(--ui-color-secondary-500)]'
            }"
          />
          <UBadge
            :label="duration"
            :ui="{
              base: 'text-xs font-semibold px-3 py-0.5 rounded-full bg-emerald-50 text-[var(--ui-color-primary-500)]'
            }"
          />
        </div>
      </div>
      <p class="italic text-[var(--ui-color-neutral-500)] text-sm md:text-base mb-4">
        {{ story }}
      </p>
      <div class="border-t border-[var(--ui-color-neutral-200)] pt-4 font-sans text-xs md:text-sm text-[var(--ui-color-neutral-500)]">
        <span
          v-for="info in praktis"
          :key="info"
          class="inline-block mr-4 last:mr-0"
        >
          <UIcon name="i-lucide-check" class="mr-1 text-[var(--ui-color-primary-400)]" />
          {{ info }}
        </span>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  elevation: string
  duration: string
  story: string
  praktis: string[]
  isPuncak?: boolean
  isLast?: boolean
}>()
</script>
