<template>
    <section
        id="calculator"
        class="overflow-y-visible overflow-x-hidden pb-8 text-black"
    >
        <div
            class="container mx-auto flex flex-col items-center rounded-b-2xl w-full border-fade relative px-4 pt-32 pb-9 overflow-visible"
            style="box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.25)"
        >
            <h1 class="text-[44px] text-gradient">
                Калькулятор рекламной кампании*
            </h1>
            <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 w-full px-0 md:px-16 pt-16"
            >
                <div class="flex flex-col gap-2 lg:max-w-[270px]">
                    <span class="text-lg text-gradient font-bold"
                        >Выбор закупки</span
                    >
                    <div>
                        <v-select
                            label="name"
                            v-model="type"
                            :appendToBody="true"
                            :clearable="false"
                            :options="types"
                            :searchable="false"
                        >
                        </v-select>
                    </div>
                </div>
                <div class="flex flex-col gap-2 lg:max-w-[270px]">
                    <span class="text-lg text-gradient font-bold"
                        >Выбор города</span
                    >
                    <div>
                        <v-select
                            label="name"
                            v-model="city"
                            :appendToBody="true"
                            :clearable="false"
                            :options="cities"
                        >
                        </v-select>
                    </div>
                </div>
                <div class="flex flex-col gap-2 lg:max-w-[420px]">
                    <span class="text-lg text-gradient font-bold pb-6">{{
                        amountTitle
                    }}</span>
                    <div class="relative">
                        <span
                            class="text-sm font-bold text-gradient absolute left-0 -top-6"
                        >
                            {{ format(min) }}
                        </span>
                        <span
                            class="text-sm font-bold text-gradient absolute right-0 -top-6"
                        >
                            {{ format(max) }}
                        </span>
                        <span
                            class="text-sm font-bold text-purple absolute left-0 -bottom-7 w-9 text-center"
                            :style="{
                                left: `${percentage}%`,
                                transform: `translateX(-${
                                    (36 * percentage) / 100
                                }px)`,
                            }"
                        >
                            {{ format(amount) }}
                        </span>
                        <input
                            type="range"
                            v-model="amount"
                            :min="min"
                            :max="max"
                            class="w-full h-3 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            :style="{
                                background: `rgba(127, 13, 198, 0.2) linear-gradient(90deg, #4C1DBB 0%, #7F0DC6 ${percentage}%, rgba(0,0,0,0) ${
                                    percentage + 0.1
                                }%)`,
                            }"
                        />
                    </div>
                </div>
            </div>
            <div class="flex gap-8 mt-8" v-if="type.value === 'OTS'">
                <div class="text-black text-2xl">
                    <span>Показы**:</span>
                    <span class="font-bold">{{ format(views) }}</span>
                </div>
                <div class="text-black text-2xl">
                    <span>Контакты:</span>
                    <span class="font-bold">{{ format(contacts) }}</span>
                </div>
            </div>
            <span
                class="text-2xl text-black mt-6"
                :class="type.value === 'OTS' ? 'mt-6' : 'm16'"
            >
                Бюджет
            </span>
            <span class="text-[40px] text-gradient font-bold">
                {{ format(cost) }} ₽/день
            </span>
            <a
                href="https://desk.vdooh.com/register"
                class="mt-10 w-full md:w-auto"
            >
                <button
                    class="w-full bg-purple hover:bg-purple-light transition-all font-bold duration-300 text-white text-sm rounded-full flex justify-center items-center py-6 px-6 md:px-16"
                >
                    Запустить рекламную кампанию
                </button>
            </a>
            <div class="w-full px-0 md:px-16 mt-7">
                <span class="text-base text-black self-start">
                    *Примерное значение, может меняться
                </span>
            </div>
            <div class="w-full px-0 md:px-16">
                <span
                    class="text-base text-black self-start"
                    v-if="type.value === 'OTS'"
                >
                    **При настройки рекламной кампании с 8 утра до 23 вечера, 30
                    показов в час
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import cities from "../utils/cities.json";

const intl = new Intl.NumberFormat("ru-RU");

export default {
    data() {
        return {
            types: [
                { name: "По показам", value: "OTS" },
                { name: "По контактам", value: "CON" },
            ],
            cities,
            type: { name: "По показам", value: "OTS" },
            city: cities[0],
            amount: 5,
            min: 0,
        };
    },
    methods: {
        format: (num) => intl.format(num),
    },
    computed: {
        amountTitle() {
            return this.type.value === "OTS"
                ? "Количество экранов"
                : "Количество контактов";
        },
        percentage() {
            return (this.amount / (this.max - this.min)) * 100;
        },
        cost() {
            if (this.type.value === "OTS")
                return this.views * this.city.cost_view;
            return Math.round((this.amount / 1000) * this.city.cost_contact);
        },
        views() {
            return 30 * 14 * this.amount;
        },
        contacts() {
            return ~~(this.views * this.city.ots);
        },
        max() {
            return this.type.value === "OTS" ? this.city.count : this.city.max;
        },
    },
    watch: {
        city() {
            this.amount = this.amount > this.max ? this.max : this.amount;
        },
        type() {
            this.amount = this.amount > this.max ? this.max : this.amount;
        },
    },
};
</script>

<style>
.m16 {
    margin-top: 5.5rem;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: radial-gradient(
        circle,
        rgba(127, 13, 198, 1) 0%,
        rgba(127, 13, 198, 1) 48%,
        rgba(255, 255, 255, 1) 51%,
        rgba(255, 255, 255, 1) 61%,
        rgba(127, 13, 198, 1) 64%,
        rgba(127, 13, 198, 1) 100%
    );
    width: 36px;
    height: 36px;
    border-radius: 100%;
}

input[type="range"]::-moz-range-thumb {
    background: radial-gradient(
        circle,
        rgba(127, 13, 198, 1) 0%,
        rgba(127, 13, 198, 1) 48%,
        rgba(255, 255, 255, 1) 51%,
        rgba(255, 255, 255, 1) 61%,
        rgba(127, 13, 198, 1) 64%,
        rgba(127, 13, 198, 1) 100%
    );
    width: 36px;
    height: 36px;
    border-radius: 100%;
}

input[type="range"]::-ms-thumb {
    background: radial-gradient(
        circle,
        rgba(127, 13, 198, 1) 0%,
        rgba(127, 13, 198, 1) 48%,
        rgba(255, 255, 255, 1) 51%,
        rgba(255, 255, 255, 1) 61%,
        rgba(127, 13, 198, 1) 64%,
        rgba(127, 13, 198, 1) 100%
    );
    width: 36px;
    height: 36px;
    border-radius: 100%;
}

.text-gradient {
    background: linear-gradient(269.08deg, #4c1dbb 29.59%, #9306ca 132.25%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.border-fade::before,
.border-fade::after {
    height: 100%;
    width: 200px;
    background: linear-gradient(
        180deg,
        #ffffff 30.21%,
        rgba(255, 255, 255, 0) 100%
    );
    display: block;
    content: "";
    position: absolute;
    top: 0;
}

.border-fade::before {
    left: calc(-200px + 16px);
}

.border-fade::after {
    right: calc(-200px + 16px);
}

.vs__dropdown-toggle {
    padding-left: 1.5rem;
    padding-right: 0.5rem;
    padding-top: 10px;
    padding-bottom: 14px;
    border-radius: 24px;
    border-color: black;
}

.vs--open .vs__dropdown-toggle {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.vs__dropdown-menu {
    border: 1px solid #000;
    border-radius: 24px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
}

.vs__dropdown-option {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.vs__dropdown-option--highlight {
    background-color: #9306ca;
}
</style>
