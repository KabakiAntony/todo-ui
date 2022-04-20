<template>
  <div class="page">
    <Spinner />
     <Transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </Transition>
    <h1>Forgot your password ?</h1>
    <p>We got you, just enter your email below and we will send you a link shortly.</p>
    <div class="holder">
      <img alt="forgot password" class="side-img" src="../assets/images/undraw_forgot_password_re_hxwm.svg">
      <ForgotForm  v-bind="forgotFormProps" @on-submit="handleSubmit" :action="action" />
    </div>
  </div>
</template>

<script>
import ForgotForm from "@/components/ForgotForm.vue"
import ShowAlert from "@/components/ShowAlert.vue"
import Spinner from '@/components/Spinner.vue'
import { unloadToast, loadToast, loadSpinner, unloadSpinner } from "../utils"

export default {
    name:'Forgot',
    components : { ShowAlert, ForgotForm, Spinner },
    data(){
      return{
        type: null,
        message:null,
        show:false,
        action:null,
        forgotFormProps:{
          submit_text:"Send reset email"
        }
      }
    },
    methods:{
    loadSpinner,
    unloadSpinner,
    unloadToast,
    loadToast,
     async handleSubmit(theForm){
            this.action="submitting"
            this.forgotFormProps.submit_text =" "
            this.loadSpinner()
            try{
              const url = `${this.$api}users/forgot`
              const res = await fetch(url,{
                  method:'POST',
                  headers:{
                      'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(theForm)
                      })
              const data = await res.json()
              if(data.status === 202){
                  this.unloadSpinner()
                  this.loadToast(data.data.message, "success")
                  theForm.email=""
                  this.unloadToast()
                  setTimeout(()=>{
                  this.$router.push({name: 'Home'})
                  },3000)
              } else {
                this.unloadSpinner()
                this.loadToast(data.error, "error")
                this.unloadToast()
                }
              this.action=""
              this.forgotFormProps.submit_text ="Send reset email"
            }
            catch(err)
            {
               this.loadToast(err, "error")
               this.unloadToast()
            }
        },
  }
}
</script>