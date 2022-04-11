<template>
    <div>
        <div class="flex flex-col md:flex-row justify-center items-center mb-8">
            <div
                class="max-w-5xl flex flex-col md:flex-row justify-center items-center"
            >
                <img
                    :src="`${img}.png`"
                    alt=""
                    class="mr-0 md:mr-8 w-[260px] md:w-[320px] lg:w-[490px]"
                />
                <div class="flex flex-col items-center md:items-start">
                    <img
                        :src="`${img}-number.png`"
                        alt=""
                        class="w-[100px] lg:w-[165px] h-auto"
                    />
                    <h2
                        class="text-base md:text-2xl mt-6 text-center md:text-left"
                    >
                        <slot></slot>
                    </h2>
                    <a
                        href="#video"
                        class="text-purple mt-6 text-center md:text-left"
                    >
                        Посмотреть видео →
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: String,
    },
};
</script>

<style></style>
