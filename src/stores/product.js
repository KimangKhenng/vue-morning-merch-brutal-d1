import { defineStore } from 'pinia';
import { getProducts } from '@/services/api';
export const useProductStore = defineStore('product', {
    state: () => ({
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
                this.products = await getProducts()
            } catch (err) {
                this.error = err.message;   // 2. failure: keep the message
            } finally {
                this.loading = false
            }
        },
    }
})