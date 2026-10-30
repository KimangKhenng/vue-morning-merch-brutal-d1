<template>
    <section id="products" class="max-w-6xl mx-auto px-6 pt-14">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-4 h-4 bg-brand border-2 border-black"></div>
            <h2 class="text-2xl font-black uppercase">Shop</h2>
        </div>

        <div class="bg-white border-4 border-black shadow-brutal p-4 flex flex-wrap items-center gap-4">
            <input ref="search" type="text" placeholder="Search products..."
                class="flex-1 min-w-48 border-2 border-black bg-paper px-3 py-2 font-bold focus:outline-none focus:bg-white">

            <!-- 4b. CATEGORY BUTTONS (4 copies, one is "active") -->
            <div class="flex flex-wrap gap-2">
                <button
                    class="border-2 border-black bg-black text-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer">All</button>
                <button
                    class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer hover:bg-paper">Stickers</button>
                <button
                    class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer hover:bg-paper">Apparel</button>
                <button
                    class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer hover:bg-paper">Desk</button>
            </div>
        </div>
        <p class="mt-4 text-sm font-bold uppercase">Showing 8 of 12 products</p>
        <label class="flex items-center gap-2 text-sm font-bold uppercase">
            Per page
            <select v-model.number="pageSize"
                class="border-2 border-black bg-white px-2 py-1 font-extrabold cursor-pointer focus:outline-none">
                <option v-for="n in pageSizes" :key="n" :value="n">{{ n }}</option>
            </select>
        </label>
    </section>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useProductStore } from '@/stores/product';
export default {
    data() {
        return {
            pageSize: 10
        }
    },
    methods: {
        ...mapActions(useProductStore, ["updatePageSize"])
    },
    watch: {
        async pageSize() {
            await this.updatePageSize(this.pageSize)
        }
    },
    computed: {
        ...mapState(useProductStore, ["pageSizes", "limit"])
    }
}
</script>
<!-- <script>
export default {
    mounted() {
        this.$refs.search.focus()
    }
}
</script> -->