<template>
    <header class="hero w-full h-[720px] overflow-hidden">
        <div class="container mx-auto pt-7 h-full flex flex-col">
            <navigation></navigation>
            <offer></offer>
        </div>
    </header>
</template>

<script>
import Navigation from "./Navigation.vue";
import Offer from "./Offer.vue";

export default {
    components: {
        Navigation,
        Offer,
    },
};
</script>

<style>
.hero {
    background: #000;

    @media (min-width: 768px) {
        background: linear-gradient(
                218deg,
                rgba(0, 0, 0, 0) 59.18%,
                #18d3d8 116.45%
            ),
            linear-gradient(288deg, #000000 63.57%, #7f0dc6 120.18%);
    }
}
</style>
