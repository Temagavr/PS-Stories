<template>
    <div v-if="showFlag" class="modal" @click.self="closeModal()">
        <div class="modal_content">
            <div class="modal_header">
		        <span v-on:click="closeModal()" class="close" >&times;</span>
            </div>
            <div>
                <img class="modal_photo" v-for="photo in photos" :key="photo" :src='photo' alt="Sorry"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['photos', 'showFlag'],
    data() {
        return {}
    },
    methods: {
        closeModal: function() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style>

</style>