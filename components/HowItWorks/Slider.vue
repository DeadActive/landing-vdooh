<template>
    <vue-carousel :dots="true" dots-class="purple-dots" class="mx-16">
        <slide img="/img/slide1">
            Создать новую кампанию и выбрать тип РК (контакты или показы)
        </slide>
        <slide img="/img/slide2">
            Выбрать адресную программу: отметить нужные локации
        </slide>
        <slide img="/img/slide3">
            Выбрать период, дни недели и часы показа
        </slide>
        <slide img="/img/slide4">
            Определить бюджет и ставку за показ или 1000 контактов
        </slide>
        <slide img="/img/slide5">
            Загрузить ролики и отправить их на модерацию
        </slide>
        <slide img="/img/slide6">
            Следить за результатами рекламных кампаний online
        </slide>
        <template #prevArrow>
            <div class="custom-arrow">
                <img
                    src="/img/chevron-left.svg"
                    width="64"
                    height="64"
                    alt=""
                />
            </div>
        </template>
        <template #nextArrow>
            <div class="custom-arrow">
                <img
                    src="/img/chevron-right.svg"
                    width="64"
                    height="64"
                    alt=""
                />
            </div>
        </template>
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
};
</script>

<style>
.purple-dots {
    display: flex !important;
    justify-content: center;
}

.purple-dots li {
    width: 16px;
    height: 16px;
    background: #7f0dc6;
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

.purple-dots li.slick-active {
    opacity: 1;
}

.slick-prev {
    display: none !important;
    @media (min-width: 768px) {
        display: block !important;
        left: -64px;
        width: 64px;
        height: 64px;
    }
}

.slick-next {
    display: none !important;
    @media (min-width: 768px) {
        display: block !important;
        right: -64px;
        width: 64px;
        height: 64px;
    }
}

.slick-prev::before,
.slick-next::before {
    display: none;
}
</style>
