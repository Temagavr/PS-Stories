<template>
    <div>
        <div>
            <div class="year_select_block">
                <span class="regular_text_style year_selection_label float_left">Год выпуска: </span>
                <div class="year_selection">
                    <ul>
		                <li><span class="year_selected regular_text_style">{{selected_year}}<div id="down-triangle"></div></span>
			                <ul>
				                <li><span v-on:click="changeYear(previous_year)" class="regular_text_style">{{previous_year}}</span></li>
				            </ul>
		                </li>
	                </ul>
                </div>
            </div>
            <div class="graduates_images">
                <div class="graduate_img_block">
                    <img class="graduate_img" src="../src/assets/temp_images/graduates_plug.jpg" alt="">
                </div>
                <div class="graduate_img_block">
                    <img class="graduate_img" src="../src/assets/temp_images/plug.jpg" alt="">
                </div>           
                <div class="graduate_img_block">
                    <img class="graduate_img" src="../src/assets/temp_images/graduates_plug.jpg" alt="">
                </div>
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
        return {
            selected_year: '2016',
            previous_year: '2000'
        };
    },
    components: {
        "graduate": graduate
    },
    methods: {
        changeYear: function(year) {
            this.previous_year = this.selected_year;
            this.selected_year = year;
        }
    }
}
</script>

<style>

</style>