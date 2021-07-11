<template>
    <div>
        <div>
            <div class="year_select_block">
                <span class="regular_text_style">Год выпуска: </span>
            </div>
            <div class="graduates_images">
                <img class="graduate_img" src="../src/assets/temp_images/graduates_plug.jpg" alt="">
                <img class="graduate_img" src="../src/assets/temp_images/plug.jpg" alt="">                
                <img class="graduate_img" src="../src/assets/temp_images/graduates_plug.jpg" alt="">
            </div>
            <hr class="graduates_border"/>
        </div>
        <div class="graduates_bacground_block">
            <div class="graduates_block">
                <div class="graduates_header">
                    <span class="graduates_title">Список выпуска</span>
                    <hr class="graduates_border graduates_list_border">
                </div>
                <div class="graduates_list">
                    <div class="graduates_list_head">
                        <span class="graduates_heading">ФИО</span>
                        <span class="graduates_heading">Email</span>
                        <span class="graduates_heading">Соцсети</span>
                    </div>
                    <div class="graduates_list_content">
                        <graduate></graduate>
                        <graduate></graduate>
                        <graduate></graduate>
                        <graduate></graduate>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import graduate from "./GraduateInfo.vue";

export default {
    data() {
        return {};
    },
    components: {
        "graduate": graduate
    }
}
</script>

<style>

</style>