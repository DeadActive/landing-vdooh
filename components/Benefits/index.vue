<template>
    <div
        id="benefits"
        class="grid grid-cols-1 md:grid-cols-3 text-black container mx-auto overflow-hidden py-6 md:py-36 px-4"
    >
        <h1
            class="text-[32px] md:text-[44px] md:col-span-3 text-center font-bold"
        >
            Преимущества
        </h1>
        <h3 class="md:col-span-3 text-base text-center mt-2 mb-8 md:mb-16">
            Почему работать с нами выгодно
        </h3>
        <benefit-card img="/img/geo.png">
            <h2 class="text-[32px] text-pink text-center xl:text-left">
                Расположение
            </h2>
            <div class="text-sm text-center xl:text-left">
                Выбор геолокации и времени размещения: день, час, интервал
            </div>
        </benefit-card>
        <benefit-card img="/img/cog.png">
            <h2 class="text-[32px] text-purple text-center xl:text-left">
                Технологии
            </h2>
            <div class="text-sm text-center xl:text-left">
                Планирование и размещение РК на цифровых поверхностях крупных
                операторов Outdoor рекламы через личный online-кабинет
            </div>
        </benefit-card>
        <benefit-card img="/img/pie.png">
            <h2 class="text-[32px] text-cyan text-center xl:text-left">
                Мониторинг
            </h2>
            <div class="text-sm text-center xl:text-left">
                Самостоятельное управление рекламной кампании, бюджетом,
                количеством и стоимостью показов
            </div>
        </benefit-card>
    </div>
</template>

<script>
import BenefitCard from "./BenefitCard.vue";

export default {
    components: {
        BenefitCard,
    },
};
</script>

<style></style>
