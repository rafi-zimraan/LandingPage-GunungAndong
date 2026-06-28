<template>
  <section id="ringkasan" class="py-16 md:py-20 bg-[var(--ui-bg)]">
    <UContainer>
      <p class="font-sans text-xs tracking-widest uppercase text-[var(--ui-color-primary-400)] mb-1">
        Ringkasan
      </p>
      <h2 class="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-[var(--ui-color-primary-500)] mb-2">
        Data Lengkap Jalur Pendakian
      </h2>
      <p class="text-[var(--ui-color-neutral-500)] text-base mb-10 max-w-lg">
        Estimasi waktu untuk pendaki pemula dengan kecepatan santai.
      </p>

      <div class="overflow-x-auto rounded-xl shadow-md">
        <UTable
          :columns="columns"
          :rows="rows"
          :ui="{
            wrapper: 'rounded-xl overflow-hidden',
            thead: 'bg-[var(--ui-color-primary-500)]',
            th: 'text-[var(--ui-color-neutral-100)] font-semibold text-sm py-4 px-4',
            td: 'text-sm py-3.5 px-4 border-b border-[var(--ui-color-neutral-200)]',
            tbody: 'divide-y divide-[var(--ui-color-neutral-200)]'
          }"
        >
          <template #elevation-data="{ row }">
            <span :class="row.isPuncak ? 'font-bold' : ''">{{ row.elevation }}</span>
          </template>
          <template #duration-data="{ row }">
            <span :class="row.isPuncak ? 'font-bold' : ''">{{ row.duration }}</span>
          </template>
        </UTable>
      </div>

      <p class="mt-6 font-sans text-sm text-[var(--ui-color-neutral-500)]">
        * Total estimasi naik: <strong class="text-[var(--ui-color-primary-500)]">1,5 – 2 jam</strong> untuk pemula ·
        Tingkat kesulitan: <strong class="text-[var(--ui-color-primary-500)]">Mudah–Sedang</strong>
      </p>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const columns = [
  { accessorKey: 'pos', header: 'Pos' },
  { accessorKey: 'name', header: 'Nama' },
  { accessorKey: 'elevation', header: 'Ketinggian' },
  { accessorKey: 'duration', header: 'Waktu Tempuh' }
]

const rows = [
  { pos: 'BC 1', name: 'Desa Sawit', elevation: '± 560 mdpl', duration: 'Start / Titik awal', isPuncak: false },
  { pos: 'BC 2', name: 'Pos Pendaftaran', elevation: '± 700 mdpl', duration: '+15–20 menit', isPuncak: false },
  { pos: 'BC 3', name: 'Pos Tengah', elevation: '± 900 mdpl', duration: '+30–45 menit', isPuncak: false },
  { pos: 'BC 4', name: 'Sabana', elevation: '± 1.100 mdpl', duration: '+20–30 menit', isPuncak: false },
  { pos: 'BC 5', name: 'Puncak Andong', elevation: '1.726 mdpl', duration: '+20–30 menit', isPuncak: true }
]
</script>
