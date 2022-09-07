<template>
  <div class="user">
    <h1>编程式路由跳转</h1>
    <p @click="$router.push({name:'theuser'})">跳转到「用户组件」</p>
    <p @click="$router.push({name:'usersex'})">点击跳转到「UserSex」组件</p>
    <p @click="$router.push({name:'userhobby'})">点击跳转到「UserHobby」组件</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"TheUser",
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>