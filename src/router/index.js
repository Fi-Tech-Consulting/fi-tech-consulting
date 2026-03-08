import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'About Us' } },
    { path: '/services', name: 'services', component: ServicesView, meta: { title: 'Services' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: 'Contact Us' } },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} – Fi-Tech Consulting`
    : 'Fi-Tech Consulting – Empowering your Cloud Journey'
})

export default router
