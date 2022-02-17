<template>
<div class="dashboard">
    <h1>List things you want to achieve today or cross them off your list</h1>
    <AddTodo />
    <TodoList />
</div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'


export default {
    name: "Dashboard",
    components:{ AddTodo, TodoList },

}
</script>

<style>

</style>