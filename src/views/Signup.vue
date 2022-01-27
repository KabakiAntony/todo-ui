<template>
 <h1>Sign up with this awesome app &#x263A;</h1>
 <SignupForm/>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'

export default {
  name: 'Signup',
  components: { SignupForm }
}
</script>

<style>
h1{
  margin-top:5%;
  margin-bottom:5%;
}
</style>
