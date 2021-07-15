<template>
  <div>
    <router-view v-bind:factory="factory" class="all_screen"></router-view>
  </div>
</template>

<script>
import ServerApi from '../Api/ServerApi';
import StoreFactory from '../Factory/StoreFactory';

const serverApi = new ServerApi();
const storeFactory = new StoreFactory(serverApi);

export default {
  name: 'app',
  data () {
    return {
      msg: '',
      factory: storeFactory
    }
  }
}
</script>

<style>

</style>
