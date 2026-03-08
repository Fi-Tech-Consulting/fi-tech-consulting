<script setup>
const bullets = [
  'Bridge the gap between cloud expertise and career success.',
  'Tools to thrive in a cloud-first world.',
  'Turning cloud aspirations into achievements.',
]

const stats = [
  { value: '00%', label: 'Certifications achieved' },
  { value: '0k+', label: 'Careers advanced' },
  { value: '0+', label: 'Clients served' },
]

const tickerItems = ['AWS', 'Azure', 'GCP', 'Cloud Architecture', 'DevOps', 'Kubernetes', 'Terraform', 'CI/CD']
</script>

<template>
  <section id="about" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-3xl font-bold text-white sm:text-4xl">
        Elevating your cloud journey
      </h2>
      <p class="mt-4 max-w-2xl text-lg text-slate-400">
        Elevating your cloud journey through expert training, certification guidance, and consulting.
      </p>
      <ul class="mt-6 space-y-2">
        <li
          v-for="(bullet, i) in bullets"
          :key="i"
          class="flex items-center gap-2 text-slate-300"
        >
          <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          {{ bullet }}
        </li>
      </ul>
      <div class="mt-12 grid gap-8 sm:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-lg border border-white/10 bg-slate-900/50 p-6 text-center"
        >
          <p class="text-3xl font-bold text-blue-500">{{ stat.value }}</p>
          <p class="mt-1 text-sm text-slate-400">{{ stat.label }}</p>
        </div>
      </div>
      <div class="mt-16 overflow-hidden border-y border-white/10 py-4">
        <div class="flex animate-ticker gap-12 whitespace-nowrap">
          <template v-for="(item, i) in [...tickerItems, ...tickerItems]" :key="i">
            <span class="text-slate-500">{{ item }}</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-ticker {
  animation: ticker 30s linear infinite;
}
</style>
