<script setup>
import { RouterLink } from 'vue-router'
import { GraduationCap, MessageSquare, Briefcase } from 'lucide-vue-next'

const cards = [
  {
    title: 'Looking For Cloud Training',
    description: 'Comprehensive, hands-on learning for all skill levels.',
    to: '/services',
    icon: GraduationCap,
  },
  {
    title: 'Looking For Interview Prep',
    description: 'Job search support and technical interview preparation to land your next role.',
    to: '/services',
    icon: MessageSquare,
  },
  {
    title: 'Looking For Consulting',
    description: 'Expert cloud strategy and implementation advice for businesses and individuals.',
    to: '/services',
    icon: Briefcase,
  },
]
</script>

<template>
  <section id="path-cards" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="card in cards"
          :key="card.title"
          :to="card.to"
          class="group flex flex-col rounded-xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-blue-500/30 hover:bg-slate-900/80"
        >
          <component
            :is="card.icon"
            class="h-10 w-10 text-blue-500"
            aria-hidden
          />
          <h3 class="mt-4 text-xl font-semibold text-white">
            {{ card.title }}
          </h3>
          <p class="mt-2 flex-1 text-slate-400">
            {{ card.description }}
          </p>
          <span class="mt-4 inline-flex items-center text-sm font-medium text-blue-500 group-hover:underline">
            Learn More
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
