<template>
    <section id="github" class="max-w-6xl mx-auto px-6 pt-14 mb-10">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-4 h-4 bg-brand border-2 border-black"></div>
            <h2 class="text-2xl font-black uppercase">GitHub Repos</h2>
        </div>

        <!-- FILTER BAR (static - TODO: bind and implement) -->
        <div class="bg-white border-4 border-black shadow-brutal p-4 flex flex-wrap items-center gap-4">
            <input type="text" placeholder="Search repos..."
                class="flex-1 min-w-48 border-2 border-black bg-paper px-3 py-2 font-bold focus:outline-none focus:bg-white">

            <select
                class="border-2 border-black bg-paper px-3 py-2 text-sm font-extrabold uppercase cursor-pointer focus:outline-none focus:bg-white">
                <option value="">All languages</option>
            </select>

            <select
                class="border-2 border-black bg-paper px-3 py-2 text-sm font-extrabold uppercase cursor-pointer focus:outline-none focus:bg-white">
                <option value="updated">Recently updated</option>
                <option value="stars">Most stars</option>
                <option value="name">Name A-Z</option>
            </select>

            <label class="flex items-center gap-2 text-sm font-extrabold uppercase cursor-pointer select-none">
                <input type="checkbox" class="w-5 h-5 accent-black cursor-pointer">
                Hide forks
            </label>

            <button
                class="border-2 border-black bg-brand text-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                Reset
            </button>
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p class="text-sm font-bold uppercase">Showing {{ repos.length }} repos</p>
            <label class="flex items-center gap-2 text-sm font-bold uppercase">
                Per page
                <select class="border-2 border-black bg-white px-2 py-1 font-extrabold cursor-pointer focus:outline-none">
                    <option>6</option>
                    <option>12</option>
                    <option>24</option>
                </select>
            </label>
        </div>

        <div v-if="loading" class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard v-for="n in 6" :key="n" />
        </div>

        <p v-else-if="error" class="mt-6 bg-white border-4 border-black shadow-brutal p-6 font-bold">{{ error }}</p>

        <div v-else class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a v-for="repo in repos" :key="repo.id" :href="repo.html_url" target="_blank" rel="noopener"
                class="bg-white border-4 border-black shadow-brutal flex flex-col hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-sm transition-transform">
                <div class="px-4 py-3 border-b-4 border-black flex items-center justify-between gap-2"
                    :class="repo.fork ? 'bg-black text-white' : 'bg-brand text-white'">
                    <span class="text-xs font-extrabold uppercase">{{ repo.language || 'Other' }}</span>
                    <span v-if="repo.fork"
                        class="border-2 border-white text-xs font-extrabold uppercase px-2 py-0.5">Fork</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <h3 class="text-lg font-black uppercase leading-tight break-words">{{ repo.name }}</h3>
                    <p class="text-sm font-medium line-clamp-3">
                        {{ repo.description || 'No description provided.' }}
                    </p>
                    <div class="mt-auto pt-3 flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase">
                        <span class="border-2 border-black px-2 py-0.5">★ {{ repo.stargazers_count }}</span>
                        <span class="border-2 border-black px-2 py-0.5">⑂ {{ repo.forks_count }}</span>
                        <span class="ml-auto text-black/50">{{ repo.updated_at.slice(0, 10) }}</span>
                    </div>
                </div>
            </a>
        </div>

        <!-- PAGINATION (static - TODO: bind and implement) -->
        <nav class="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
            <button class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase min-w-10 cursor-pointer hover:bg-paper">Prev</button>
            <button class="border-2 border-black bg-black text-white px-3 py-2 text-sm font-extrabold uppercase min-w-10 cursor-pointer">1</button>
            <button class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase min-w-10 cursor-pointer hover:bg-paper">2</button>
            <button class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase min-w-10 cursor-pointer hover:bg-paper">Next</button>
        </nav>
    </section>
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
                const API = "https://api.github.com/users/tfd-ed/repos?per_page=100"
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
