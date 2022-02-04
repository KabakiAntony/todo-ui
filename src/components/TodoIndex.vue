<template>
  <div class="todo-index">
    <img alt="Todos UI Logo" src="../assets/images/undraw_welcome_cats_thqn.svg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TodoIndex',
  props: {
    msg: String
  }
}
</script>


<style scoped>
 img {
    margin-top: 5%;
    height: 35%;
    width: 70%;
  }
</style>
