<template>
  <div class="page">
    <Spinner />
     <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
    <h1>Want to see awesomeness login down here it's so simple</h1>
     <img alt="Todos UI Logo" src="../assets/images/undraw_sign_in_re_o58h.svg">
    <CommonForm  v-bind="commonFormProps" @on-submit="handleSubmit" :action="action" />
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"
import ShowAlert from "@/components/ShowAlert.vue"
import Spinner from '@/components/Spinner.vue'
import { unloadToast, loadToast, loadSpinner, unloadSpinner } from "../utils"


export default {
    name:'Signin',
    components : { CommonForm, ShowAlert, Spinner },
     data(){
      return {
        commonFormProps:{
        header:"Sign In",
        submit_text:"Sign In",
        bottom_text:"Forgot Password ?",
        bottom_link_text:"Send link",
        route_name:"Forgot"
      },
      type:null,
      message:null,
      show:false,
      action:null,
      }
  },
    methods:{
    loadSpinner,
    unloadSpinner,
    unloadToast,
    loadToast,
     async handleSubmit(theForm){
            this.action="submitting"
            this.commonFormProps.submit_text ="Signing in ..."
            this.loadSpinner()
            let data = await this.$store.dispatch('signIn',theForm)
            if(data.status === 200){
                this.unloadSpinner()
                this.loadToast(data.data.message, "success")
                this.unloadToast()
                setTimeout(()=>{
                this.$router.push({name: 'Dashboard'})
                },3000)
            } else {
              this.unloadSpinner()
              this.loadToast(data.error, "error")
              this.unloadToast()
              }
            this.action = ""
            this.commonFormProps.submit_text = "Sign In"
        },
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