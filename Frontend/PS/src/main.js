import Vue from 'vue'
import App from './App.vue'
import Routes from './../Router';

import ServerApi from '../Api/ServerApi';
import StoreFactory from '../Factory/StoreFactory';

import Styles from './../Styles/styles.css';
import Adaptive_Styles from './../Styles/adaptive_styles.css';

const serverApi = new ServerApi();
const storeFactory = new StoreFactory(serverApi);


new Vue({
  el: '#app',
  router: Routes,
  render: h => h(App)
})
