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

// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some((ele) => { return ele.meta.requiresAuth })) {
    console.log("需要校验");
    router.push({ name: "love", params: { name: "sddsf" } });
  } else {
    console.log("可以直接通过")
    next();
  }
})


// 这一步是必须的
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
