<template>
  <div :class="$style['not-found']">
    <p :class="$style.title">404</p>
    <p :class="$style.desc1">Page not found</p>
    <p :class="$style.desc2">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
  </div>
</template>

<script>
export default {
  name:"NotFound"
}
</script>

<style lang="scss" module>
  *{
    margin:0;
    padding:0;
  }
  
  .not-found{
    display: grid;
  }

  .title{
    font-size:200px;
    color:#136AFB;
    margin-bottom: 48px;
  }

  .desc1{
    font-size:42px;
    line-height: 70px;
    color:#201F1F;
  }

  .desc2{
    color:#201F1F;
  }
</style>