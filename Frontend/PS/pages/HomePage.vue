<template>
    <div>
        <app-header></app-header>
        <home-content></home-content>
        <app-footer></app-footer>
    </div>
</template>

<script>
import header from "../components/Header.vue";
import homeContent from "../components/HomeContent.vue";
import footer from "../components/Footer.vue";

export default {
    data() {
        return{}
    },
    components: {
        "app-header": header,
        "home-content": homeContent,
        "app-footer": footer
    }
}
</script>

<style>
</style>