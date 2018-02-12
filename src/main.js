// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueResource from 'vue-resource'
require('./assets/css/base.css'); //全局引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from '../node_modules/axios';

Vue.prototype.axios = axios;
Vue.use(Mint);
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
