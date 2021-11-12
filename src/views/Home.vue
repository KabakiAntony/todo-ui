<template>
  <div class="home">
    <img alt="Todos UI Logo" src="../assets/images/undraw_welcome_cats_thqn.svg">
    <HelloWorld msg="Welcomes to Todos universe"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  img {
    margin-top: 5%;
    height: 300px;
    width: 700px;
  }
</style>>
