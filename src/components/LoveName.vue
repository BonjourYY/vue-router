<template>
  <div>
    <p>Love 组件</p>
    <p>{{$route.params}}</p>
  </div>
</template>

<script>
export default {
  name:"LoveName",
  beforeRouteEnter(to, from,next ) {
    console.log(to);
    console.log(from);
    console.log("==============路由进入");
    next();
    
  },
  beforeRouteUpdate(to, from) {
   console.log(to);
   console.log(from);
   console.log("==============路由更新")
   
  },
  beforeRouteLeave(to, from,next) {
    console.log(to);
    console.log(from);
    console.log("==============路由离开")
    next();
  }
}
</script>

<style>

</style>