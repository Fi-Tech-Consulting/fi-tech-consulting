<script setup>
import { ref } from 'vue'
import { Motion } from '@oku-ui/motion'
import { Mail, MapPin, MessageSquare } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const revealInitial = { opacity: 0, y: 24 }
const revealInView = { opacity: 1, y: 0 }
const revealOptions = { once: true }
const revealTransition = { duration: 0.5, ease: 'easeOut' }

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})
const submitted = ref(false)
const submitting = ref(false)

function handleSubmit() {
  submitting.value = true
  setTimeout(() => {
    submitted.value = true
    submitting.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 600)
}

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
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
          Contact Us
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Have a question or ready to start your cloud journey? Get in touch.
        </p>
      </div>
    </Motion>

    <Motion
      as="section"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
      class="px-4 py-12 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-12 lg:grid-cols-3">
          <!-- Visit / Email -->
          <div class="space-y-8 lg:col-span-1">
            <div>
              <h2 class="text-xl font-semibold text-white">Visit Us</h2>
              <div class="mt-4 space-y-4">
                <a
                  href="mailto:info@fi-techconsulting.com"
                  class="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
                >
                  <Mail class="h-5 w-5 shrink-0 text-blue-500" />
                  <span>info@fi-techconsulting.com</span>
                </a>
                <div class="flex items-start gap-3 text-slate-400">
                  <MapPin class="h-5 w-5 shrink-0 text-blue-500" />
                  <div class="flex flex-col gap-1">
                    <span>Texas, United State of America</span>
                    <span>Den Haag, Netherlands</span>
                    <span>Lagos, Nigeria</span>
                    <span>Harare, Zimbabwe</span>
                  </div>
                </div>
                <div class="flex items-center gap-3 text-slate-400">
                  <MessageSquare class="h-5 w-5 shrink-0 text-blue-500" />
                  <span>WhatsApp: +234 81613891244</span>
                </div>
              </div>
            </div>
            <div class="rounded-xl border border-white/10 bg-slate-900/50 p-6">
              <h3 class="font-medium text-white">Quick Links</h3>
              <ul class="mt-4 space-y-2">
                <li v-for="link in quickLinks" :key="link.label">
                  <RouterLink
                    :to="link.to"
                    class="text-slate-400 transition hover:text-blue-400"
                  >
                    {{ link.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>

          <!-- Form -->
          <div class="lg:col-span-2">
            <div class="rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
              <h2 class="text-xl font-semibold text-white">Send us a message</h2>
              <p class="mt-2 text-sm text-slate-400">
                Fill out the form below and we’ll get back to you as soon as we can.
              </p>
              <form v-if="!submitted" class="mt-6 space-y-4" @submit.prevent="handleSubmit">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label for="name" class="block text-sm font-medium text-slate-300">Name *</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="mt-1 w-full rounded-lg border border-white/20 bg-slate-950/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-slate-300">Email *</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="mt-1 w-full rounded-lg border border-white/20 bg-slate-950/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-slate-300">Subject</label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    class="mt-1 w-full rounded-lg border border-white/20 bg-slate-950/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-slate-300">Message *</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="5"
                    class="mt-1 w-full resize-y rounded-lg border border-white/20 bg-slate-950/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  :disabled="submitting"
                  class="w-full rounded-lg bg-blue-500 px-4 py-3 font-medium text-white transition hover:bg-blue-600 disabled:opacity-70 sm:w-auto sm:px-6"
                >
                  {{ submitting ? 'Sending…' : 'Submit' }}
                </button>
              </form>
              <div
                v-else
                class="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 p-6 text-center"
              >
                <p class="font-medium text-green-400">Thank you for your message.</p>
                <p class="mt-2 text-sm text-slate-400">We’ll get back to you soon.</p>
                <button
                  type="button"
                  class="mt-4 text-sm text-blue-500 hover:text-blue-400"
                  @click="submitted = false"
                >
                  Send another message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  </main>
</template>
