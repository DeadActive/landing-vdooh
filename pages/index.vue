<template>
    <div class="text-white">
        <Hero />
        <Calculator />
        <Benefits />
        <Video />
        <HIW />
        <Partners />
        <News />
    </div>
</template>

<script>
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Video from "../components/Video";
import HIW from "../components/HowItWorks";
import Partners from "../components/Partners";
import News from "../components/News";

export default {
    name: "IndexPage",
    head() {
        return {
            title: "VDOOH",
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
