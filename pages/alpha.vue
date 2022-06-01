<template>
    <div class="text-white">
        <Hero />
        <Benefits />
        <Video />
        <HIW />
        <Partners />
        <News />
    </div>
</template>

<script>
import Hero from "../components/Hero";
import Benefits from "../components/Benefits/BenefitPromo.vue";
import Video from "../components/Video";
import HIW from "../components/HowItWorks";
import Partners from "../components/Partners";
import News from "../components/News";

export default {
    name: "IndexPage",
    head() {
        return {
            title: "VDOOH x Альфа",
        };
    },
    components: {
        Hero,
        Benefits,
        Video,
        HIW,
        Partners,
        News,
    },
};
</script>

<style></style>
