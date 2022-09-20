<template>
  <transition name="slide">
  <div class="box">
      <p>UserSex Component</p>
      <router-link :to="{name:'userhobby'}">UserHobby</router-link>
      <p>{{sex}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name:"UserSex",
  props:{
    sex:{
      type:String
    }
  }
}
</script>

<style lang="scss">
.slide-enter-active, .slide-leave-active {
  transition: all 5s;
}

.slide-enter-active{
  transform: translateX(30px);
  opacity: 1;
  color: red;
}

.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
  color:green;
}
</style>