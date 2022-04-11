<template>
    <div
        id="hiw"
        class="container mx-auto text-black pt-8 md:pt-32 pb-8 md:pb-16"
    >
        <h1
            class="text-[32px] md:text-[44px] md:col-span-3 text-center font-bold"
        >
            Как это работает
        </h1>
        <slider class="mt-8 md:mt-16"></slider>
    </div>
</template>

<script>
import Slider from "./Slider.vue";

export default {
    components: {
        Slider,
    },
};
</script>

<style></style>
