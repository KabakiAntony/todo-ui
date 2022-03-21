<template>
<div>
     <div 
     class="todo-list" 
     v-for="todo in todos" 
     :key="todo.id"
     :class="todo.completed ? 'li-completed' : 'li-open'"
    >
      <li  data-test="todo" class="todo-list-li">{{ todo.text }}</li>
      <div class="action-buttons">
          <button
          data-test="complete-button"
          class="complete" 
          :class="todo.completed ? 'completed' : 'open'"  
          @click="$emit('on-update', todo.id, todo), toggleTodo(todo)">
              {{ todo.completed ? 'Undo' : 'Complete' }}
         </button>
          <button
          data-test="delete-button"
          class="delete" 
          @click="$emit('on-delete', todo.id)">Delete</button>
      </div>
  </div>
</div>
 
</template>

<script>
export default {
    name:'TodoList',
    props:{
        todos:Array,
    },
    methods:{
        toggleTodo(todo){
            todo.compeleted = !todo.compeleted
        }
    }

}
</script>