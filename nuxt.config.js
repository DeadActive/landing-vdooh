export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "landing-vdooh",
        htmlAttrs: {
            lang: "ru",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
            { name: "msapplication-TileColor", content: "#da532c" },
            { name: "theme-color", content: "#ffffff" },
        ],
        link: [
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
            { rel: "manifest", href: "/site.webmanifest" },
            {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: "#5bbad5",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~css/main.css",
        "vue-slick-carousel/dist/vue-slick-carousel.css",
        "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
        "vue-select/dist/vue-select.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/v-click-outside" },
        { src: "~/plugins/vue-select" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxt/content"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
