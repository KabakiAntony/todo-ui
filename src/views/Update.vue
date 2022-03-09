<template>
  <div class="signin-page">
    <Spinner />
    <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
  <h1>Set a new password for your account.</h1>
    <div id="form-container">
          <h2 class="form-header">{{ header }}</h2>
          <form @submit.prevent="handleSubmit">
              <label>Email</label>
              <input type="email" v-model="email" disabled required>
              <label>Password</label>
              <input type="password" v-model="password" required>
              <div>
                  <button type="submit"  class="submit" :class="action">
                  {{ submit_text }}
                  </button>
              </div>
          </form>
      </div>
    </div>
</template>

<script>
import ShowAlert  from "@/components/ShowAlert.vue"
import Spinner from "@/components/Spinner.vue"
import { unloadToast, loadToast, loadSpinner, unloadSpinner } from "../utils"

export default {
    name:'Update',
    components : { ShowAlert, Spinner },
    props:['query'],
    data(){
    return {
      header:"Enter new password",
      submit_text:"Update password",
      action:null,
      type:null,
      message:null,
      show:false,
      email:null,
      password:null,
    }
  },
  methods:{
    loadSpinner,
    unloadSpinner,
    unloadToast,
    loadToast,
    async handleSubmit(){
          this.action="submitting"
          this.submit_text ="Updating ..."
          const theForm = {
            email: this.email,
            password: this.password
          }
            this.loadSpinner()
            const url = `${this.$api}users/update-password`
            const res = await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'auth_token':this.query,
                    },
                    body: JSON.stringify(theForm)
                    })
            const data = await res.json()
            if(data.status === 200){
                this.unloadSpinner()
                this.loadToast(data.data, "success")
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
            this.submit_text ="Update password"
        },
  },
  created(){
    {
     const tokenParts = this.query.split('.')
     const tokenBody = JSON.parse(atob(tokenParts[1]))
     this.email = tokenBody.email
   }
  }

}
</script>

<style scoped>
.signin-page{
    width: 90%;
    margin: 0 auto;
    margin-top:10%;
}

</style>