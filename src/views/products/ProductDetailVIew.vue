<template>
    <div class="grow">

        <!-- Back link -->
        <section class="max-w-6xl mx-auto px-6 pt-10">
            <RouterLink to="/shop"
                class="inline-block border-2 border-black bg-white px-3 py-2 text-xs font-extrabold uppercase shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                ← Back to shop
            </RouterLink>
        </section>

        <!-- Product: image + info -->
        <section class="max-w-6xl mx-auto px-6 py-10">
            <div class="grid gap-8 md:grid-cols-2">

                <!-- Big number block -->
                <div
                    class="relative bg-brand text-white border-4 border-black shadow-brutal min-h-80 flex items-end p-6">
                    <span class="text-4xl font-black leading-none">{{ $route.params.id }}</span>
                    <span
                        class="absolute top-4 right-4 bg-black text-white border-2 border-white text-xs font-extrabold uppercase px-2 py-1">Sale</span>
                </div>

                <!-- Info -->
                <div class="flex flex-col gap-4">
                    <span
                        class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Category</span>
                    <h1 class="text-4xl font-black uppercase leading-tight">Product name</h1>
                    <p class="text-lg font-medium">
                        A short description of the product goes here. Keep it simple and honest.
                    </p>

                    <p class="text-3xl font-black">
                        $00.00
                        <span class="text-lg font-bold line-through text-black/50">$00.00</span>
                    </p>

                    <!-- Quantity -->
                    <div class="flex items-center gap-3">
                        <span class="text-sm font-extrabold uppercase">Qty</span>
                        <div class="flex items-center border-4 border-black bg-white">
                            <button class="px-3 py-1 text-lg font-black cursor-pointer">-</button>
                            <span class="px-4 py-1 border-x-4 border-black font-black">1</span>
                            <button class="px-3 py-1 text-lg font-black cursor-pointer">+</button>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="flex gap-3 pt-2">
                        <button
                            class="grow border-4 border-black bg-brand text-white px-4 py-3 font-extrabold uppercase shadow-brutal-sm cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                            Add to cart
                        </button>
                        <button
                            class="border-4 border-black bg-white px-4 py-3 font-extrabold uppercase cursor-pointer">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Details: 3 copies of the same box -->
        <section class="max-w-6xl mx-auto px-6 pb-14">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-4 h-4 bg-brand border-2 border-black"></div>
                <h2 class="text-2xl font-black uppercase">Details</h2>
            </div>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="bg-white border-4 border-black shadow-brutal p-6">
                    <p class="text-5xl font-black text-brand">01</p>
                    <h3 class="mt-2 text-xl font-black uppercase">Material</h3>
                    <p class="mt-2 font-medium">What it is made of. Short and clear.</p>
                </div>
                <div class="bg-white border-4 border-black shadow-brutal p-6">
                    <p class="text-5xl font-black text-brand">02</p>
                    <h3 class="mt-2 text-xl font-black uppercase">Shipping</h3>
                    <p class="mt-2 font-medium">Ships in 2–3 days. Free over $50.</p>
                </div>
                <div class="bg-white border-4 border-black shadow-brutal p-6">
                    <p class="text-5xl font-black text-brand">03</p>
                    <h3 class="mt-2 text-xl font-black uppercase">Returns</h3>
                    <p class="mt-2 font-medium">Not happy? Send it back within 30 days.</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    created() {
        // Example, Call API
        // const reponse = awaitfetch(`https://api.products/${this.$route.params.id}`)
        // Assign to data, loading , etc
    }
}
</script>
