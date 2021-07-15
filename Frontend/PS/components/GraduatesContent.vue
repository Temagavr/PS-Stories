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
            <div class="graduates_images" v-if="graduates_cont[selected_year].images.length >= 3">
                <div class="graduate_img_block">
                    <img class="graduate_img" :src='graduates_cont[selected_year].images[0]' alt=""/>
                </div>
                <div class="graduate_img_block">
                    <img class="graduate_img" :src='graduates_cont[selected_year].images[1]' alt=""/>
                </div>           
                <div v-on:click="switchModalFlag()" class="graduate_img_block darkened more_graduates_photo" v-if="graduates_cont[selected_year].images.length > 3">
                    <img class="graduate_img max_width" :src="graduates_cont[selected_year].images[2]" alt=""/>
                    <span class="more_graduates_photo_title regular_text_style white_link">+{{graduates_cont[selected_year].images.length - 2}}</span>
                </div>
                <div class="graduate_img_block" v-if="graduates_cont[selected_year].images.length == 3">
                    <img class="graduate_img" :src='graduates_cont[selected_year].images[2]' alt=""/>
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
                    </div>
                    <div class="graduates_list_content">
                        <graduate v-for="grad in this.graduates_cont[selected_year].graduates" v-bind:graduate_info="grad"></graduate>
                    </div>
                </div>
            </div>
        </div>
        <modal v-bind:photos="graduates_cont[selected_year].images" v-bind:showFlag="modalFlag" v-on:closeModal="switchModalFlag()"></modal>
    </div>
</template>

<script>
import graduate from './GraduateInfo.vue';
import modal from './ModalMorePhoto.vue';

export default {
    props: ['factory'],
    data() {
        return {
            store: this.factory.createGraduatesStore(),
            graduates_info: [],

            selected_year: '2016',
            previous_year: '2000',
            img_index: 0,
            modalFlag: false,
            graduates_cont: {
                2016: { graduates:[
                    { name: 'Бирюков Сергей', email: 'temp222@mail.com'},
                    { name: 'Гаврилин Артем', email: 'temp@mail.com'},
                    { name: 'Губин Сергей', email: 'temp1234421321@mail.com'},
                    { name: 'Дехант Александр', email: 'temp202020@mail.com'},
                    { name: 'Дубникова Дарья', email: 'ddsad@mail.com'},
                    { name: 'Ибатуллина Мария', email: 'teqwe@mail.com'},
                    { name: 'Красильников Илья', email: 'temasd@mail.com'},
                    { name: 'Макеров Вадим', email: 'temp789@mail.com'}
                    ],
                    images: [
                        '../src/assets/temp_images/2016/1.jpg', 
                        '../src/assets/temp_images/2016/2.jpg', 
                        '../src/assets/temp_images/2016/3.jpg', 
                        '../src/assets/temp_images/2016/4.jpg', 
                        '../src/assets/temp_images/2016/5.jpg', 
                        '../src/assets/temp_images/2016/6.jpg', 
                        '../src/assets/temp_images/2016/7.jpg'
                    ]
                },
                2000: { graduates:[
                    { name: 'Акимова Татьяна', email: 'pop@mail.ruru'},
                    { name: 'Булатников Сергей', email: 'temp@mail.com'},
                    { name: 'Дудин Николай', email: 'temp1234421321@mail.com'},
                    { name: 'Ельмихеев Александр', email: 'temp222@mail.com'},
                    { name: 'Канюшкова Мария', email: 'temp@mail.com'},
                    { name: 'Лаптев Роман', email: 'temp1234421321@mail.com'},
                    { name: 'Лер Георгий', email: 'temp222@mail.com'},
                    { name: 'Ложечников Максим', email: 'temp@mail.com'},
                    { name: 'Макарова Ольга', email: 'temp1234421321@mail.com'},
                    { name: 'Махнев Андрей', email: 'temp222@mail.com'},
                    { name: 'Стрельников Владислав', email: 'temp@mail.com'},
                    { name: 'Тимаков Никита', email: 'temp1234421321@mail.com'},
                    { name: 'Ямбулатов Роман', email: 'temp222@mail.com'}
                ],
                    images: [
                        '../src/assets/temp_images/2000/1.jpg', 
                        '../src/assets/temp_images/2000/2.jpg', 
                        '../src/assets/temp_images/2000/3.jpg', 
                        '../src/assets/temp_images/2000/4.jpg', 
                        '../src/assets/temp_images/2000/5.jpg', 
                        '../src/assets/temp_images/2000/6.jpg'
                    ] 
                }
            }
        };
    },
    components: {
        "graduate": graduate,
        "modal": modal
    },
    methods: {
        getGraduatesInfo: function() {
            this.graduates_info = this.store.getGraduatesList(this.selected_year);
        },

        changeYear: function(year) {
            this.previous_year = this.selected_year;
            this.selected_year = year;
            this.img_index = 0;

            this.getGraduatesInfo();
        },
        switchModalFlag: function() {
            if(this.graduates_cont[this.selected_year].images.length > 3)
                this.modalFlag = !this.modalFlag;
        }
    },

    beforeMount() {
        this.getGraduatesInfo();
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