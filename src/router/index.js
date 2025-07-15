import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CultureView from '../views/CultureView.vue' // Impor view baru

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // Fungsi ini akan membuat halaman scroll ke atas setiap kali berpindah halaman
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            // Rute ini akan menerima ID acara, contoh: /kebudayaan/sedekah-bumi
            path: '/kebudayaan/:id',
            name: 'cultureDetail',
            component: CultureView
        }
    ]
})

export default router