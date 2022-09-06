// 引入组件的两种方式：import and require
import ProfiloName from "@/components/ProfiloName.vue"
import NotFound from "@/components/NotFound.vue"
const routes = [
  { path: "/", component: () => { require("@/App.vue") } },
  { path: "/profilo/:profiloname", component: ProfiloName },
  { path: "*", component: NotFound }
]
export default routes;