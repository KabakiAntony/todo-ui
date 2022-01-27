<template>
    <div id="form-container">
        <h2 class="form-header">Sign up</h2>
        <form @submit.prevent="handleSubmit">
            <label>Email</label>
            <input type="email" v-model="form.email" required>
            <label>Password</label>
            <input type="password" v-model="form.password" required>
            <div>
                <button type="submit" class="submit" :class="action">
                {{ button_text }}
                </button>
            </div>
            <!-- <div class="text-center">
                Already have an account?
                <router-link id="bottom-sign-in" :to="{ name: 'Login' }">Login</router-link>
            </div> -->
        </form>
    </div>
</template>

<script>
export default {
    name:'SignupForm',
    data(){
        return{
            form:{
                email:'',
                password:''
            },
            button_text:'Sign me up',
            action:''
        }
    },
    methods:{
        async handleSubmit(){
            this.$emit('submit', this.form)
        }

    }
}
</script>

<style scoped>
#form-container{
    margin: 0 auto;
    background:#89898E;
    border-radius:0.5rem;
    max-width: 320px;
    font-size: small;
    font-weight: 500;
    overflow: hidden;
    color:rgb(87, 86, 86);
    text-align: justify;
}
form{
    padding:30px;
}
.form-header{
    text-align:center;
    text-transform: uppercase;
    background-color: #3F3D56;
    padding: 10px;
    margin:0;
    font-weight: bold;
    font-size: 120%;
    color: rgba(255,255,255);
}
input{
    display: block;
    margin-bottom: 10px;
    padding:10px;
    width:100%;
    font-weight: bold;
    border-radius: 0.5rem;
    border:1px solid  rgb(51, 49, 49);
}
  button:hover{
    background-color: white;
    color: #3F3D56;
    cursor: pointer;
  }
  .submit{
    font-family: 'Indie Flower', cursive;
    font-weight: bold;
    background-color: #3F3D56;
    border-radius:0.5rem;
    border:none;
    text-decoration: none;
    padding: 10px;
    color:rgb(255, 255, 255);
    width:100%;
    font-size: 110%;
    margin-top: 10px;
  }
  .text-center{
    text-align: center;
    margin-top: inherit;
    font-size: 12px;
    margin-top:20px;
    font-weight: bold;
     color:#000000;
  }
  .text-center a{
    text-decoration:none;
    color:#00ff4c;
  }
  .text-center a:hover{
      color:#3F3D56;
      text-decoration: underline;
      text-transform: uppercase;
  }
  label {
    display: inline-block;
    margin: 5px 0 5px;
    color:rgb(0, 0, 0);
    font-family:cursive;
    font-weight: bold;
}
</style>