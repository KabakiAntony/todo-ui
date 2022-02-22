<template>
<div class="dashboard">
    <Spinner />
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
import Spinner from '@/components/Spinner.vue'


export default {
    name: "Dashboard",
    components:{ AddTodo, TodoList, ShowAlert, Spinner },
    data(){
        return{
            type:null,
            message:null,
            show:false,
            action:null,
        }
    }

}
</script>

<style>

</style>