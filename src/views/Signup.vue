<template>
<div class="page">
  <Spinner />
  <Transition name="toast">
      <ShowAlert  v-if='show' :class="type" :message="message"/>
    </Transition>
  <h1 class="signup-h1" >Sign up with this awesome app &#x263A;</h1>
  <CommonForm  v-bind="commonFormProps"  @on-submit="handleSubmit" :action="action" />
</div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"
import ShowAlert  from "@/components/ShowAlert.vue"
import Spinner from "@/components/Spinner.vue"
import { unloadToast, loadToast, loadSpinner, unloadSpinner } from "../utils"

export default {
  name: 'Signup',
  components : { ShowAlert, CommonForm, Spinner },
  data(){
    return {
      commonFormProps:{
        header:"Sign Up",
        submit_text:"Sign Up",
        bottom_text:"Already have an account ?",
        bottom_link_text:"Sign In",
        route_name:"SignIn",
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
            this.commonFormProps.submit_text =" "
            this.loadSpinner()
            const url = `${this.$api}users/signup`
            const res = await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(theForm)
                    })
            const data = await res.json()
            if(data.status === 201){
                this.unloadSpinner()
                this.loadToast(data.data.message, "success")
                this.unloadToast()
                setTimeout(()=>{
                this.$router.push({name: 'SignIn'})
                },4000)
            } else {
              this.unloadSpinner()
              this.loadToast(data.error, "error")
              this.unloadToast()
              }
              this.action=""
              this.commonFormProps.submit_text ="Sign Up"
        },
  }
}
</script>
