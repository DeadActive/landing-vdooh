<template>
    <div
        class="flex flex-col xl:flex-row items-center max-w-full md:max-w-[400px] mx-8 xl:mx-0 mb-8 md:mb-0"
    >
        <img :src="img" alt="" />
        <div class="flex flex-col px-16 md:px-0">
            <slot> </slot>
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
