<template>
<div class="signup-page">
  <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
  <h1>Sign up with this awesome app &#x263A;</h1>
  <CommonForm  header="Sign Up" submit_text="Sign me up" bottom_text="Already have an account ?" bottom_link_text="Sign In" route_name="SignIn"/>
</div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"
import ShowAlert  from "@/components/ShowAlert.vue"

export default {
  name: 'Signup',
  components : { ShowAlert, CommonForm },
  data(){
    return {
      type:null,
      message:null,
      show:false
    }
  }
}
</script>

<style>
h1{
  margin-top:5%;
  margin-bottom:5%;
}
</style>
