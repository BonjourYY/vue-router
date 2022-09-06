// 引入组件的两种方式：import and require
import UserName from "@/components/UserName.vue"
const routes = [
  { path: "/helloworld", component: resolve => require(['@/components/HelloWorld.vue'], resolve) },
  { path: "/username", component: UserName }
]
export default routes;