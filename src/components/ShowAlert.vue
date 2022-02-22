<template>
 <transition name="toast">
   <div :class="type" id="showAlert">{{ message }}</div>
 </transition>
</template>

<script> 
export default {
  name:'ShowAlert',
  props:{
      type: String,
      message:String,
  }
}

</script>

<style>
.error{
  background-color: #e97971;
  border: 2px solid rgb(231, 24, 9);
}
.success {
  background-color: #d4edda;
  border: 2px solid rgb(44, 148, 2);
}
#showAlert{
  color:black;
  width:60%;
  text-align: justify;
  padding: 0.6rem;
  left: 20%;
  font-size:80%;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: fixed;
}
.toast-enter-from{
  opacity: 0;
  transform:translateY(-60px)
}
.toast-enter-active{
  transition: all 0.3s ease;
}
.toast-leave-to{
  opacity: 0;
  transform:translateY(-60px)
}
.toast-leave-active{
  transition: all 0.3s ease;
}
</style>