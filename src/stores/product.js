import { defineStore } from 'pinia';
import { getProducts } from '@/services/api';
export const useProductStore = defineStore('product', {
    state: () => ({
        page: 1,
        limit: 10,
        pageSizes: [10, 20, 30, 50],
        meta: {},
        products: [],
        loading: true,
        error: "",
    }),
    getters: {
        count: (state) => state.products.length
    },
    actions: {
        async loadProducts() {
            this.loading = true
            try {
                const reponse = await getProducts(this.page, this.limit)
                this.products = reponse.data
                this.meta = reponse.meta
            } catch (err) {
                this.error = err.message;   // 2. failure: keep the message
            } finally {
                this.loading = false
            }
        },
        async updatePageSize(limit) {
            this.limit = limit
            await this.loadProducts()
        }
    }
})