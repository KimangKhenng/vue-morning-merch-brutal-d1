<template>
    <section class="max-w-6xl mx-auto px-6 py-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard v-for="product in products" :key="product.id" :product="product" @add="addToCart" />
        </div>

        <!-- 5b. EMPTY STATE (hidden now — show it when a search finds nothing) -->
        <p class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
            No products match your search.
        </p>
    </section>
</template>
<script>
import ProductCard from '@/components/products/ProductCard.vue'

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Semicolon Sticker Pack',
                    category: 'Stickers',
                    price: 4.0,
                    oldPrice: null,
                    soldOut: false,
                    description: '10 vinyl stickers for your laptop.',
                },
                {
                    id: 2,
                    name: 'Bug Hunter Hoodie',
                    category: 'Apparel',
                    price: 45.0,
                    oldPrice: 60.0,
                    soldOut: false,
                    description: 'Heavy cotton. Warm for late-night fixes.',
                },
                {
                    id: 3,
                    name: 'Git Push Mug',
                    category: 'Desk',
                    price: 12.0,
                    oldPrice: null,
                    soldOut: false,
                    description: 'Holds 350ml of coffee. Force push not included.',
                },
                {
                    id: 4,
                    name: 'Dark Mode Tee',
                    category: 'Apparel',
                    price: 22.0,
                    oldPrice: null,
                    soldOut: false,
                    description: '100% black. Easy on the eyes.',
                },
                {
                    id: 5,
                    name: 'Ctrl+Z Mousepad',
                    category: 'Desk',
                    price: 15.0,
                    oldPrice: null,
                    soldOut: false,
                    description: 'Large size. Undo your mistakes in style.',
                },
                {
                    id: 6,
                    name: 'Component Pin',
                    category: 'Stickers',
                    price: 3.5,
                    oldPrice: null,
                    soldOut: false,
                    description: 'Metal pin. Small, reusable, and clean.',
                },
                {
                    id: 7,
                    name: '404 Notebook',
                    category: 'Desk',
                    price: 9.0,
                    oldPrice: null,
                    soldOut: true,
                    description: 'Blank pages. Page not found.',
                },
                {
                    id: 8,
                    name: 'Rubber Duck Debugger',
                    category: 'Desk',
                    price: 8.0,
                    oldPrice: 10.0,
                    soldOut: false,
                    description: 'Explain your bug to the duck. It always helps.',
                },
            ],
        }
    },
    emits: ['add'],
    methods: {
        addToCart(product) {
            this.$emit('add', product)
        }
    }
}
</script>
