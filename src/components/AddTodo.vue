<template>
  <div class="add-todo">
      <input type="text" name="new-todo" >
      <input type="button" value="Add">
  </div>
</template>

<script>
export default {
    name:'AddTodo',
    data(){
        return{
            newTodo:''
        }
    }
 
}
</script>

<style scoped>
    .add-todo{
        background:#89898E;
        display:inline-block;
        width:70%;
        padding:4%;
        border-radius:0.5rem;
        border:none;
        margin-bottom: 50px;
    }
   input[type=button]{
        font-weight: bold;
        background-color: #3F3D56;
        border-radius:0.5rem;
        border:none;
        text-decoration: none;
        padding: 10px;
        color:rgb(255, 255, 255);
        font-size: 110%;
        width:20%;
        text-align: center;
        display: inline-block;
        font-family: 'Indie Flower', cursive;
        margin-left:5%;
    }
   input[type=button]:hover{
        background-color: white;
        color: #3F3D56;
        cursor: pointer;
    }
    input[type=text]{
        width: 70%;
        border: none;
        color: rgb(0, 0, 0);
        padding: 12px;
        text-decoration: none;
        display: inline-block;
        font-size: 90%;

    }
</style>