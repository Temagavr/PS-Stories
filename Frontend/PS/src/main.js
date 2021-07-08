import Vue from 'vue'
import App from './App.vue'
import Routes from './../Router';
import Styles from './../Styles/styles.css';

new Vue({
  el: '#app',
  router: Routes,
  render: h => h(App)
})
