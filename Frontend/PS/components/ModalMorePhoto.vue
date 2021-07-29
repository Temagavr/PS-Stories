<template>
    <div v-if="showFlag" class="modal" @click.self="closeModal()">
        <div class="modal_content">
            <div class="modal_header">
		        <span v-on:click="closeModal()" class="close" >&times;</span>
            </div>
            <div>
                <img class="modal_photo" v-for="photo in photos" :src='pathExtra + photo.path' alt="Sorry"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['photos', 'showFlag'],
    data() {
        return {
            pathExtra: 'PhotoLoadScript/PhotoLoadScript/bin/Debug/net5.0/'
        }
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