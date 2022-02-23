<template>
  <div class="signin-page">
    <Spinner />
    <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
    <h1>Set a new password here.</h1>
    <CommonForm   v-bind="commonFormProps" :class="action" />
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue"
import ShowAlert  from "@/components/ShowAlert.vue"
import Spinner from "@/components/Spinner.vue"

export default {
    name:'Update',
    components : { ShowAlert, CommonForm, Spinner },
     data(){
    return {
      commonFormProps:{
        header:"Enter email",
        submit_text:"Update",
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
.signin-page{
    width: 90%;
    margin: 0 auto;
    margin-top:5%;
}

</style>