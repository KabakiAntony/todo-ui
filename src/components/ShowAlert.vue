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