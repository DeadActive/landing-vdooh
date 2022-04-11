<template>
    <div class="text-white">
        <header class="hero w-full overflow-hidden">
            <div class="container mx-auto py-6 h-full flex flex-col">
                <Navigation></Navigation>
            </div>
        </header>
        <div
            class="container mx-auto px-4 md:px-8 text-black nuxt-content my-16 md:my-24"
        >
            <div class="section__wrapper">
                <h1 class="text-4xl font-bold text-center mb-16">
                    Правила проведения онлайн аукциона в системе VDOOH
                </h1>

                <p style="font-weight: 400" class="mb-8">
                    В системе VDOOH в режиме реального времени действует аукцион
                    второй цены, который используется для определения
                    списываемой за показ суммы на цифровых щитах или экранах.
                    При этом рекламодатель может задать ставку, либо за 1 показ
                    рекламы (PPV от англ. Pay Per View), либо за 1000 контактов
                    с аудиторией (CPT, от англ. Cost Per Thousand). В данном
                    случае под контактами с аудиторией подразумевается OTS
                    (Opportunity To See) - количество лиц находившихся в месте
                    расположения цифрового щита или экрана в момент показа
                    рекламного ролика.
                </p>

                <p style="font-weight: 400" class="mb-8">
                    Победителем аукциона считается тот, кто предложил наивысшую
                    ставку по модели PPV или CPT, при этом победитель уплачивает
                    цену второй максимальной ставки + 1 шаг аукциона. Аукцион
                    разыгрывается в рамках одного минутного блока при каждом
                    запросе оператора на показ рекламы.&nbsp;При этом стоимость
                    одного показа всегда будет ниже или равна ставке
                    рекламодателя.&nbsp;
                </p>

                <p style="font-weight: 400">
                    В настоящий момент в системе VDOOH установлены следующие
                    шаги аукциона:
                </p>

                <p style="font-weight: 400" class="mb-8">
                    Outdoor - 0,10 руб.<br />
                    Indoor - 0,01 руб
                </p>

                <p style="font-weight: 400" class="mb-8">
                    <em
                        ><strong>Внимание</strong>: Аукцион PPV доступен на всех
                        конструкциях и экранах, подключенных к VDOOH. Аукцион
                        CPT доступен только на тех конструкциях и экранах,
                        которые оснащены Wifi снифферами или камерами и при
                        условии, что данные с этих устройств передаются в
                        систему VDOOH в режиме реального времени, вместе с
                        запросом на показ рекламы.</em
                    >
                </p>

                <p style="font-weight: 600" class="mb-4">
                    Пример работы аукциона:
                </p>

                <p style="font-weight: 400" class="mb-4">
                    Оператор экрана установил минимальную ставку за 1 показ
                    (PPV) в размере 0,5 руб. на своей цифровой Outdoor
                    конструкции. Три рекламодателя выбрали эту конструкцию для
                    показа своей рекламы в одинаковый период, время, установили
                    интервал показа рекламы в 1 минуту и задали следующие
                    ставки:
                </p>

                <table class="mb-8 border">
                    <tbody>
                        <tr>
                            <td style="width: 200px" class="border">
                                <span style="font-weight: 400"
                                    >Рекламодатель 1</span
                                >
                            </td>
                            <td style="width: 70px" class="border">
                                <span style="font-weight: 400">1,4 руб.</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="border">
                                <span style="font-weight: 400"
                                    >Рекламодатель 2</span
                                >
                            </td>
                            <td class="border">
                                <span style="font-weight: 400">1,00 руб.</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="border">
                                <span style="font-weight: 400"
                                    >Рекламодатель 3</span
                                >
                            </td>
                            <td class="border">
                                <span style="font-weight: 400">0,70 руб.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p style="font-weight: 400" class="pb-4">
                    В случае, если от оператора пришел 1 запрос на показ рекламы
                    в минуту, будет показываться ролик Рекламодателя 1. При этом
                    стоимость показа составит 1,10 рублей (1,00 руб. (ставка
                    Рекламодателя 2) + 0,10 руб. (шаг аукциона).
                </p>

                <p style="font-weight: 400" class="pb-4">
                    Если за эту же минуту оператор отправил второй запрос на
                    показ рекламы, то будет показан ролик Рекламодателя 2. При
                    этом стоимость такого показа составит 0,80 рублей (0,70
                    (ставка Рекламодателя 3) + 0,10 руб. шаг аукциона).
                </p>

                <p style="font-weight: 400" class="pb-4">
                    В случае, если за эту же минуту от владельца пришел еще один
                    запрос на показ рекламы на данной конструкции, то
                    победителем будет Рекламодатель 3. Стоимость показа для него
                    составит 0,50 рублей (минимальная ставка, установленная
                    Оператором).
                </p>

                <p style="font-weight: 400" class="pb-4">
                    В ситуации, когда Рекламодатель 1 оказывается единственным
                    участником аукциона, то независимо от размера его ставки,
                    стоимость за данный показ составит 0,50 рублей.
                </p>
            </div>
        </div>

        <News />
    </div>
</template>

<script>
import Navigation from "../components/Hero/Navigation.vue";
import News from "../components/News";

export default {
    components: {
        Navigation,
        News,
    },
};
</script>

<style>
.hero {
    background: #000;

    @media (min-width: 768px) {
        background: linear-gradient(
                218deg,
                rgba(0, 0, 0, 0) 59.18%,
                #18d3d8 116.45%
            ),
            linear-gradient(288deg, #000000 63.57%, #7f0dc6 120.18%);
    }
}
</style>
