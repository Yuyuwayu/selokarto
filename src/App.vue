<script setup>
import { RouterLink, RouterView } from 'vue-router'

const contact = {
  address: "Jl. Raya Sejahtera No. 1, Kec. Pecalonan, Kab. Kendal, Jawa Tengah 51352",
  email: "info.selokarto@desa.id",
  phone: "+62294123456",
  phoneDisplay: "(0294) 123-456"
}
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="font-sans bg-gray-50">
    <nav class="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <RouterLink to="/" class="text-2xl font-bold text-green-800">
          Desa Selokarto
        </RouterLink>
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink to="/" class="text-gray-700 hover:text-green-600 transition-colors">Beranda</RouterLink>
          <a href="/#budaya" class="text-gray-700 hover:text-green-600 transition-colors">Kebudayaan</a>
          <a href="/#peta" class="text-gray-700 hover:text-green-600 transition-colors">Peta</a>
          <a href="#kontak" class="text-gray-700 bg-green-100 hover:bg-green-200 px-4 py-2 rounded-full transition-colors">Kontak</a>
        </div>
      </div>
    </nav>

    <RouterView />

    <footer id="kontak" class="bg-gray-800 text-white">
      <div class="container mx-auto px-6 py-10">
        <div class="text-center">
          <h3 class="text-2xl font-bold">Pemerintah Desa Selokarto</h3>
          <p class="mt-2 text-gray-300">{{ contact.address }}</p>
          <div class="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a :href="'mailto:' + contact.email" class="text-gray-300 hover:text-green-400 transition-colors">Email: {{ contact.email }}</a>
            <span class="text-gray-500 hidden sm:inline">|</span>
            <a :href="'tel:' + contact.phone" class="text-gray-300 hover:text-green-400 transition-colors">Telepon: {{ contact.phoneDisplay }}</a>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-6 text-center">
          <p class="text-gray-400">© {{ currentYear }} Desa Selokarto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>