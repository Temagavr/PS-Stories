<template>
    <div>
        <div>
            <div class="year_select_block">
                <span class="regular_text_style year_selection_label float_left">Год выпуска: </span>
                <div class="year_selection">
                    <select v-model="selected_year" class="regular_text_style year_select">
                        <option class="regular_text_style" v-for="year in graduate_years" :value="year.year">{{year.year}}</option>
                    </select>
                    <!-- <ul>
		                <li><span class="year_selected regular_text_style">{{selected_year}}<div id="down-triangle"></div></span>
			                <ul>
				                <li><span v-for="year in graduate_years" v-on:click="changeYear(year.year)" class="regular_text_style">{{year.year}}</span></li>
				            </ul>
		                </li>
	                </ul> -->
                </div>
            </div>
            <div class="graduates_images" v-if="imagesCount >= 3">
                <div class="graduate_img_block">
                    <img class="graduate_img" :src='pathExtra + graduates_info.images[0].path' alt=""/>
                </div>
                <div class="graduate_img_block">
                    <img class="graduate_img" :src='pathExtra + graduates_info.images[1].path' alt=""/>
                </div>           
                <div v-on:click="switchModalFlag()" class="graduate_img_block graduate_img_block_mobile darkened more_graduates_photo" v-if="imagesCount > 3">
                    <img class="graduate_img max_width" :src="pathExtra + graduates_info.images[2].path" alt=""/>
                    <span class="more_graduates_photo_title regular_text_style white_link">+{{imagesCount - 2}}</span>
                </div>
                <div class="graduate_img_block" v-if="imagesCount == 3">
                    <img class="graduate_img" :src='pathExtra + graduates_info.images[2].path' alt=""/>
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
                        <span class="graduates_heading email_heading">Email</span>
                    </div>
                    <div class="graduates_list_content">
                        <graduate v-for="grad in this.graduates_info.graduates" v-bind:graduate_info="grad"></graduate>
                    </div>
                </div>
            </div>
        </div>
        <modal v-bind:photos="graduates_info.images" v-bind:showFlag="modalFlag" v-on:closeModal="switchModalFlag()"></modal>
    </div>
</template>

<script>
import graduate from './GraduateInfo.vue';
import modal from './ModalMorePhoto.vue';

export default {
    props: ['factory'],
    data() {
        return {
            graduates_store: this.factory.createGraduatesStore(),
            graduate_years_store: this.factory.createGraduateYearsListStore(),
            graduates_info: [],
            graduate_years: [],

            selected_year: 0,
            img_index: 0,
            modalFlag: false,
            imagesCount: 0,
            pathExtra: 'PhotoLoadScript/PhotoLoadScript/bin/Debug/net5.0/'
        };
    },
    components: {
        "graduate": graduate,
        "modal": modal
    },
    methods: {
        getGraduatesInfo: async function() {
            this.graduates_info = await this.graduates_store.getGraduatesList(this.selected_year);

            this.imagesCount = this.graduates_info.images.length;
        },
        getGraduateYears: async function() {
            this.graduate_years = await this.graduate_years_store.getGraduateYears();
            this.selected_year = this.graduate_years[0].year;
        },
        changeYear: function(year) {
            this.selected_year = year;
            this.img_index = 0;

            this.getGraduatesInfo();
        },
        switchModalFlag: function() {
            if(this.graduates_info.images.length > 3)
                this.modalFlag = !this.modalFlag;
        }
    },
    computed: {
        GraduatesInfoComp: async function() {
            await this.getGraduatesInfo();
        }
    },
    async beforeMount() {
        await this.getGraduateYears();
        await this.getGraduatesInfo();
    },
    async beforeUpdate() {
        await this.GraduatesInfoComp;
    }
}
</script>

<style scoped>

.max_width
{
    width: 100%;
    height: 100%;
}

</style>