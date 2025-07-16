<script setup>
import { reactive, computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const allEventsData = reactive({
  'sedekah-bumi': {
    id: 'sedekah-bumi',
    title: "Upacara Adat Sedekah Bumi",
    category: "Upacara Adat",
    postDate: "Setiap Bulan Suro",
    author: "Admin Desa",
    imageUrl: "https://mongabay.co.id/wp-content/uploads/2022/07/SEDEKAH-BUMI-KUDUS-1-2048x1365.jpg",
    content: [
      { type: 'paragraph', text: "Sedekah Bumi adalah sebuah upacara adat yang telah diwariskan secara turun-temurun oleh masyarakat Desa Selokarto sebagai perwujudan rasa syukur kepada Tuhan Yang Maha Esa atas karunia hasil panen yang melimpah." },
      { type: 'paragraph', text: "Rangkaian acara biasanya dimulai dengan prosesi arak-arakan tumpeng raksasa yang terbuat dari hasil bumi. Puncak acara adalah doa bersama yang dipimpin oleh sesepuh desa, dilanjutkan dengan perebutan tumpeng oleh warga sebagai simbol harapan untuk mendapatkan berkah." },
      { type: 'blockquote', text: '"Melalui Sedekah Bumi, kami tidak hanya bersyukur, tetapi juga mempererat tali persaudaraan dan gotong royong antar warga."', source: "Kepala Desa" }
    ]
  },
  'karnaval-kemerdekaan': {
    id: 'karnaval-kemerdekaan',
    title: "Karnaval Kemerdekaan",
    category: "Perayaan Nasional",
    postDate: "Setiap 17 Agustus",
    author: "Karang Taruna",
    imageUrl: "https://alsyukrouniversal.sch.id/images/news/2018-karnaval-hut-ri-ke-73.jpg",
    content: [
      { type: 'paragraph', text: "Semangat kemerdekaan di Desa Selokarto selalu membara setiap tahunnya melalui Karnaval Kemerdekaan yang spektakuler. Jalanan desa berubah menjadi lautan merah putih, dipenuhi oleh partisipasi antusias dari semua kalangan, mulai dari anak-anak hingga orang dewasa." },
      { type: 'paragraph', text: "Berbagai kreativitas ditampilkan dalam bentuk arak-arakan mobil hias, kostum unik yang merefleksikan kebhinekaan, serta penampilan drumband dari sekolah-sekolah setempat. Tidak ketinggalan, berbagai lomba khas 17-an seperti panjat pinang dan balap karung menambah kemeriahan acara." },
      { type: 'blockquote', text: '"Ini bukan hanya tentang lomba, tapi tentang merayakan kebersamaan dan mengingat jasa para pahlawan dengan cara yang gembira."', source: "Ketua Panitia" }
    ]
  },
  'festival-seni': {
    id: 'festival-seni',
    title: "Festival Seni dan Budaya",
    category: "Acara Komunitas",
    postDate: "Setiap Akhir Tahun",
    author: "Pegiat Seni Desa",
    imageUrl: "https://get.pxhere.com/photo/carnival-clothing-toy-art-festival-temple-costume-masque-50892.jpg",
    content: [
      { type: 'paragraph', text: "Festival Seni dan Budaya menjadi panggung utama bagi para talenta lokal Desa Selokarto untuk unjuk gigi. Diselenggarakan setiap akhir tahun, festival ini menjadi wadah untuk melestarikan dan mengembangkan kekayaan seni yang dimiliki oleh desa." },
      { type: 'paragraph', text: "Pengunjung akan disuguhi beragam pertunjukan, mulai dari tari-tarian tradisional, pagelaran gamelan, hingga penampilan band-band modern dari generasi muda. Selain itu, terdapat juga pameran lukisan dan kerajinan tangan hasil karya warga desa yang menunjukkan kreativitas tanpa batas." },
      { type: 'blockquote', text: '"Senang sekali bisa tampil di depan warga sendiri. Ini menjadi motivasi bagi kami untuk terus berkarya dan menjaga budaya kita."', source: "Seniman Lokal" }
    ]
  }
});

const otherEvents = reactive([
  { id: 'sedekah-bumi', title: "Upacara Adat Sedekah Bumi", imageUrl: "https://mongabay.co.id/wp-content/uploads/2022/07/SEDEKAH-BUMI-KUDUS-1-2048x1365.jpg" },
  { id: 'karnaval-kemerdekaan', title: "Karnaval Kemerdekaan", imageUrl: "https://alsyukrouniversal.sch.id/images/news/2018-karnaval-hut-ri-ke-73.jpg" },
  { id: 'festival-seni', title: "Festival Seni dan Budaya", imageUrl: "https://get.pxhere.com/photo/carnival-clothing-toy-art-festival-temple-costume-masque-50892.jpg" }
]);



const route = useRoute();


const eventDetail = computed(() => {

  const eventId = route.params.id;

  return allEventsData[eventId] || {
    id: 'not-found',
    title: "Acara Tidak Ditemukan",
    category: "Error 404",
    postDate: "-",
    author: "-",
    imageUrl: "https://source.unsplash.com/random/800x600?error,404",
    content: [{ type: 'paragraph', text: "Maaf, konten yang Anda cari tidak dapat ditemukan. Mungkin telah dihapus atau URL yang Anda masukkan salah." }]
  };
});
</script>

<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-6">
      <nav class="text-sm mb-8 text-gray-500">
        <RouterLink to="/" class="hover:text-green-600">Beranda</RouterLink>
        <span class="mx-2">/</span>
        <a href="/#budaya" class="hover:text-green-600">Kebudayaan</a>
        <span class="mx-2">/</span>
        <span class="text-gray-800 font-medium">{{ eventDetail.title }}</span>
      </nav>

      <div class="bg-white p-6 md:p-10 rounded-lg shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-12">

          <div class="lg:col-span-2 mb-6 lg:mb-0">
            <img :src="eventDetail.imageUrl" :alt="eventDetail.title" class="w-full h-auto object-cover rounded-lg shadow-md">
          </div>

          <div class="lg:col-span-3">
            <p class="text-green-600 font-semibold mb-2">{{ eventDetail.category }}</p>
            <h1 class="text-4xl font-extrabold text-gray-800 mb-4">{{ eventDetail.title }}</h1>

            <div class="flex items-center text-sm text-gray-500 mb-6 space-x-4">
              <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span>{{ eventDetail.postDate }}</span></div>
              <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg><span>{{ eventDetail.author }}</span></div>
            </div>

            <div class="prose max-w-none text-gray-700 leading-relaxed">
              <template v-for="(block, index) in eventDetail.content" :key="index">
                <p v-if="block.type === 'paragraph'">{{ block.text }}</p>
                <blockquote v-if="block.type === 'blockquote'" class="border-l-4 border-green-500 bg-green-50 p-4 my-6"><p class="font-semibold italic">"{{ block.text }}"</p><cite class="block text-right not-italic mt-2">- {{ block.source }}</cite></blockquote>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20">
        <h3 class="text-2xl font-bold text-center text-gray-800 mb-2">Lihat Acara Lainnya</h3>
        <div class="w-20 h-1 bg-green-600 mx-auto mb-10"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RouterLink v-for="event in otherEvents" :key="event.id" :to="'/kebudayaan/' + event.id" class="block bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img :src="event.imageUrl" :alt="event.title" class="w-full h-40 object-cover">
            <div class="p-4"><h4 class="font-bold text-gray-800">{{ event.title }}</h4></div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>