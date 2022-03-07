<template>
  <div class="dashboard">
      <div v-show="waiting" class="on-load">
          <Spinner />
          <p>Please hold as we verify your email .... </p>
      </div>
    <div v-show="verified" class="success">
        <img alt="Ok" src="../assets/images/icons8-ok.svg">
        <h2>Verified</h2>
        <p>You have successfully verified your account.</p>
        <p>Please hold as we take you to signin page .... </p>
    </div>
    <div v-show="failed" class="error">
        <img alt="Ok" src="../assets/images/icons8-cancel.svg">
        <h2>Failed</h2>
        <p>We could not verify your account : <span>{{ failure_message }}</span></p>
        <button class="submit">Ok</button>
    </div>
</div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import { loadSpinner, unloadSpinner } from "../utils"

export default {
    name: 'Verify',
    components:{ Spinner },
    props:['query'],
    data(){
        return {
            verified : null,
            failed : null,
            failure_message:null,
            waiting:true,
        }
    },
    methods:{
        loadSpinner,
        unloadSpinner,
        async verifyAccount(){
            const url = `${this.$api}users/verify`
            const res = await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'auth_token':this.query
                    },
                    })
            const data = await res.json()
            if(data.status === 200){
                this.waiting = false
                this.verified = true
                setTimeout(()=>{
                this.$router.push({name: 'SignIn'})
                },3000)
            } else {
                this.waiting = false
                this.failure_message = data.error
                this.failed = true
            }
        },
    },
    mounted(){
        this.loadSpinner()
        this.verifyAccount()
    }
}
</script>

<style scoped>
.success {
  border: 2px solid rgb(44, 148, 2);
  width:70%;
  margin:0 auto;
  margin-top: 10%;
  border-radius: 0.3em;
}
.error{
  border: 2px solid rgb(231, 24, 9);
  width:70%;
  margin:0 auto;
  margin-top: 10%;
  border-radius: 0.3em;
}
.submit{
    width:10%;
    margin-bottom: 5%;
}
.submit a{
    font-weight: normal;
    text-decoration: none;
    color: white;
}
.submit a:hover{
    background-color: white;
    color: #3F3D56;
    cursor: pointer;
}
img {
    margin-top: 2.5%;
    height: 10%;
    width: 10%;
  }
  span{
     color:rgb(231, 24, 9); 
  }
  p{margin:3%;}
  .on-load{
    margin-top: 15%;
  }
</style>