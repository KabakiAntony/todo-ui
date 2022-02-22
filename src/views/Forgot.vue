<template>
  <div class="page">
     <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
    <h1>forgot your password ?</h1>
    <p>relax we got you, just enter your email below and we will send you a link shortly.</p>
    <img alt="forgot password" src="../assets/images/undraw_forgot_password_re_hxwm.svg">
    <ForgotForm class="forgot" />
  </div>
</template>

<script>
import ForgotForm from "@/components/ForgotForm.vue"
import ShowAlert from "@/components/ShowAlert.vue"


export default {
    name:'Forgot',
    components : { ShowAlert, ForgotForm },
    data(){
      return{
        type: null,
        message:null,
        show:false,
      }
    },

}
</script>

<style scoped>
.page{
    width: 90%;
    margin: 0 auto;
    margin-top:5%;
}
img{
    width: 45%;
    float:left;
}
p{
    font-weight: bold;
    font-size: 110%;
}
</style>