<template>
    <div>
        <div class="flex flex-col p-6 bg-white text-black rounded-lg mx-4 mb-8">
            <img :src="content.img" alt="" class="min-h-[135px] aspect-[3/2]" />
            <span class="text-lg mt-6 h-36 overflow-hidden">{{
                content.title
            }}</span>
            <span class="text-lg mt-2 text-gray-500">{{
                content.createdAt.split("T")[0]
            }}</span>
            <nuxt-link :to="content.path" class="text-lg text-black mt-6">
                Подробнее →
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: Object,
    },
};
</script>

<style></style>
