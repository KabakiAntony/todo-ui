<template>
<div>
     <div 
     class="todo-list" 
     v-for="todo in todos" 
     :key="todo.id"
     :class="todo.completed ? 'li-completed' : 'li-open'"
     data-test="todo">
      <li>{{ todo.text }}</li>
      <div class="action-buttons">
          <button 
          class="complete" 
          :class="todo.completed ? 'completed' : 'open'"  
          @click="$emit('on-update', todo.id, todo), toggleTodo(todo)">
              {{ todo.completed ? 'Undo' : 'Complete' }}
         </button>
          <button class="delete" @click="$emit('on-delete', todo.id)">Delete</button>
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

<style scoped>
    .todo-list{
       background-color: #3F3D56;
       width:70%;
       margin: 0 auto;
       color:white;
       padding: 10px;
       border-radius: 0.5em;
       margin-bottom: 3px;
    }
    li{
        list-style: none;
        float:left;
        margin-left:5%;
    } 
    .action-buttons{
        margin-left:80%;
    }
    button{
        width:48%;
    }
    button:hover{
        background-color: white;
        color: #3F3D56;
        cursor: pointer;
    }
    .complete{
        color:white;
        border: none;
        border-radius: 0.3em;
        font-weight: bold;
        padding:5px;
    }
    .delete{
       background-color: #f33629;
        border:none;
        color:white;
        border-radius: 0.3em;
        font-weight: bold;
        padding:5px;
        margin-left:3%;
    }
    .open{
        background-color: #0096D6;
    }
    .completed{
        background-color:#89898E;
    }
        .li-completed{
        border-bottom:5px solid  rgb(38, 189, 38);
        /* border-bottom-left-radius: 0%;
        border-top-left-radius: 0%; */
        color:rgb(38, 189, 38);
       
    }

</style>