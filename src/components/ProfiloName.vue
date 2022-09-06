<template>
  <p>姓名：{{name}}</p>
</template>

<script>
export default {
  name:"ProFiloName",
  data(){
    return{
      name:this.$route.params
    }
  },
  // 因为动态路由对应的组件是复用的，
  // 即 该组件没有重新销毁创建，所以不会触发声明周期
  // 可以通过以下两个方法实现 数据响应路由参数的变化
  
  // watch:{
  //   $route(){
  //     this.name = this.$route.params;
  //   }
  // }
  
  beforeRouteUpdate(to,from,next){
    this.name = this.$route.params;
    next()
  }
}
</script>

<style>

</style>