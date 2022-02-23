<template>
  <div class="page">
    <Spinner />
     <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
    <h1>Want to see awesomeness login down here it's so simple</h1>
     <img alt="Todos UI Logo" src="../assets/images/undraw_sign_in_re_o58h.svg">
    <CommonForm  v-bind="commonFormProps" :class="action"/>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"
import ShowAlert from "@/components/ShowAlert.vue"
import Spinner from '@/components/Spinner.vue'


export default {
    name:'Signin',
    components : { CommonForm, ShowAlert, Spinner },
     data(){
      return {
        commonFormProps:{
        header:"Sign In",
        submit_text:"Sign me in",
        bottom_text:"Forgot Password ?",
        bottom_link_text:"Send link",
        route_name:"Forgot"
      },
      type:null,
      message:null,
      show:false,
      action:null,
      }
  }

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

</style>