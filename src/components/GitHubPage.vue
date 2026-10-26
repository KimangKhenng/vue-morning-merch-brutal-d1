<template>
    <SkeletonCard v-if="loading" />
    <div v-else>
        <ul>
            <li v-for="(item, index) in repos" :key="index">
                {{ item.id }} - {{ item.full_name }}
            </li>
        </ul>
    </div>
</template>
<script>
import SkeletonCard from '@/components/SkeletonCard.vue';
export default {
    components: { SkeletonCard },
    data() {
        return {
            repos: [],
            loading: true,
            error: "",
        }
    },
    async created() {
        await this.fetchRepos()
    },
    methods: {
        async fetchRepos() {
            this.loading = true
            try {
                const API = "https://api.github.com/users/tfd-ed/repos"
                const response = await fetch(API)
                this.repos = await response.json()
            } catch (err) {
                this.error = err.message
            } finally {
                this.loading = false
            }
        }
    }
}
</script>