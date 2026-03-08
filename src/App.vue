<script setup>
import TheNavbar from './components/TheNavbar.vue'
import ProfessionalFooter from './components/ProfessionalFooter.vue'
</script>

<template>
  <div id="app" class="min-h-screen bg-slate-950">
    <TheNavbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <ProfessionalFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
