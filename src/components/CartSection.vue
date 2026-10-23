<template>
    <section id="cart" class="max-w-3xl mx-auto px-6 py-14">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-4 h-4 bg-brand border-2 border-black"></div>
            <h2 class="text-2xl font-black uppercase">Your cart ({{ cartCount }} items)</h2>
        </div>

        <div class="bg-white border-4 border-black shadow-brutal p-5">
            <ul class="space-y-3">
                <!-- 6a. CART ROWS (3 copies) -->
                <CartCard v-for="(cart, index) in carts" :key="index" :product="cart" @remove="removeProduct" />
            </ul>

            <!-- 6b. EMPTY CART (hidden now — show it when the cart has no rows) -->
            <p class="hidden border-2 border-black bg-paper p-4 text-center font-extrabold uppercase">Your cart is
                empty.
            </p>

            <div class="mt-5 pt-5 border-t-4 border-black flex flex-wrap items-center justify-between gap-4">
                <p class="text-2xl font-black uppercase">Total: ${{ totalPrice }}</p>
                <div class="flex gap-3">
                    <button
                        class="border-2 border-black bg-white px-4 py-2 text-sm font-extrabold uppercase cursor-pointer">Clear</button>
                    <button
                        class="border-2 border-black bg-brand text-white shadow-brutal-sm px-4 py-2 text-sm font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Checkout</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import CartCard from './carts/CartCard.vue';
export default {
    components: {
        CartCard
    },
    props: {
        carts: { type: Array, required: true },
    },
    emits: ["remove"],
    computed: {
        totalPrice() {
            return this.carts.reduce((total, cart) => total + (cart.price * cart.quantity), 0).toFixed(2);
        },
        cartCount() {
            return this.carts.reduce((count, cart) => count + cart.quantity, 0);
        }
    },
    methods: {
        removeProduct(product) {
            this.$emit('remove', product);
        }
    }
}
</script>