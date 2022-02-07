<template>
  <div class="page">
    <h1>Want to see awesomeness login down here it's so simple</h1>
     <img alt="Todos UI Logo" src="../assets/images/undraw_sign_in_re_o58h.svg">
    <CommonForm  header="Sign In" submit_text="Sign In" bottom_text="Forgot password ?" bottom_link_text="Send link" route_name="Forgot"/>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"


export default {
    name:'Signin',
    components : { CommonForm }

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