<template>
    <div id="partners" class="container mx-auto text-black mb-8 md:mb-32">
        <h1
            class="text-[32px] md:text-[44px] md:col-span-3 text-center font-bold mx-4 mb-6 md:mb-12"
        >
            Наши партнеры/Наши клиенты
        </h1>
        <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-4"
        >
            <div class="flex justify-center" v-for="img in images" :key="img">
                <img :src="img" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: Array.from(
                { length: 12 },
                (v, i) => `/img/partners/partner (${i + 1}).png`
            ),
        };
    },
};
</script>

<style></style>
