<script setup>
import { ref } from 'vue'
import { GraduationCap, MessageSquare, Briefcase, CheckCircle2, BookOpen, Headphones } from 'lucide-vue-next'

const services = [
  {
    title: 'Cloud Training',
    description: 'Comprehensive, hands-on learning experiences for all skill levels.',
    icon: GraduationCap,
  },
  {
    title: 'Interview Prep',
    description: 'Job search support and technical interview preparation.',
    icon: MessageSquare,
  },
  {
    title: 'Consulting',
    description: 'Expert advice on cloud strategy, certification paths, and implementation.',
    icon: Briefcase,
  },
]

const whyItems = [
  { label: 'Expert Guidance', icon: CheckCircle2 },
  { label: 'Comprehensive Resources', icon: BookOpen },
  { label: 'Dedicated Support', icon: Headphones },
]

const hoveredIndex = ref(null)
</script>

<template>
  <section id="services" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-3xl font-bold text-white sm:text-4xl">
        Our Services Include
      </h2>
      <p class="mt-2 text-slate-400">
        At Fi-Tech Consulting, we empower you to stay ahead in a cloud-first world.
      </p>

      <!-- Bento grid: 3 service cards with hover spotlight -->
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 p-6 transition duration-300"
          :class="{ 'ring-2 ring-blue-500/40': hoveredIndex === index }"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div
            v-show="hoveredIndex === index"
            class="pointer-events-none absolute inset-0 opacity-80"
            :style="{
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)',
            }"
          />
          <div class="relative">
            <component
              :is="service.icon"
              class="h-10 w-10 text-blue-500"
              aria-hidden
            />
            <h3 class="mt-4 text-xl font-semibold text-white">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-slate-400">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Why Fi-Tech -->
      <h2 class="mt-20 text-2xl font-bold text-white sm:text-3xl">
        Why Fi-Tech
      </h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-3">
        <div
          v-for="item in whyItems"
          :key="item.label"
          class="flex items-start gap-4 rounded-lg border border-white/10 bg-slate-900/30 p-6"
        >
          <component :is="item.icon" class="h-8 w-8 shrink-0 text-blue-500" aria-hidden />
          <p class="font-medium text-white">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
