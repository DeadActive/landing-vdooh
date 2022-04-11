<template>
    <div class="text-white">
        <header class="hero w-full overflow-hidden">
            <div class="container mx-auto py-6 h-full flex flex-col">
                <Navigation></Navigation>
            </div>
        </header>
        <div class="container mx-auto px-4 md:px-8">
            <nuxt-content
                :document="page"
                class="my-16 md:my-24 bg-white text-black"
            ></nuxt-content>
        </div>

        <News />
    </div>
</template>

<script>
import Navigation from "../../components/Hero/Navigation.vue";
import News from "../../components/News";

export default {
    name: "NewsPage",
    components: {
        News,
        Navigation,
    },
    data() {
        return {
            page: null,
        };
    },
    mounted() {
        this.loadPage();
    },
    methods: {
        async loadPage() {
            this.page = await this.$content(this.$route.path).fetch();
            document.title = `VDOOH - ${this.page.title}`;
        },
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

.nuxt-content h1 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 4rem;
    font-weight: bold;
    @media (min-width: 768px) {
        font-size: 44px;
    }
}

.nuxt-content p {
    margin-bottom: 2rem;
    margin-top: 2rem;
}

.nuxt-content a {
    word-break: break-all;
}

.nuxt-content img {
    width: 100%;
    height: auto;
    margin-bottom: 4rem;
}
</style>
