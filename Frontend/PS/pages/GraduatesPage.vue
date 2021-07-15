<template>
    <div>
        <app-header></app-header>
        <graduates v-bind:factory="factory"></graduates>
        <app-footer></app-footer>
    </div>
</template>

<script>
import header from "../components/Header.vue";
import graduates from "../components/GraduatesContent.vue";
import footer from "../components/Footer.vue";


export default {
    props: ['factory'],
    data() {
        return{}
    },
    components: {
        "app-header": header,
        "graduates": graduates,
        "app-footer": footer
    }
}
</script>

<style>
</style>