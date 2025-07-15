<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <div class="text-2xl font-bold text-green-800">
        Desa Selokarto
      </div>
      <div class="hidden md:flex space-x-6">
        <RouterLink to="/" class="text-gray-700 hover:text-green-600">Beranda</RouterLink>
        <RouterLink to="/profil" class="text-gray-700 hover:text-green-600">Profil Desa</RouterLink>
        <RouterLink to="/potensi" class="text-gray-700 hover:text-green-600">Potensi</RouterLink>
        <RouterLink to="/berita" class="text-gray-700 hover:text-green-600">Berita</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>