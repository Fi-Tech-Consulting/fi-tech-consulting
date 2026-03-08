<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronDown, Menu } from 'lucide-vue-next'

const servicesOpen = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  { label: 'Cloud Training', to: '/services' },
  { label: 'Interview Prep', to: '/services' },
  { label: 'Consulting', to: '/services' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-slate-950/80"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="text-xl font-semibold text-white">Fi-Tech Consulting</RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="text-slate-300 transition hover:text-white"
          active-class="text-white"
          exact-active-class="text-white"
        >
          {{ link.label }}
        </RouterLink>
        <div class="relative">
          <button
            type="button"
            class="flex items-center gap-1 text-slate-300 transition hover:text-white"
            @click="servicesOpen = !servicesOpen"
            @blur="setTimeout(() => (servicesOpen = false), 150)"
          >
            Services
            <ChevronDown
              class="h-4 w-4 transition"
              :class="{ 'rotate-180': servicesOpen }"
            />
          </button>
          <div
            v-show="servicesOpen"
            class="absolute left-0 top-full mt-1 w-48 rounded-lg border border-white/10 bg-slate-900/95 py-2 shadow-xl backdrop-blur-md"
          >
            <RouterLink
              v-for="s in serviceLinks"
              :key="s.label"
              :to="s.to"
              class="block px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
              @click="servicesOpen = false"
            >
              {{ s.label }}
            </RouterLink>
          </div>
        </div>
      </nav>

      <!-- Desktop CTAs -->
      <div class="hidden gap-3 md:flex">
        <RouterLink
          to="/contact"
          class="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
        >
          Consult Us
        </RouterLink>
        <RouterLink
          to="/contact"
          class="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          Get Started
        </RouterLink>
      </div>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded p-2 text-slate-400 hover:bg-white/5 hover:text-white md:hidden"
        aria-label="Toggle menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <Menu class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="mobileMenuOpen"
      class="border-t border-white/5 px-4 py-4 md:hidden"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        class="block py-2 text-slate-300 hover:text-white"
        @click="mobileMenuOpen = false"
      >
        {{ link.label }}
      </RouterLink>
      <p class="py-2 text-sm font-medium text-slate-400">Services</p>
      <RouterLink
        v-for="s in serviceLinks"
        :key="s.label"
        :to="s.to"
        class="block py-2 pl-4 text-slate-300 hover:text-blue-400"
        @click="mobileMenuOpen = false"
      >
        {{ s.label }}
      </RouterLink>
      <div class="mt-4 flex gap-3">
        <RouterLink
          to="/contact"
          class="rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white"
          @click="mobileMenuOpen = false"
        >
          Consult Us
        </RouterLink>
        <RouterLink
          to="/contact"
          class="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
          @click="mobileMenuOpen = false"
        >
          Get Started
        </RouterLink>
      </div>
    </div>
  </header>
</template>
