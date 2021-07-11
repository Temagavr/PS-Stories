<template>
    <div>
        <app-header></app-header>
        <graduates></graduates>
        <app-footer></app-footer>
    </div>
</template>

<script>
import header from "../components/Header.vue";
import graduates from "../components/GraduatesContent.vue";
import footer from "../components/Footer.vue";


export default {
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