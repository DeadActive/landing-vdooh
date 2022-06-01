<template>
    <nav>
        <div
            class="flex lg:hidden flex-col bg-black absolute border-solid border-white border-r border-b left-0 top-0 pl-12 pt-10 z-10"
            v-show="menuShow"
            v-click-outside="() => (menuShow = false)"
        >
            <button @click="menuShow = false" class="mb-8">
                <img src="/img/exit.svg" alt="" />
            </button>
            <button
                class="text-lg font-bold mb-8 text-left pr-5"
                v-for="(item, index) in menu"
                :key="index"
            >
                <a :href="item.to">{{ item.title }}</a>
            </button>
        </div>
        <div class="grid grid-cols-4">
            <a href="/" class="lg:block hidden">
                <img :src="logo" alt="" />
            </a>
            <button
                class="block lg:hidden ml-4 ignore"
                @click="menuShow = !menuShow"
            >
                <img src="/img/burger.svg" alt="" class="ignore" />
            </button>
            <div class="flex justify-between align-middle col-span-2">
                <button
                    v-for="(item, index) in menu"
                    :key="index"
                    class="font-black hidden lg:block link"
                >
                    <a :href="item.to">{{ item.title }}</a>
                </button>
            </div>
            <div class="flex justify-end mr-4 md:mr-0">
                <button
                    class="rounded-full hover:bg-purple transition-colors mr-2 py-3 px-7 font-bold"
                >
                    <a href="https://desk.vdooh.com/login">Вход</a>
                </button>
                <button
                    class="rounded-full bg-purple hover:bg-purple-light transition-colors py-3 px-7 font-bold"
                >
                    <a href="https://desk.vdooh.com/register">Регистрация</a>
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menu: [],
            menuShow: false,
        };
    },
    async mounted() {
        this.menu = (await this.$content("menu").fetch()).items;
    },
    computed: {
        logo() {
            return this.$route.path === "/alpha"
                ? "/img/logo-alpha.png"
                : this.$route.path === "/tinkof"
                ? "/img/logo-tinkof.png"
                : "/img/logo.png";
        },
    },
};
</script>

<style>
nav .link {
    position: relative;
}

nav .link::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    background: #fff;
    height: 2px;
    bottom: 8px;
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1) all;
    opacity: 0;
}

nav .link:hover::after {
    opacity: 1;
}
</style>
