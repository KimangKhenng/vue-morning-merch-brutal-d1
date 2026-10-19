<script setup></script>

<template>

  <div class="min-h-screen bg-paper text-black font-sans">

    <!-- ================= 1. ANNOUNCEMENT BAR ================= -->
    <Announcement />

    <!-- ================= 2. NAVBAR ================= -->
    <TopNav />

    <main id="top">

      <!-- ================= 3. HERO ================= -->

      <HeroSection />
      <!-- ================= 4. FILTER BAR ================= -->
      <FilterBar />

      <!-- ================= 5. PRODUCT GRID (8 copies of the same card) ================= -->

      <ProductSection />
      <!-- ================= 6. CART ================= -->

      <CartSection />
      <!-- ================= 7. PERKS (3 copies of the same box) ================= -->

      <PerkSection />
      <!-- ================= 8. FAQ (4 copies of the same item) ================= -->

      <FAQSection />
      <!-- ================= 9. NEWSLETTER ================= -->
      <NewSletter />
    </main>

    <!-- ================= 10. FOOTER (3 columns, each with a list of links) ================= -->
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
  }
}
</script>