<template>
    <section id="github" class="max-w-6xl mx-auto px-6 pt-14 mb-10">
        <div class="flex items-center gap-3 mb-6">
            <div class="w-4 h-4 bg-brand border-2 border-black"></div>
            <h2 class="text-2xl font-black uppercase">GitHub Repos</h2>
        </div>

        <!-- FILTER BAR -->
        <div class="bg-white border-4 border-black shadow-brutal p-4 flex flex-wrap items-center gap-4">
            <input v-model="search" type="text" placeholder="Search repos..."
                class="flex-1 min-w-48 border-2 border-black bg-paper px-3 py-2 font-bold focus:outline-none focus:bg-white">

            <select v-model="language"
                class="border-2 border-black bg-paper px-3 py-2 text-sm font-extrabold uppercase cursor-pointer focus:outline-none focus:bg-white">
                <option value="">All languages</option>
                <option v-for="lang in languages" :key="lang" :value="lang">{{ lang }}</option>
            </select>

            <select v-model="sortBy"
                class="border-2 border-black bg-paper px-3 py-2 text-sm font-extrabold uppercase cursor-pointer focus:outline-none focus:bg-white">
                <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>

            <label class="flex items-center gap-2 text-sm font-extrabold uppercase cursor-pointer select-none">
                <input v-model="hideForks" type="checkbox" class="w-5 h-5 accent-black cursor-pointer">
                Hide forks
            </label>

            <button v-if="hasActiveFilters" @click="resetFilters"
                class="border-2 border-black bg-brand text-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                Reset
            </button>
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p class="text-sm font-bold uppercase">
                <template v-if="loading">Loading repos...</template>
                <template v-else>Showing {{ pagedRepos.length }} of {{ filteredRepos.length }} repos</template>
            </p>
            <label class="flex items-center gap-2 text-sm font-bold uppercase">
                Per page
                <select v-model.number="pageSize"
                    class="border-2 border-black bg-white px-2 py-1 font-extrabold cursor-pointer focus:outline-none">
                    <option v-for="n in pageSizes" :key="n" :value="n">{{ n }}</option>
                </select>
            </label>
        </div>

        <!-- LOADING -->
        <div v-if="loading" class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard v-for="n in 6" :key="n" />
        </div>

        <!-- ERROR -->
        <div v-else-if="error" class="mt-6 bg-white border-4 border-black shadow-brutal p-6">
            <p class="text-xl font-black uppercase">Couldn't load repos</p>
            <p class="mt-1 text-sm font-medium">{{ error }}</p>
            <button @click="fetchRepos"
                class="mt-4 border-2 border-black bg-brand text-white px-4 py-2 text-sm font-extrabold uppercase cursor-pointer shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                Try again
            </button>
        </div>

        <!-- EMPTY -->
        <div v-else-if="!filteredRepos.length"
            class="mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center">
            <p class="text-xl font-black uppercase">No repos match</p>
            <p class="mt-1 text-sm font-medium">Try a different search or clear the filters.</p>
        </div>

        <!-- GRID -->
        <div v-else class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a v-for="repo in pagedRepos" :key="repo.id" :href="repo.html_url" target="_blank" rel="noopener"
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
                        <span class="ml-auto text-black/50">{{ formatDate(repo.updated_at) }}</span>
                    </div>
                </div>
            </a>
        </div>

        <!-- PAGINATION -->
        <nav v-if="!loading && !error && totalPages > 1" class="mt-8 flex flex-wrap items-center justify-center gap-2"
            aria-label="Pagination">
            <button @click="goTo(page - 1)" :disabled="page === 1" :class="btnClass(false, page === 1)">Prev</button>

            <template v-for="(p, i) in pageButtons" :key="i">
                <span v-if="p === '…'" class="px-1 font-black">…</span>
                <button v-else @click="goTo(p)" :aria-current="p === page ? 'page' : undefined"
                    :class="btnClass(p === page, false)">{{ p }}</button>
            </template>

            <button @click="goTo(page + 1)" :disabled="page === totalPages"
                :class="btnClass(false, page === totalPages)">Next</button>
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
            search: "",
            language: "",
            sortBy: "updated",
            hideForks: false,
            page: 1,
            pageSize: 6,
            pageSizes: [6, 12, 24],
            sortOptions: [
                { value: "updated", label: "Recently updated" },
                { value: "stars", label: "Most stars" },
                { value: "name", label: "Name A-Z" },
            ],
        }
    },
    computed: {
        languages() {
            return [...new Set(this.repos.map(r => r.language).filter(Boolean))].sort()
        },
        filteredRepos() {
            const q = this.search.trim().toLowerCase()
            const list = this.repos.filter(r =>
                (!q || r.name.toLowerCase().includes(q) || (r.description || "").toLowerCase().includes(q)) &&
                (!this.language || r.language === this.language) &&
                (!this.hideForks || !r.fork)
            )
            const sorters = {
                updated: (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
                stars: (a, b) => b.stargazers_count - a.stargazers_count,
                name: (a, b) => a.name.localeCompare(b.name),
            }
            return list.sort(sorters[this.sortBy])
        },
        totalPages() {
            return Math.max(1, Math.ceil(this.filteredRepos.length / this.pageSize))
        },
        pagedRepos() {
            const start = (this.page - 1) * this.pageSize
            return this.filteredRepos.slice(start, start + this.pageSize)
        },
        // e.g. [1, '…', 4, 5, 6, '…', 10]
        pageButtons() {
            const total = this.totalPages
            const pages = [...new Set([1, this.page - 1, this.page, this.page + 1, total])]
                .filter(p => p >= 1 && p <= total)
                .sort((a, b) => a - b)
            const out = []
            pages.forEach((p, i) => {
                if (i && p - pages[i - 1] > 1) out.push("…")
                out.push(p)
            })
            return out
        },
        hasActiveFilters() {
            return !!(this.search || this.language || this.hideForks || this.sortBy !== "updated")
        },
    },
    watch: {
        // any change to the result set sends you back to page 1
        search() { this.page = 1 },
        language() { this.page = 1 },
        sortBy() { this.page = 1 },
        hideForks() { this.page = 1 },
        pageSize() { this.page = 1 },
    },
    async created() {
        await this.fetchRepos()
    },
    methods: {
        async fetchRepos() {
            this.loading = true
            this.error = ""
            try {
                const API = "https://api.github.com/users/tfd-ed/repos?per_page=100"
                const response = await fetch(API)
                if (!response.ok) {
                    throw new Error(
                        response.status === 403
                            ? "GitHub API rate limit reached. Try again later."
                            : `GitHub responded with ${response.status}.`
                    )
                }
                this.repos = await response.json()
            } catch (err) {
                this.error = err.message
            } finally {
                this.loading = false
            }
        },
        goTo(p) {
            this.page = Math.min(Math.max(1, p), this.totalPages)
        },
        resetFilters() {
            this.search = ""
            this.language = ""
            this.hideForks = false
            this.sortBy = "updated"
        },
        formatDate(iso) {
            return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
        },
        btnClass(active, disabled) {
            return [
                "border-2 border-black px-3 py-2 text-sm font-extrabold uppercase min-w-10",
                active ? "bg-black text-white" : "bg-white",
                disabled ? "text-black/30 cursor-not-allowed" : "cursor-pointer",
                !active && !disabled && "hover:bg-paper",
            ]
        },
    }
}
</script>
