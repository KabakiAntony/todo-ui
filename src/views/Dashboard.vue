<template>
<div class="dashboard">
    <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
    <h1>List things you want to achieve today or cross them off your list</h1>
    <AddTodo />
    <TodoList />
</div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
import ShowAlert from '@/components/ShowAlert.vue'


export default {
    name: "Dashboard",
    components:{ AddTodo, TodoList, ShowAlert },
    data(){
        return{
            type:null,
            message:null,
            show:false,
        }
    }

}
</script>

<style>

</style>