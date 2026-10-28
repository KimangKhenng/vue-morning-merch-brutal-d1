<template>
  <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
    <div class="relative h-36 border-b-4 border-black flex items-end p-3" :class="{
      'bg-brand text-white': product.category === 'Stickers',
      'bg-black text-white': product.category === 'Apparel',
      'bg-white text-black': product.category === 'Desk',
    }">
      <span class="text-6xl font-black leading-none">{{ number }}</span>
      <span v-if="product.soldOut"
        class="absolute top-3 right-3 bg-black text-white border-2 border-white text-xs font-extrabold uppercase px-2 py-1">Sold
        out</span>
      <span v-else-if="product.oldPrice"
        class="absolute top-3 right-3 bg-brand text-white border-2 border-black text-xs font-extrabold uppercase px-2 py-1">Sale</span>
    </div>
    <div class="p-4 flex flex-col gap-2 grow">
      <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">{{
        product.category
        }}</span>
      <h3 class="text-lg font-black uppercase leading-tight">{{ product.name }}</h3>
      <p class="text-sm font-medium">{{ product.description }}</p>
      <div class="mt-auto pt-3 flex items-center justify-between gap-2">
        <p class="text-xl font-black">
          ${{ product.price.toFixed(2) }}
          <span v-if="product.oldPrice" class="text-sm font-bold line-through text-black/50">${{
            product.oldPrice.toFixed(2) }}</span>
        </p>
        <div class="flex gap-2">
          <button @click="goToProductPage"
            class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">
            Go to product
          </button>
          <button @click="$emit('add', product)" :disabled="product.soldOut"
            class="border-2 border-black px-3 py-2 text-xs font-extrabold uppercase" :class="product.soldOut
              ? 'bg-paper text-black/40 cursor-not-allowed'
              : 'bg-brand text-white shadow-brutal-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none'
              ">
            Add
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
  emits: ["add"],
  computed: {
    number() {
      return String(this.product.id).padStart(2, '0')
    },
  },
  methods: {
    goToProductPage() {
      this.$router.push(`/products/${this.product.id}`)
    }
  }
}
</script>
