<template>
    <div class="events_list">
        <event></event>
        <event class="reversed_event"></event>
        <event></event>
    </div>
</template>

<script>
import event from "./Event.vue";

export default {
    props: ['factory'],
    data() {
        return{
            store: this.factory.createEventsListStore(),
            eventsList: []
        }
    },
    methods: {
        getEvents: async function() {
            this.eventsList = await this.store.getEventsList();
        }
    },
    components: {
        "event": event
    },
    async beforeMount() {
        await this.getEvents();
    }
}
</script>

<style>

</style>