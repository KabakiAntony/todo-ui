<template>
  <div class="page">
    <img alt="Todos UI Logo" src="../assets/images/undraw_welcome_cats_thqn.svg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  }
}
</script>