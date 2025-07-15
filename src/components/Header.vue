<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const navItems = ref([
  { path: '/', name: 'Beranda' },
  { path: '/profil', name: 'Profil' },
  { path: '/potensi', name: 'Potensi' },
  { path: '/berita', name: 'Kabar Desa' },
  { path: '/galeri', name: 'Galeri' },
  { path: '/kontak', name: 'Kontak' },
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 left-0 right-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <RouterLink to="/" class="flex-shrink-0 flex items-center space-x-2">
          <svg class="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>
          <span class="text-xl font-bold text-gray-800">Desa Selokarto</span>
        </RouterLink>

        <nav class="hidden md:flex space-x-8">
          <RouterLink v-for="item in navItems" :key="item.path" :to="item.path"
                      class="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium"
                      active-class="text-green-600 font-semibold">
            {{ item.name }}
          </RouterLink>
        </nav>

        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-800">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" @click="closeMenu"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-green-600 hover:text-white"
                    active-class="bg-green-500 text-white">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>