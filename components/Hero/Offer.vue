<template>
    <div
        class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:my-auto mt-16 mb-auto h-full"
    >
        <div class="flex flex-col justify-center h-full px-4">
            <h1 class="text-5xl font-bold" v-html="title"></h1>
            <span class="mt-8" v-html="offer"></span>
            <button
                class="hidden md:block bg-purple hover:bg-purple-light transition-colors px-9 py-6 rounded-full mt-16 max-w-[370px] font-bold text-sm"
            >
                <a href="https://desk.vdooh.com/register">
                    Зарегистрироваться
                </a>
            </button>
        </div>
        <div
            class="col-span-1 2xl:col-span-2 md:min-w-[820px] flex md:justify-end justify-center items-end md:h-full px-4 md:px-0"
        >
            <img
                src="/img/bg-hero.png"
                class="max-h-[300px] md:max-h-[542px]"
                alt=""
            />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$route.path === "/alpha"
                ? "Партнерская&nbsp;программа Альфа-Банк и VDOOH"
                : this.$route.path === "/tinkof"
                ? "Партнерская&nbsp;программа Тинькофф и VDOOH"
                : "DSP VDOOH";
        },
        offer() {
            return this.$route.path === "/alpha"
                ? "Пополни баланс личного кабинета VDOOH на <span><b>1&nbsp;000</b></span> и получи купон на сумму <span><b>10&nbsp;000&nbsp;₽</b></span>"
                : this.$route.path === "/tinkof"
                ? "Уникальное предложение для клиентов Тинькофф банка «удвоение первого пополнения баланса на сумму до <span><b>50&nbsp;000&nbsp;₽</b></span>"
                : "платформа для размещения рекламы на цифровых экранах. Быстрый запуск, гибкое управление, медиапланирование, контроль бюджетов и online-статистика в личном кабинете";
        },
    },
};
</script>

<style></style>
