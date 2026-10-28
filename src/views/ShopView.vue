<template>
    <ProductSection />
    <CartSection :carts="carts" :cart-count="cartCount" />
</template>
<script>
import ProductSection from '@/components/ProductSection.vue';
import CartSection from '@/components/CartSection.vue';
export default {
    components: {
        ProductSection,
        CartSection
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
}
</script>