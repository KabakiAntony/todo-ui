<template>
    <div class="add-todo">
      <form @submit.prevent="$emit('on-submit', form)">
          <input type="text" v-model="form.text" required>
          <button type="submit"  class="add-todo-submit" :class="action">{{ submit_text }}</button>
      </form>
  </div>
</template>

<script>
export default {
    name:'AddTodo',
    props:{
        action:String,
        submit_text:String,
    },
    data(){
        return{
            form:{
                text:"",
            }
        }
    }
 
}
</script>
