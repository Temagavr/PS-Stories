<template>
  <div class="graduate">
      <span class="graduate_info">{{graduate_info.name}}</span>
      <span class="graduate_info">{{graduate_info.email}}</span>
      <span class="graduate_info"></span>
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