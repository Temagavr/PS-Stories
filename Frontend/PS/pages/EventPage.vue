<template>
    <div>
        <app-header></app-header>
        <event v-bind:factory="factory"></event>
        <app-footer></app-footer>
    </div>
</template>

<script>
import header from "../components/Header.vue";
import event from "../components/EventContent.vue"; 
import footer from "../components/Footer.vue";

export default {
    props: ['factory'],
    data() {
        return {
            store: this.factory.createEventInfoStore(),
            eventInfo: {}
        }
    },
    methods: {
        getEventInfo: async function(id) {
            this.eventInfo = await this.store.getEventInfo(id);
        }
    },
    components: {
        "app-header": header,
        "event": event,
        "app-footer": footer
    },
    async beforeMount() {
        await this.getEventInfo(1);
    }
}
</script>

<style>
</style>