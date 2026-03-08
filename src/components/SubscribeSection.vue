<script setup>
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  email.value = ''
}
</script>

<template>
  <section class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <div class="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center">
      <h2 class="text-2xl font-bold text-white sm:text-3xl">
        Subscribe For Latest Update
      </h2>
      <p class="mt-2 text-slate-400">
        Get tips, resources, and news about cloud careers and certifications.
      </p>
      <form
        class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center"
        @submit.prevent="handleSubmit"
      >
        <input
          v-model="email"
          type="email"
          placeholder="you@example.com"
          class="min-w-0 flex-1 rounded-lg border border-white/20 bg-slate-950/50 px-4 py-2.5 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          class="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
      <p v-if="submitted" class="mt-4 text-sm text-green-400">
        Thanks for subscribing. We'll be in touch.
      </p>
    </div>
  </section>
</template>
