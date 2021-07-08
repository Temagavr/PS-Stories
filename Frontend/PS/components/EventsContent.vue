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
    data() {
        return{}
    },
    components: {
        "event": event
    }
}
</script>

<style>

</style>