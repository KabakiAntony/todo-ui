<template>
  <div class="login-page">
    <h1>Want to see awesomeness login down here it's so simple</h1>
    <img alt="Login image" src="../assets/images/undraw_sign_in_re_o58h.svg">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue"

export default {
    name:'Login',
    components : { LoginForm }

}
</script>

<style scoped>
.login-page{
    width: 90%;
    margin: 0 auto;
    margin-top:5%;
}
img{
    width: 45%;
    float:left;
}

</style>