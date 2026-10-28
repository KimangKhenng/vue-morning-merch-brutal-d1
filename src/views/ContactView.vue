<template>
    <div class="grow">

        <section class="max-w-6xl mx-auto px-6 py-14 grid gap-10 lg:grid-cols-2">
            <div>
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-4 h-4 bg-brand border-2 border-black"></div>
                    <h2 class="text-2xl font-black uppercase">Contact</h2>
                </div>
                <div class="bg-white border-4 border-black shadow-brutal p-6 flex flex-col gap-4">
                    <div>
                        <p class="text-xs font-extrabold uppercase text-brand">Address</p>
                        <p class="font-bold">12 Debug Street, Phnom Penh</p>
                    </div>
                    <div>
                        <p class="text-xs font-extrabold uppercase text-brand">Open</p>
                        <p class="font-bold">Every day, 7:00 to 18:00</p>
                    </div>
                    <div>
                        <p class="text-xs font-extrabold uppercase text-brand">Email</p>
                        <p class="font-bold">hello@brutalcoffee.test</p>
                    </div>
                </div>
            </div>

            <form class="bg-white border-4 border-black shadow-brutal p-6 flex flex-col gap-4">
                <h2 class="text-xl font-black uppercase">Send us a message</h2>
                <label class="flex flex-col gap-1 text-sm font-extrabold uppercase">
                    Your name
                    <input type="text" placeholder="Sok Dara"
                        class="border-2 border-black bg-paper px-3 py-2 font-bold normal-case focus:outline-none focus:bg-white">
                </label>
                <label class="flex flex-col gap-1 text-sm font-extrabold uppercase">
                    Message
                    <textarea rows="4" placeholder="Hello..."
                        class="border-2 border-black bg-paper px-3 py-2 font-bold normal-case focus:outline-none focus:bg-white"></textarea>
                </label>
                <button type="button"
                    class="self-start bg-brand text-white border-4 border-black shadow-brutal-sm px-5 py-2 font-extrabold uppercase cursor-pointer hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                    Send
                </button>
            </form>
        </section>
    </div>
</template>