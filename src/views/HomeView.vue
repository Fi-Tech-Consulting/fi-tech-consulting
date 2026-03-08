<script setup>
import { Motion } from '@oku-ui/motion'
import HeroSection from '../components/HeroSection.vue'
import PathCardsSection from '../components/PathCardsSection.vue'
import SubscribeSection from '../components/SubscribeSection.vue'

const revealInitial = { opacity: 0, y: 24 }
const revealInView = { opacity: 1, y: 0 }
const revealOptions = { once: true }
const revealTransition = { duration: 0.5, ease: 'easeOut' }
</script>

<template>
  <main>
    <Motion
      as="div"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
    >
      <HeroSection />
    </Motion>
    <Motion
      as="div"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
    >
      <PathCardsSection />
    </Motion>
    <Motion
      as="div"
      :initial="revealInitial"
      :in-view="revealInView"
      :in-view-options="revealOptions"
      :transition="revealTransition"
    >
      <SubscribeSection />
    </Motion>
  </main>
</template>
