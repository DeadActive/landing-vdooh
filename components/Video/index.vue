<template>
    <div id="video">
        <div
            class="container mx-auto py-8 md:py-[140px] grid grid-cols-1 lg:grid-cols-5 gap-16 text-white px-4"
        >
            <iframe
                class="w-full lg:col-span-3"
                style="aspect-ratio: 16/9"
                src="https://www.youtube.com/embed/ZCC3yqWpuvk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <div class="lg:col-span-2 flex flex-col justify-center">
                <h1
                    class="text-[32px] xl:text-[44px] md:col-span-3 font-bold break-words"
                >
                    Видеопрезентация
                </h1>
                <span class="text-base mt-8 xl:mt-16">
                    Запустить рекламную кампанию на цифровых поверхностям теперь
                    легко, для этого не потребуется большого количество времени
                    и опыта в наружной рекламе
                </span>
                <button
                    class="bg-purple hover:bg-purple-light transition-colors py-3 px-6 md:py-6 rounded-full mt-8 xl:mt-16 lg:max-w-[370px] font-bold text-sm"
                >
                    <a href="https://desk.vdooh.com/register">
                        Зарегистрироваться как рекламодатель
                    </a>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
#video {
    background: url("/img/bg-video.png") no-repeat;

    @media (min-width: 768px) {
        background: linear-gradient(
                69deg,
                rgba(0, 0, 0, 0) 63.57%,
                #7f0dc6 120.18%
            ),
            linear-gradient(131deg, rgba(0, 0, 0, 0) 59.18%, #18d3d8 116.45%),
            url("/img/bg-video.png") no-repeat, #000 right;
    }
}
</style>
