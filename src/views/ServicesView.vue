<script setup>
import { Motion } from '@oku-ui/motion'
import { RouterLink } from 'vue-router'
import {
  GraduationCap,
  MessageSquare,
  Briefcase,
  CheckCircle2,
  BookOpen,
  Headphones,
  Cloud,
  Target,
  Users,
  FileCheck,
  Layers,
  Rocket,
} from 'lucide-vue-next'
import { ref } from 'vue'

const revealInitial = { opacity: 0, y: 24 }
const revealInView = { opacity: 1, y: 0 }
const revealOptions = { once: true }
const revealTransition = { duration: 0.5, ease: 'easeOut' }

const services = [
  {
    id: 'cloud-training',
    title: 'Cloud Training',
    tagline: 'Hands-on learning for every stage of your cloud journey.',
    icon: GraduationCap,
    description: 'Comprehensive, hands-on learning experiences for all skill levels. From fundamentals to advanced cloud architecture, we tailor programs to your goals and pace.',
    whatWeOffer: [
      { icon: Cloud, label: 'Multi-cloud fundamentals (AWS, Azure, GCP)', detail: 'Core concepts, services, and best practices.' },
      { icon: Layers, label: 'Architecture & design patterns', detail: 'Scalable, secure, cost-effective solutions.' },
      { icon: FileCheck, label: 'Certification-focused paths', detail: 'Structured prep for AWS, Azure, and GCP certifications.' },
      { icon: Rocket, label: 'Labs and real-world projects', detail: 'Build portfolios that demonstrate your skills.' },
    ],
    outcomes: ['Confidence with cloud platforms', 'Certification readiness', 'Portfolio-ready projects', 'Lifelong learning habits'],
  },
  {
    id: 'interview-prep',
    title: 'Interview Prep',
    tagline: 'Land your next cloud or platform engineering role.',
    icon: MessageSquare,
    description: 'Job search support and technical interview preparation. We focus on what hiring managers look for: system design, coding, and behavioral fit.',
    whatWeOffer: [
      { icon: Target, label: 'Technical mock interviews', detail: 'Live coding, system design, and cloud scenarios.' },
      { icon: MessageSquare, label: 'Behavioral & STAR coaching', detail: 'Tell your story clearly and confidently.' },
      { icon: FileCheck, label: 'Resume & LinkedIn review', detail: 'Optimize for ATS and recruiter visibility.' },
      { icon: Users, label: 'Negotiation & offer guidance', detail: 'Navigate offers and compensation with clarity.' },
    ],
    outcomes: ['Faster time to offer', 'Stronger system design skills', 'Polished resume and profile', 'Clear interview strategy'],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    tagline: 'Expert cloud strategy and implementation for teams.',
    icon: Briefcase,
    description: 'Expert advice on cloud strategy, certification paths, and implementation. For individuals and enterprises navigating cloud adoption, migration, or upskilling.',
    whatWeOffer: [
      { icon: Layers, label: 'Cloud strategy & roadmap', detail: 'Where to start, what to prioritize, how to scale.' },
      { icon: Users, label: 'Team upskilling programs', detail: 'Structured training and certification paths for teams.' },
      { icon: Target, label: 'Migration & modernization', detail: 'Lift-and-shift and refactor guidance.' },
      { icon: BookOpen, label: 'Ongoing advisory', detail: 'Sprint-based or retainer support when you need it.' },
    ],
    outcomes: ['Clear cloud roadmap', 'Aligned team skills', 'Reduced risk and cost', 'Faster time to value'],
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
          Our Services
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          At Fi-Tech Consulting, we empower you to stay ahead in a cloud-first world. From training to consulting, we’re your complete cloud transformation partner.
        </p>
      </div>
    </Motion>

    <!-- Detailed service cards -->
    <Motion
      v-for="(service, index) in services"
      :key="service.id"
      as="section"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
      class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div class="mx-auto max-w-7xl">
        <div
          class="rounded-2xl border border-white/10 bg-slate-900/50 p-8 sm:p-10 transition hover:border-blue-500/20"
          :class="{ 'ring-2 ring-blue-500/30': hoveredIndex === index }"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div class="shrink-0">
              <component :is="service.icon" class="h-12 w-12 text-blue-500" aria-hidden />
              <h2 class="mt-4 text-2xl font-bold text-white sm:text-3xl">{{ service.title }}</h2>
              <p class="mt-2 text-blue-400/90">{{ service.tagline }}</p>
            </div>
            <div class="min-w-0 flex-1 space-y-6">
              <p class="text-slate-400">{{ service.description }}</p>
              <div>
                <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-300">What we offer</h3>
                <ul class="mt-4 space-y-4">
                  <li
                    v-for="(item, i) in service.whatWeOffer"
                    :key="i"
                    class="flex gap-4 rounded-lg border border-white/5 bg-slate-950/50 p-4"
                  >
                    <component :is="item.icon" class="h-5 w-5 shrink-0 text-blue-500" aria-hidden />
                    <div>
                      <p class="font-medium text-white">{{ item.label }}</p>
                      <p class="mt-0.5 text-sm text-slate-400">{{ item.detail }}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-300">Outcomes</h3>
                <ul class="mt-3 flex flex-wrap gap-2">
                  <li
                    v-for="(outcome, i) in service.outcomes"
                    :key="i"
                    class="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                  >
                    <CheckCircle2 class="h-4 w-4 shrink-0" />
                    {{ outcome }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Why Fi-Tech -->
    <Motion
      as="section"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
      class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div class="mx-auto max-w-7xl">
        <h2 class="text-2xl font-bold text-white sm:text-3xl">Why Fi-Tech</h2>
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
    </Motion>

    <!-- CTA -->
    <Motion
      as="section"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
      class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div class="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
        <h2 class="text-2xl font-bold text-white">Get started today</h2>
        <p class="mt-2 text-slate-400">Tell us your goals and we’ll match you with the right plan.</p>
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
