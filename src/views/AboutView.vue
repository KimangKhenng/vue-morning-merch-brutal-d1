<template>
    <div class="grow">

        <section class="max-w-6xl mx-auto px-6 py-14">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-4 h-4 bg-brand border-2 border-black"></div>
                <h2 class="text-2xl font-black uppercase">About us</h2>
            </div>
            <p class="max-w-2xl text-lg font-medium">
                Brutal Coffee started with one machine and one big table. We wanted a place where developers
                can sit, drink, and finish their projects.
            </p>
        </section>

        <!-- Perks: 3 copies of the same box -->
        <section class="max-w-6xl mx-auto px-6 pb-14">
            <div class="grid gap-6 md:grid-cols-3">
                <div class="bg-white border-4 border-black shadow-brutal p-6">
                    <p class="text-5xl font-black text-brand">01</p>
                    <h3 class="mt-2 text-xl font-black uppercase">Fresh beans</h3>
                    <p class="mt-2 font-medium">We roast every morning. You can smell it from the street.</p>
                </div>
                <div class="bg-white border-4 border-black shadow-brutal p-6">
                    <p class="text-5xl font-black text-brand">02</p>
                    <h3 class="mt-2 text-xl font-black uppercase">Fast Wi-Fi</h3>
                    <p class="mt-2 font-medium">Fast enough to deploy while your coffee is still hot.</p>
                </div>
                <div class="bg-white border-4 border-black shadow-brutal p-6">
                    <p class="text-5xl font-black text-brand">03</p>
                    <h3 class="mt-2 text-xl font-black uppercase">Quiet corner</h3>
                    <p class="mt-2 font-medium">A table with a plug and no talking. Great for debugging.</p>
                </div>
            </div>
        </section>

        <!-- FAQ: 3 copies of the same box -->
        <section class="max-w-3xl mx-auto px-6 pb-14">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-4 h-4 bg-brand border-2 border-black"></div>
                <h2 class="text-2xl font-black uppercase">Questions</h2>
            </div>
            <div class="flex flex-col gap-4">
                <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
                    <h3 class="font-black uppercase">Can I stay and code all day?</h3>
                    <p class="mt-1 font-medium">Yes. Please buy a drink once in a while.</p>
                </div>
                <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
                    <h3 class="font-black uppercase">Do you have milk that is not from cows?</h3>
                    <p class="mt-1 font-medium">Yes. We have oat and soy milk.</p>
                </div>
                <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
                    <h3 class="font-black uppercase">Can I bring my dog?</h3>
                    <p class="mt-1 font-medium">Yes. Dogs are allowed on the terrace.</p>
                </div>
            </div>
        </section>
    </div>
</template>