<template>
    <div>
        <div class="event_imgs">
            <div class="event_main_img_block">
                <img class="event_main_img" src="../src/assets/temp_images/plug.jpg" alt="">
            </div>
            <div class="event_imgs_block">
                <table class="extra_imgs_table">
                    <tr>
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                        
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                        
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                    </tr>

                    <tr>
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                        
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                        
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                    </tr>

                    <tr>
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                        
                        <td class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                        
                        <td v-on:click="switchModalFlag()" class="event_extra_img_block">
                            <img class="event_extra_img" src="../src/assets/temp_images/plug.jpg" alt="">   
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="event_info">
            <span class="black_text bold_text_style">Какое то название события</span>
            <p class="regular_text_style">
                Какое то подробное описание события, для донесения важной
                 информации. Возможно есть какая доп информация, какие нибудь ссылки на прошлые события. 
            </p>
        </div>
        <modal v-bind:photos="[]" v-bind:showFlag="modalFlag" v-on:closeModal="switchModalFlag()"></modal>
    </div>
</template>

<script>
import modal from './ModalMorePhoto.vue';

export default {
    data() {
        return {
            modalFlag: false
        }
    },
    methods: {
        switchModalFlag: function() {
            // if(this.graduates_cont[this.selected_year].images.length > 3)
                this.modalFlag = !this.modalFlag;
        }
    },
    components: {
        "modal": modal
    }
}
</script>

<style>

</style>