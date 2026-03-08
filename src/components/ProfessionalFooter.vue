<script setup>
import { RouterLink } from 'vue-router'
import { Mail } from 'lucide-vue-next'

const regions = [
  { code: 'AMER', label: 'Americas' },
  { code: 'EMEA', label: 'Europe, Middle East & Africa' },
]

const services = [
  { label: 'Cloud Training', to: '/services' },
  { label: 'Interview Prep', to: '/services' },
  { label: 'Consulting', to: '/services' },
]
const company = [
  { label: 'About Us', to: '/about' },
]
const help = [
  { label: 'Contact Us', to: '/contact' },
]
</script>

<template>
  <footer class="border-t border-white/10 bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div class="lg:col-span-2">
          <p class="font-semibold text-white">Fi-Tech Consulting</p>
          <p class="mt-2 text-sm text-slate-400">
            Empowering your cloud journey with expert training, certification guidance, and consulting.
          </p>
          <RouterLink
            to="/contact"
            class="mt-4 inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400"
          >
            <Mail class="h-4 w-4" />
            Contact Us
          </RouterLink>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-300">Where we serve</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="r in regions"
              :key="r.code"
              class="rounded-md border border-white/20 bg-slate-800/50 px-3 py-1.5 text-sm font-medium text-slate-300"
            >
              {{ r.code }}
            </span>
          </div>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-300">Our Services</p>
          <ul class="mt-2 space-y-1">
            <li v-for="s in services" :key="s.label">
              <RouterLink :to="s.to" class="text-sm text-slate-400 hover:text-blue-400">
                {{ s.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-300">Company</p>
          <ul class="mt-2 space-y-1">
            <li v-for="c in company" :key="c.label">
              <RouterLink :to="c.to" class="text-sm text-slate-400 hover:text-blue-400">
                {{ c.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-300">Help & Support</p>
          <ul class="mt-2 space-y-1">
            <li v-for="h in help" :key="h.label">
              <RouterLink :to="h.to" class="text-sm text-slate-400 hover:text-blue-400">
                {{ h.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p class="text-sm text-slate-500">
          © {{ new Date().getFullYear() }} Fi-Tech Consulting. All rights reserved.
        </p>
        <p class="text-sm text-slate-500">Follow Us</p>
      </div>
    </div>
  </footer>
</template>
