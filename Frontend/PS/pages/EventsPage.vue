<template>
    <div>
        <app-header></app-header>
        <events v-bind:factory="factory"></events>
        <app-footer></app-footer>
    </div>
</template>

<script>
import header from "../components/Header.vue";
import events from "../components/EventsContent.vue"; 
import footer from "../components/Footer.vue";


export default {
    props: ['factory'],
    data() {
        return{}
    },
    components: {
        "app-header": header,
        "events": events,
        "app-footer": footer
    }
}
</script>

<style>
</style>