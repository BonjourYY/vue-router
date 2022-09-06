<template>
  <div id="app">
    <!-- <h1>动态路由匹配</h1>
    <router-link to="/profilo/jack">profilo/jack</router-link>
    <br>
    <router-link to="/profilo/linda">profilo/linda</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
