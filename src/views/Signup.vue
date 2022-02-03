<template>
<div class="signup-page">
  <h1>Sign up with this awesome app &#x263A;</h1>
  <CommonForm  header="Sign Up" submit_text="Sign me up" bottom_text="Already have an account ?" bottom_link_text="Sign In" route_name="SignIn"/>
</div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"

export default {
  name: 'Signup',
  components : { CommonForm }
}
</script>

<style>
h1{
  margin-top:5%;
  margin-bottom:5%;
}
</style>
