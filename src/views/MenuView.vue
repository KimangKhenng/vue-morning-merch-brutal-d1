<template>
    <div class="grow">

        <section class="max-w-6xl mx-auto px-6 py-14">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-4 h-4 bg-brand border-2 border-black"></div>
                <h2 class="text-2xl font-black uppercase">Menu</h2>
            </div>
            <p class="mb-8 max-w-xl font-medium">Six things on the menu. Click a name to see the details.</p>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                    <div class="h-32 bg-brand border-b-4 border-black flex items-end p-3">
                        <span class="text-6xl font-black leading-none">01</span>
                    </div>
                    <div class="p-4 flex flex-col gap-2 grow">
                        <span
                            class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Hot</span>
                        <h3 class="text-lg font-black uppercase leading-tight">
                            <a href="drink.html" class="hover:underline">Espresso</a>
                        </h3>
                        <p class="text-sm font-medium">A tiny, strong shot. Wakes up your brain in one second.</p>
                        <p class="mt-auto pt-3 text-xl font-black">$2.50</p>
                    </div>
                </article>
                <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                    <div class="h-32 bg-yellow-300 border-b-4 border-black flex items-end p-3">
                        <span class="text-6xl font-black leading-none">02</span>
                    </div>
                    <div class="p-4 flex flex-col gap-2 grow">
                        <span
                            class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Hot</span>
                        <h3 class="text-lg font-black uppercase leading-tight">
                            <a href="drink.html" class="hover:underline">Bug Latte</a>
                        </h3>
                        <p class="text-sm font-medium">Smooth milk and espresso. Helps you fix bugs before lunch.</p>
                        <p class="mt-auto pt-3 text-xl font-black">$4.00</p>
                    </div>
                </article>
                <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                    <div class="h-32 bg-sky-300 border-b-4 border-black flex items-end p-3">
                        <span class="text-6xl font-black leading-none">03</span>
                    </div>
                    <div class="p-4 flex flex-col gap-2 grow">
                        <span
                            class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Cold</span>
                        <h3 class="text-lg font-black uppercase leading-tight">
                            <a href="drink.html" class="hover:underline">Cold Brew Cache</a>
                        </h3>
                        <p class="text-sm font-medium">Brewed for 18 hours, then served cold. Fast to drink, slow to
                            make.</p>
                        <p class="mt-auto pt-3 text-xl font-black">$4.50</p>
                    </div>
                </article>
                <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                    <div class="h-32 bg-orange-300 border-b-4 border-black flex items-end p-3">
                        <span class="text-6xl font-black leading-none">04</span>
                    </div>
                    <div class="p-4 flex flex-col gap-2 grow">
                        <span
                            class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Hot</span>
                        <h3 class="text-lg font-black uppercase leading-tight">
                            <a href="drink.html" class="hover:underline">Mocha Merge</a>
                        </h3>
                        <p class="text-sm font-medium">Coffee and chocolate together. No merge conflicts, only joy.</p>
                        <p class="mt-auto pt-3 text-xl font-black">$4.80</p>
                    </div>
                </article>
                <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                    <div class="h-32 bg-lime-300 border-b-4 border-black flex items-end p-3">
                        <span class="text-6xl font-black leading-none">05</span>
                    </div>
                    <div class="p-4 flex flex-col gap-2 grow">
                        <span
                            class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Cold</span>
                        <h3 class="text-lg font-black uppercase leading-tight">
                            <a href="drink.html" class="hover:underline">Iced Null Tea</a>
                        </h3>
                        <p class="text-sm font-medium">Lemon tea with lots of ice. Tastes like nothing bad, and a bit of
                            lemon.</p>
                        <p class="mt-auto pt-3 text-xl font-black">$3.80</p>
                    </div>
                </article>
                <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                    <div class="h-32 bg-pink-300 border-b-4 border-black flex items-end p-3">
                        <span class="text-6xl font-black leading-none">06</span>
                    </div>
                    <div class="p-4 flex flex-col gap-2 grow">
                        <span
                            class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Snack</span>
                        <h3 class="text-lg font-black uppercase leading-tight">
                            <a href="drink.html" class="hover:underline">Semicolon Cookie</a>
                        </h3>
                        <p class="text-sm font-medium">A big chocolate cookie. Always ends a good line.</p>
                        <p class="mt-auto pt-3 text-xl font-black">$2.20</p>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>