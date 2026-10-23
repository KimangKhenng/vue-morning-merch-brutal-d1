<script setup></script>

<template>

  <div class="min-h-screen bg-paper text-black font-sans">
    <Announcement @click="annouce" />
    <TopNav :cart-count="cartCount" />
    <main id="top">
      <!-- <LifecycleLogger v-if="show" />
      <button @click="show = !show">Toggle logger</button> -->
      <HeroSection />
      <FilterBar />
      <ProductSection @add="addToCart" />
      <CartSection :cart-count="cartCount" :carts="carts" @remove="removeFromCart" />
      <PerkSection />
      <FAQSection />
      <NewSletter />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import HeroSection from '@/components/HeroSection.vue'
import FilterBar from '@/components/FilterBar.vue';
import ProductSection from '@/components/ProductSection.vue';
import CartSection from '@/components/CartSection.vue';
import PerkSection from '@/components/PerkSection.vue';
import FAQSection from '@/components/FAQSection.vue';
import NewSletter from '@/components/NewSletter.vue';
import FooterSection from '@/components/FooterSection.vue';
import Announcement from '@/components/Announcement.vue';

export default {
  components: {
    TopNav,
    FilterBar,
    HeroSection,
    ProductSection,
    CartSection,
    PerkSection,
    FAQSection,
    NewSletter,
    Announcement,
    FooterSection
  },
  data() {
    return {
      carts: [
        { name: 'Git Push Mug', price: 12.00, quantity: 1 },
        { name: 'Dark Mode Tee', price: 22.00, quantity: 1 },
        { name: 'Semicolon Sticker Pack', price: 4.00, quantity: 2 }
      ]
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
        existingItem.quantity = Number(existingItem.quantity) + Number(product.quantity);
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