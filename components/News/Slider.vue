<template>
    <vue-carousel
        :dots="true"
        :arrows="false"
        dots-class="white-dots"
        class="mx-16"
        v-bind="settings"
        v-if="news.length"
    >
        <slide
            v-for="(content, index) in news"
            :key="index"
            :content="content"
        ></slide>
    </vue-carousel>
</template>

<script>
import VueCarousel from "vue-slick-carousel";
import Slide from "./Slide.vue";

export default {
    components: {
        VueCarousel,
        Slide,
    },
    data() {
        return {
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },
            news: [],
        };
    },
    methods: {
        async loadNews() {
            this.news = await this.$content("news").fetch();
        },
    },
    mounted() {
        this.loadNews();
    },
};
</script>

<style>
.white-dots {
    display: flex !important;
    justify-content: center;
}

.white-dots li {
    width: 16px;
    height: 16px;
    background: #ffffff;
    opacity: 0.5;
    border-radius: 50%;
    display: block;
    content: "";
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    font-size: 0;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 26px;
        height: 26px;
    }
}

.white-dots li.slick-active {
    opacity: 1;
}
</style>
