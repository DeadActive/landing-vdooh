<template>
    <div id="news">
        <div class="container mx-auto text-white py-8 md:pt-[120px]">
            <h1
                class="text-[32px] md:text-[44px] md:col-span-3 text-center font-bold mx-4 mb-6 md:mb-12"
            >
                Наши кейсы и новости
            </h1>
            <slider></slider>
            <Footer />
        </div>
    </div>
</template>

<script>
import Slider from "./Slider.vue";
import Footer from "./Footer.vue";

export default {
    components: {
        Slider,
        Footer,
    },
};
</script>

<style>
#news {
    background: #000;

    @media (min-width: 768px) {
        background: linear-gradient(
                332deg,
                rgba(0, 0, 0, 0) 63.57%,
                #7f0dc6 120.18%
            ),
            linear-gradient(239deg, rgba(0, 0, 0, 0) 59.18%, #18d3d8 116.45%),
            #000 bottom;
    }
}
</style>
