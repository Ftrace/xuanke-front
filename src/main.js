import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './js/router/routes'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',   // 去掉路由地址的#
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
