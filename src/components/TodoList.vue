<template>
<div>
     <div class="todo-list" v-for="todo in todos" :key="todo.id" data-test="todo">
      <li>{{ todo.text }}</li>
      <div class="action-buttons">
          <button class="complete">Complete</button>
          <button class="delete">Delete</button>
      </div>
  </div>
</div>
 
</template>

<script>
export default {
    name:'TodoList',
    data(){
        return{
            todos:[
                {
                id: 1,
                text: 'Learn Vue.js 3',
                completed: false
                },
                {
                id: 2,
                text: 'Learn React Js',
                completed: false
                },
                {
                id: 3,
                text: 'Learn Angular Js',
                completed: false
                }

            ]
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
        background-color: #0096D6;
        border: none;
        color:white;
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

</style>