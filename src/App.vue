<script setup></script>

<template>
  <div class="min-h-screen bg-paper text-black font-sans">
    <Announcement />
    <TopNav />
    <main id="top">
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import FooterSection from '@/components/FooterSection.vue';
import Announcement from '@/components/Announcement.vue';
export default {
  components: {
    TopNav,
    Announcement,
    FooterSection
  },
}
</script>