<template>
    <div>
        <div class="greeting_block">
            <div class="greeting_text">
                <p class="regular_text_style">
                    Добро пожаловать на сайт истории специальности Программная инженерия
                    <br>
                    <br>
                    Здесь вы можете посмотреть историю специальности,  выпускников специальности по годам,
                     а также последние события связанные с ПС’ом
                </p>
            </div>
            <div class="greeting_img_block">
                <img src="../src/assets/temp_images/plug.jpg" class="greeting_img" alt="Sorry :("/>
            </div>
        </div>
        <div class="history">
            <history-part></history-part>
            <history-part></history-part>
            <history-part></history-part>
            <history-part></history-part>
            <history-part></history-part>
        </div>
    </div>
</template>

<script>
import historyPart from './HistoryPart.vue';

export default {
    data() {
        return{}
    },
    components: {
        "history-part": historyPart
    }
}
</script>

<style>

</style>