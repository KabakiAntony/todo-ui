<template>
  <div class="page">
     <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
    <h1>Want to see awesomeness login down here it's so simple</h1>
     <img alt="Todos UI Logo" src="../assets/images/undraw_sign_in_re_o58h.svg">
    <CommonForm  header="Sign In" submit_text="Sign In" bottom_text="Forgot password ?" bottom_link_text="Send link" route_name="Forgot"/>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"
import ShowAlert from "@/components/ShowAlert.vue"


export default {
    name:'Signin',
    components : { CommonForm, ShowAlert },
     data(){
      return {
        type:null,
        message:null,
        show:false,
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