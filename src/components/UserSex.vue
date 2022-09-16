<template>
  <transition name="fade">

    <p>用户性别组件</p>
  </transition>
</template>

<script>
export default {
  name:"UserSex",
  
}
</script>

<style lang="scss" module>
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>