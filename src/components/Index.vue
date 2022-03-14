<template>
<div>
  <h1 class="index-h1">{{ msg }}</h1>
  <img alt="Todos UI Logo" src="../assets/images/undraw_welcome_cats_thqn.svg">
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