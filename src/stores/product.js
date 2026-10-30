import { defineStore } from 'pinia';

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
                const response = await fetch("/products.json");
                this.products = await response.json();
            } catch (err) {
                this.error = err.message;   // 2. failure: keep the message
            } finally {
                this.loading = false
            }
        },
    }
})