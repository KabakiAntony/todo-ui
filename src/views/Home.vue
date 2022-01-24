<template>
  <div class="home">
    <img alt="Todos UI Logo" src="../assets/images/undraw_welcome_cats_thqn.svg">
    <TodoIndex msg="Ain't this the best todo app on the internet."/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoIndex from '@/components/TodoIndex.vue'

export default {
  name: 'Home',
  components: {
    TodoIndex
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
