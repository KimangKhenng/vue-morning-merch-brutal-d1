import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ShopView from "@/views/ShopView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/about', component: AboutView },
        { path: '/shop', component: ShopView }
    ],
    linkActiveClass: 'bg-black text-white border-black',
    linkExactActiveClass: 'bg-black text-white border-black',
})

export default router