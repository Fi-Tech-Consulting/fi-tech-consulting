<script setup>
import { RouterLink } from 'vue-router'

const plans = [
  {
    name: 'Starter',
    tagline: 'For individuals focused on one goal.',
    features: [
      'Hands-on cloud training',
      'Self-paced learning path',
      'Email support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    tagline: 'Deeper engagement: certification + interview prep.',
    features: [
      'Everything in Starter',
      '1:1 interview prep',
      'Certification roadmap',
      'Priority support',
    ],
    cta: 'Consult Us',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For teams: consulting + training.',
    features: [
      'Everything in Professional',
      'Ongoing consulting',
      'Team training sessions',
      'Dedicated success manager',
    ],
    cta: 'Consult Us',
    featured: false,
  },
]
</script>

<template>
  <section id="plans" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-3xl font-bold text-white sm:text-4xl">
        Choose Your Plan
      </h2>
      <p class="mt-2 text-slate-400">
        Select the tier that fits your goals—from individual learning to enterprise transformation.
      </p>
      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="relative flex flex-col rounded-xl border p-6 transition hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
          :class="
            plan.featured
              ? 'border-blue-500/50 bg-slate-900/80'
              : 'border-white/10 bg-slate-900/50'
          "
        >
          <span
            v-if="plan.featured"
            class="absolute -top-3 left-6 rounded-full bg-blue-500 px-3 py-0.5 text-xs font-medium text-white"
          >
            Popular
          </span>
          <h3 class="text-xl font-semibold text-white">{{ plan.name }}</h3>
          <p class="mt-2 text-sm text-slate-400">{{ plan.tagline }}</p>
          <ul class="mt-6 flex-1 space-y-3">
            <li
              v-for="(f, i) in plan.features"
              :key="i"
              class="flex items-center gap-2 text-slate-300"
            >
              <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
              {{ f }}
            </li>
          </ul>
          <RouterLink
            to="/contact"
            class="mt-6 inline-flex justify-center rounded-lg px-4 py-2.5 font-medium transition"
            :class="
              plan.featured
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'border border-white/20 text-white hover:bg-white/5'
            "
          >
            {{ plan.cta }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
