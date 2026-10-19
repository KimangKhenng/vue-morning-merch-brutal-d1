<template>
    <section class="max-w-6xl mx-auto px-6 py-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <!-- Product 1 · Stickers -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-brand text-white border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">01</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span
                        class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Stickers</span>
                    <h3 class="text-lg font-black uppercase leading-tight">Semicolon Sticker Pack</h3>
                    <p class="text-sm font-medium">10 vinyl stickers for your laptop.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$4.00</p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                            <button
                                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Product 2 · Apparel · SALE -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-black text-white border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">02</span>
                    <span
                        class="absolute top-3 right-3 bg-brand text-white border-2 border-white text-xs font-extrabold uppercase px-2 py-1">Sale</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span
                        class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Apparel</span>
                    <h3 class="text-lg font-black uppercase leading-tight">Bug Hunter Hoodie</h3>
                    <p class="text-sm font-medium">Heavy cotton. Warm for late-night fixes.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$45.00 <span
                                class="text-sm font-bold line-through text-black/50">$60.00</span></p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                            <button
                                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Product 3 · Desk · SAVED -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">03</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
                    <h3 class="text-lg font-black uppercase leading-tight">Git Push Mug</h3>
                    <p class="text-sm font-medium">Holds 350ml of coffee. Force push not included.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$12.00</p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-black text-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Saved</button>
                            <button
                                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Product 4 · Apparel -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-black text-white border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">04</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span
                        class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Apparel</span>
                    <h3 class="text-lg font-black uppercase leading-tight">Dark Mode Tee</h3>
                    <p class="text-sm font-medium">100% black. Easy on the eyes.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$22.00</p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                            <button
                                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Product 5 · Desk -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">05</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
                    <h3 class="text-lg font-black uppercase leading-tight">Ctrl+Z Mousepad</h3>
                    <p class="text-sm font-medium">Large size. Undo your mistakes in style.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$15.00</p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                            <button
                                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Product 6 · Stickers -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-brand text-white border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">06</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span
                        class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Stickers</span>
                    <h3 class="text-lg font-black uppercase leading-tight">Component Pin</h3>
                    <p class="text-sm font-medium">Metal pin. Small, reusable, and clean.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$3.50</p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                            <button
                                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Product 7 · Desk · SOLD OUT -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">07</span>
                    <span
                        class="absolute top-3 right-3 bg-black text-white text-xs font-extrabold uppercase px-2 py-1">Sold
                        out</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
                    <h3 class="text-lg font-black uppercase leading-tight">404 Notebook</h3>
                    <p class="text-sm font-medium">Blank pages. Page not found.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$9.00</p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                            <button disabled
                                class="border-2 border-black bg-paper text-black/40 px-3 py-2 text-xs font-extrabold uppercase cursor-not-allowed">Add</button>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Product 8 · Desk · SALE -->
            <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
                <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
                    <span class="text-6xl font-black leading-none">08</span>
                    <span
                        class="absolute top-3 right-3 bg-brand text-white border-2 border-black text-xs font-extrabold uppercase px-2 py-1">Sale</span>
                </div>
                <div class="p-4 flex flex-col gap-2 grow">
                    <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
                    <h3 class="text-lg font-black uppercase leading-tight">Rubber Duck Debugger</h3>
                    <p class="text-sm font-medium">Explain your bug to the duck. It always helps.</p>
                    <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                        <p class="text-xl font-black">$8.00 <span
                                class="text-sm font-bold line-through text-black/50">$10.00</span></p>
                        <div class="flex gap-2">
                            <button
                                class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                            <button
                                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                        </div>
                    </div>
                </div>
            </article>

        </div>

        <!-- 5b. EMPTY STATE (hidden now — show it when a search finds nothing) -->
        <p class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
            No products match your search.
        </p>
    </section>
</template>