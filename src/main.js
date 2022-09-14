import Vue from 'vue'
import App from './App.vue'

// 导入 VueRouter
import VueRouter from 'vue-router'
//  导入路由表
import routes from "./route/routes.js"

// 初始化路由实例
let router = new VueRouter({
  mode: "history",
  routes: routes
})

router.onError(() => {
  console.log("导航发生了错误")
})

router.beforeEach((to, from, next) => {
  next();
})

// 这一步是必须的
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
