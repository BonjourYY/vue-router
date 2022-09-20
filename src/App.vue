<template>
  <div id="app">
    <h1>路由（路由表示动作）进行时，通过URL，传递数据</h1>
      <router-view name="default"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
},
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
