<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const villageData = reactive({
  name: "Desa Selokarto",
  tagline: "Menjelajahi Keindahan dan Potensi Desa yang Asri, Mandiri, dan Berbudaya.",
  heroImage: 'https://i.imgur.com/fK6Cu1F.jpeg',
  headOfVillage: {
    name: "[Nama Kepala Desa]",
    title: "Kepala Desa Selokarto",
    imageUrl: "https://i.pravatar.cc/300?u=kepaladesa",
    welcomeSpeech: `Assalamu'alaikum Warahmatullahi Wabarakatuh,<br><br>
      Dengan penuh rasa syukur, kami menyambut Anda di portal digital resmi Desa Selokarto. Website ini kami bangun sebagai jembatan informasi, menghubungkan pemerintah desa dengan seluruh lapisan masyarakat dan dunia luar.
      <br><br>
      Kami berkomitmen untuk mewujudkan pemerintahan yang transparan dan akuntabel. Mari bersama-sama kita bangun Desa Selokarto menjadi desa yang lebih maju, sejahtera, dan berdaya saing. Terima kasih.`
  },
  potentials: [
    { title: "Pertanian Subur", description: "Lahan pertanian yang luas dan subur menjadi tulang punggung ekonomi desa.", imageUrl: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg" },
    { title: "Wisata Alam", description: "Dianugerahi keindahan alam berupa air terjun dan perbukitan hijau.", imageUrl: "https://images.pexels.com/photos/32984693/pexels-photo-32984693.jpeg" },
    { title: "Kerajinan Tangan", description: "Keterampilan warga dalam mengolah bambu dan kayu menghasilkan produk unik.", imageUrl: "https://images.pexels.com/photos/1297938/pexels-photo-1297938.jpeg" }
  ],

  administrativeMapImage: "https://petatematikindo.wordpress.com/wp-content/uploads/2013/03/administrasi-jawa-tegah-a1-1.jpg", // Ganti dengan URL gambar peta administrasi Anda
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.041399494337!2d109.85018721458239!3d-7.037427387432219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7015d38a4365c3%3A0x16c8e21ce392529f!2sSelokarto%2C%20Kec.%20Pecalungan%2C%20Kabupaten%20Batang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1752558042328!5m2!1sid!2sid",

  events: [
    {
      id: 'sedekah-bumi',
      title: "Upacara Adat Sedekah Bumi",
      date: "Setiap Bulan Suro",
      description: "Tradisi tahunan sebagai wujud syukur kepada Tuhan atas hasil bumi yang melimpah.",
      imageUrl: "https://mongabay.co.id/wp-content/uploads/2022/07/SEDEKAH-BUMI-KUDUS-1-2048x1365.jpg"
    },
    {
      id: 'karnaval-kemerdekaan',
      title: "Karnaval Kemerdekaan",
      date: "Setiap 17 Agustus",
      description: "Perayaan hari kemerdekaan RI dengan pawai budaya yang meriah dan diikuti seluruh warga.",
      imageUrl: "https://alsyukrouniversal.sch.id/images/news/2018-karnaval-hut-ri-ke-73.jpg"
    },
    {
      id: 'festival-seni',
      title: "Festival Seni dan Budaya",
      date: "Akhir Tahun",
      description: "Pentas seni yang menampilkan berbagai kesenian lokal, dari tari tradisional hingga musik modern.",
      imageUrl: "https://get.pxhere.com/photo/carnival-clothing-toy-art-festival-temple-costume-masque-50892.jpg"
    }
  ]
});

const heroStyle = reactive({
  backgroundImage: `url('${villageData.heroImage}')`
});
</script>

<template>
  <main>
    <header id="beranda" class="hero-section relative h-[600px] flex items-center justify-center text-center" :style="heroStyle">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-black/60"></div>
      <div class="relative z-10 px-4"><h1 class="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4">Selamat Datang di {{ villageData.name }}</h1><p class="text-white text-lg md:text-xl font-light max-w-2xl mx-auto">{{ villageData.tagline }}</p></div>
    </header>
    <section id="tentang" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6"><h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Profil Desa {{ villageData.name }}</h2><div class="w-24 h-1 bg-green-600 mx-auto mb-12"></div><div class="flex flex-col lg:flex-row items-center gap-12"><div class="lg:w-1/3 text-center"><img :src="villageData.headOfVillage.imageUrl" alt="Foto Kepala Desa" class="rounded-full shadow-lg w-60 h-60 mx-auto object-cover border-4 border-white"><h3 class="text-xl font-bold mt-6">{{ villageData.headOfVillage.name }}</h3><p class="text-gray-500">{{ villageData.headOfVillage.title }}</p></div><div class="lg:w-2/3"><h4 class="text-2xl font-semibold text-gray-700 mb-4">Sambutan Hangat dari Kami</h4><p class="text-gray-600 leading-relaxed text-justify" v-html="villageData.headOfVillage.welcomeSpeech"></p></div></div></div>
    </section>

    <section id="potensi" class="py-20 bg-white">
      <div class="container mx-auto px-6"><h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Potensi Unggulan Desa</h2><div class="w-24 h-1 bg-green-600 mx-auto mb-12"></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div v-for="potential in villageData.potentials" :key="potential.title" class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"><img :src="potential.imageUrl" :alt="potential.title" class="w-full h-48 object-cover"><div class="p-6"><h3 class="text-xl font-bold mb-2 text-green-800">{{ potential.title }}</h3><p class="text-gray-600">{{ potential.description }}</p></div></div></div></div>
    </section>

    <section id="budaya" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Kebudayaan & Acara Desa</h2>
        <div class="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in villageData.events" :key="event.id" class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img :src="event.imageUrl" :alt="event.title" class="w-full h-48 object-cover">
            <div class="p-6 flex flex-col flex-grow">
              <p class="text-sm text-gray-500 mb-1">{{ event.date }}</p>
              <h3 class="text-xl font-bold mb-2 text-green-800">{{ event.title }}</h3>
              <p class="text-gray-600 mb-4 flex-grow">{{ event.description }}</p>
              <RouterLink :to="'/kebudayaan/' + event.id" class="mt-auto self-start bg-green-100 text-green-800 px-4 py-2 rounded-full hover:bg-green-200 transition-colors font-semibold">
                Baca Selengkapnya
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="peta" class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Peta Wilayah Administratif</h2>
        <div class="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
        <div class="w-full rounded-lg shadow-lg overflow-hidden border">
          <img :src="villageData.administrativeMapImage" alt="Peta Administrasi Desa Selokarto" class="w-full h-auto object-cover">
        </div>
           </div>
    </section>
    <section id="peta2" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Peta Interaktif Desa</h2>
        <div class="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

        <div class="w-full aspect-video rounded-lg shadow-lg overflow-hidden">
          <iframe
              :src="villageData.mapEmbedUrl"
              class="w-full h-full"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-section { background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover; }
html { scroll-behavior: smooth; }
</style>