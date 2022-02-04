<template>
  <div class="signin-page">
    <h1>Set a new password here.</h1>
    <CommonForm  header="Enter email" submit_text="Update"/>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"


export default {
    name:'Update',
    components : { CommonForm }

}
</script>

<style scoped>
.signin-page{
    width: 90%;
    margin: 0 auto;
    margin-top:5%;
}

</style>