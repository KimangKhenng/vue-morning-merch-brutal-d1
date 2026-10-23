<script setup></script>

<template>

  <div class="min-h-screen bg-paper text-black font-sans">
    <Announcement @click="annouce" />
    <TopNav />
    <main id="top">
      <!-- <LifecycleLogger v-if="show" />
      <button @click="show = !show">Toggle logger</button> -->
      <HeroSection />
      <FilterBar />
      <ProductSection />
      <CartSection />
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
      show: false
    }
  },
  methods: {
    annouce() {
      console.log("Hello")
    }
  }
}
</script>