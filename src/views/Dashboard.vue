<template>
<div class="dashboard">
    <Spinner />
    <transition name="toast">
      <ShowAlert  v-if='show' :class='type' :message='message'/>
    </transition>
    <h1>List things you want to achieve today or cross them off your list</h1>
    <AddTodo @on-submit="addTodo"/>
    <div v-if="todos.length">
        <TodoList :todos='todos'  @on-update="updateTodo" @on-delete="deleteTodo"/>
    </div>
    <div v-else>
        <p>We found no todos for you, Please add some.</p>
    </div>
    
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
            todos:[],
            button_color: '',
            button_text:'',

        }
    },
    methods:{
        async addTodo(theForm){
            const url = `${this.$api}todos`
            const res = await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'auth_token':this.$store.getters.AuthToken,
                    },
                    body: JSON.stringify(theForm)
                    })
            const data = await res.json()
            if(data.status === 201){
                await this.$store.dispatch('getTodos')
                this.todos = this.$store.getters.Todos
                theForm.text = ""
            } else {
              console.log(data.error)
              }
        },
        async deleteTodo(todoId){
            if(confirm('Are you sure you want to delete ?')){
                const url = `${this.$api}todos/${todoId}`
                const res = await fetch(url,{
                    method:'DELETE',
                    headers:{
                        'Content-Type': 'application/json',
                        'auth_token':this.$store.getters.AuthToken,
                        },
                        })
                const data = await res.json()
                if(data.status === 200){
                    await this.$store.dispatch('getTodos')
                    this.todos = this.$store.getters.Todos
                } else {
                    console.log(data.error)
                }
            }
            
        },
        async updateTodo(todoId, todo){
            const updated_todo = {
                completed: !todo.completed,
                id: todo.id,
                text: todo.text,
                user_id: todo.user_id
            }
            const url = `${this.$api}todos/${todoId}`
            const res = await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'auth_token':this.$store.getters.AuthToken,
                    },
                    body: JSON.stringify(updated_todo)
                    })
            const data = await res.json()
            if(data.status === 200){
                await this.$store.dispatch('getTodos')
                this.todos = this.$store.getters.Todos
            } else {
                console.log(data.error)
            }
        }
    },
    async created(){
      await this.$store.dispatch('getTodos')
      this.todos = this.$store.getters.Todos
    },

}
</script>