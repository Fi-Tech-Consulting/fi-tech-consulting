<script setup>
import { Motion } from '@oku-ui/motion'
import { Target, Users, Zap, Award } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const revealInitial = { opacity: 0, y: 24 }
const revealInView = { opacity: 1, y: 0 }
const revealOptions = { once: true }
const revealTransition = { duration: 0.5, ease: 'easeOut' }

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'Turning cloud tech dreams into reality by empowering individuals and teams with the skills and strategy to excel in a cloud-first world.',
  },
  {
    icon: Users,
    title: 'Who We Are',
    description: 'Fi-Tech Consulting is your trusted partner in fostering innovation, driving growth, and ensuring long-term success. We don’t just teach—we transform careers.',
  },
  {
    icon: Zap,
    title: 'Our Approach',
    description: 'We bridge the gap between cloud expertise and career success, giving you the tools to soar far beyond basic training.',
  },
  {
    icon: Award,
    title: 'Why Choose Us',
    description: 'Elite IT consulting with a passion for results. From certification paths to implementation strategy, we deliver tailored guidance for individuals and enterprises.',
  },
]
</script>

<template>
  <main>
    <Motion
      as="section"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
      class="px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div class="mx-auto max-w-4xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          About Us
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          We’re dedicated to transforming cloud aspirations into achievements through expert guidance and support.
        </p>
      </div>
    </Motion>

    <Motion
      as="section"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
      class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 sm:grid-cols-2">
          <div
            v-for="item in values"
            :key="item.title"
            class="flex flex-col rounded-xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-blue-500/20"
          >
            <component :is="item.icon" class="h-10 w-10 text-blue-500" aria-hidden />
            <h2 class="mt-4 text-xl font-semibold text-white">{{ item.title }}</h2>
            <p class="mt-2 text-slate-400">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </Motion>

    <Motion
      as="section"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
      class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div class="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
        <h2 class="text-2xl font-bold text-white">Ready to start your journey?</h2>
        <p class="mt-2 text-slate-400">Get in touch for tailored cloud training, interview prep, or consulting.</p>
        <RouterLink
          to="/contact"
          class="mt-6 inline-flex justify-center rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600"
        >
          Contact Us
        </RouterLink>
      </div>
    </Motion>
  </main>
</template>
