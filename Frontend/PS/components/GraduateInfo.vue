<template>
  <div class="graduate">
      <span class="graduate_info">{{graduate_info.full_name}}</span>
      <span class="graduate_info email_info">{{graduate_info.email}}</span>
  </div>
</template>

<script>
export default {
  props: ['graduate_info'],
  data() {
    return{}
  },
  methods: {

  }
}
</script>

<style>

</style>