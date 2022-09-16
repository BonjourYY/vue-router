// 引入组件的两种方式：import and require
import NotFound from "@/components/NotFound.vue"
import TheUser from "@/components/TheUser.vue"
import UserSex from "@/components/UserSex.vue"
import UserHobby from "@/components/UserHobby.vue"
import LoveName from "@/components/LoveName.vue"
const routes = [
  { path: "/", components: () => { require("@/App.vue") } },
  {
    path: "/user",
    name: "theuser",
    component: TheUser,
    children: [
      // {
      //   path: "",
      //   name: "theuser",
      //   component: TheUser
      // },
      {
        path: "sex",
        name: "usersex",
        components: {
          "default": UserSex,
          "hobby": UserHobby
        },
      },
      {
        path: "hobby",
        name: "userhobby",
        component: UserHobby,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: "/love/:name",
    name: "love",
    component: LoveName
  },
  // 兜底路由
  { path: "*", component: NotFound }
]


export default routes;