<template>
    <div>
        <app-header></app-header>
        <event></event>
        <app-footer></app-footer>
    </div>
</template>

<script>
import header from "../components/Header.vue";
import event from "../components/EventContent.vue"; 
import footer from "../components/Footer.vue";

export default {
    data() {
        return{}
    },
    components: {
        "app-header": header,
        "event": event,
        "app-footer": footer
    }
}
</script>

<style>
</style>