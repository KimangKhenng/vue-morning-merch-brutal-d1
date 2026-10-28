import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ShopView from "@/views/ShopView.vue";
import NotFound from "@/views/NotFound.vue";
import ContactView from "@/views/ContactView.vue";
import MenuView from "@/views/MenuView.vue";
import ProductDetailVIew from "@/views/products/ProductDetailVIew.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/about', component: AboutView },
        { path: '/shop', component: ShopView },
        { path: '/contact', component: ContactView },
        { path: '/menu', component: MenuView },
        { path: '/products/:id', component: ProductDetailVIew },
        { path: "/:pathMatch(.*)*", component: NotFound },
    ],
    linkActiveClass: 'bg-black text-white border-black',
    linkExactActiveClass: 'bg-black text-white border-black',
})

export default router