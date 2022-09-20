<template>
  <transition name="fade">
  <div>
      <p>UserHobby Component</p>
      <router-link :to="{name:'usersex'}">UserSex</router-link>
      <p>{{hobby}}</p>
      <p>{{sex}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name:"UserHobby",
  props:{
    hobby:{
      type:String
    },
    sex:{
      type:String
    }
  },
  
}
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: all 5s;
}

.fade-enter-active{
  transform: translateX(-30px);
  opacity: 0;
  color: red;
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
  color:yellow;
  font-size: 20px;
}
</style>