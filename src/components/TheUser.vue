<template>
    <div>
        <router-view name="default"></router-view>
        <router-view name="hobby"></router-view>
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


<!-- style 标签不能加 module 属性 -->

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>