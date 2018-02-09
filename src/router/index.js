import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import GoodsDetail from '../components/GoodsDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
        path: '/detail/:id',
        name: 'GoodsDetail',
        component: GoodsDetail
    }
  ]
})
