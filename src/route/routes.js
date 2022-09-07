// 引入组件的两种方式：import and require
import NotFound from "@/components/NotFound.vue"
import TheUser from "@/components/TheUser.vue"
import UserSex from "@/components/UserSex.vue"
import UserHobby from "@/components/UserHobby.vue"
const routes = [
  { path: "/", component: () => { require("@/App.vue") } },
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
        component: UserSex
      },
      {
        path: "hobby",
        name: "userhobby",
        component: UserHobby
      }
    ]
  },
  { path: "*", component: NotFound }
]
export default routes;