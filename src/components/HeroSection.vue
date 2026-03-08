<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Empowering your Cloud Journey
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        Expert guidance from certification to career success—your complete cloud transformation partner.
      </p>
      <div
        class="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <p class="mb-4 text-sm text-slate-400">
          Start learning or get tailored consulting for your goals.
        </p>
        <div class="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <RouterLink
            to="/contact"
            class="inline-flex justify-center rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600"
          >
            Start Learning
          </RouterLink>
          <RouterLink
            to="/contact"
            class="inline-flex justify-center rounded-lg border border-white/20 px-5 py-2.5 font-medium text-white transition hover:bg-white/5"
          >
            Consult Us Now
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
