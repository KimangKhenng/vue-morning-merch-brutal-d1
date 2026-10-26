<template>
    <section class="max-w-6xl mx-auto px-6 py-6">
        <div v-if="loading" class="max-w-full animate-pulse">
            <div
                class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                &nbsp;
            </div>
            <div
                class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                &nbsp;
            </div>
            <div
                class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                &nbsp;
            </div>
            <div
                class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                &nbsp;
            </div>
            <div
                class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                &nbsp;
            </div>
        </div>
        <div v-else-if="error">{{ error }}</div>
        <p v-else-if="products.length === 0"
            class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
            No products match your search.
        </p>
        <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard v-for="product in products" :key="product.id" :product="product" @add="addToCart" />
        </div>
    </section>
</template>
<script>
import ProductCard from '@/components/products/ProductCard.vue'

export default {
    components: {
        ProductCard,
    },
    async created() {
        await this.loadProducts()
    },
    data() {
        return {
            products: [],
            loading: true,
            error: "",
        }
    },
    emits: ['add'],
    methods: {
        addToCart(product) {
            this.$emit('add', product)
        },
        async loadProducts() {
            this.loading = true
            try {
                const response = await fetch("/products.json");
                this.products = await response.json();
            } catch (err) {
                this.error = err.message;   // 2. failure: keep the message
            } finally {
                this.loading = false
            }
        },
    }
}
</script>
