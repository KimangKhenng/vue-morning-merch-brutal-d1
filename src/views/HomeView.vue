<template>
    <!-- <GitHubPage /> -->
    <HeroSection />
    <FilterBar />
    <ProductSection @add="addToCart" />
    <CartSection :cart-count="cartCount" :carts="carts" @remove="removeFromCart" />
    <PerkSection />
    <FAQSection />
    <NewSletter />
</template>
<script>
import HeroSection from '@/components/HeroSection.vue'
import FilterBar from '@/components/FilterBar.vue';
import ProductSection from '@/components/ProductSection.vue';
import CartSection from '@/components/CartSection.vue';
import PerkSection from '@/components/PerkSection.vue';
import FAQSection from '@/components/FAQSection.vue';
import NewSletter from '@/components/NewSletter.vue';
// import GitHubPage from '@/components/GitHubPage.vue';
export default {
    components: {
        FilterBar,
        HeroSection,
        ProductSection,
        CartSection,
        PerkSection,
        FAQSection,
        NewSletter,
        // GitHubPage,
    },
    data() {
        return {
            carts: [
                { name: 'Git Push Mug', price: 12.00, quantity: 1 },
                { name: 'Dark Mode Tee', price: 22.00, quantity: 1 },
                { name: 'Semicolon Sticker Pack', price: 4.00, quantity: 2 }
            ],

        }
    },
    computed: {
        cartCount() {
            return this.carts.reduce((count, cart) => count + cart.quantity, 0);
        }
    },
    methods: {

        removeFromCart(product) {
            this.carts = this.carts.filter(cart => cart.name !== product.name);
        },
        addToCart(product) {
            const existingItem = this.carts.find(item => item.name === product.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.carts.push({
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
            }
        },
    }
}
</script>