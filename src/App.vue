<template>
<div>
  <ul id="nav">
    <li class="logo">Todos App</li>
      <div class="nav-right">
        <li v-if="isLoggedIn">
          <a href="#" class="screen_name">Hello {{ screen_name }}</a>
          <a  class="signout" @click="signOut">Sign Out</a>
        </li>
        <li v-else>
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> |
          <router-link :to="{name: 'SignIn' }">Sign In</router-link>
        </li>
      </div>
    </ul>
  <router-view/>
  <div id="footer">
    <p>&copy; Todo APP 2022&nbsp;&nbsp;<a href="https://twitter.com/kabakikiarie">find the developer here.</a></p>
  </div>
</div>
</template>

<script>

import { mapGetters }  from 'vuex'

export default {
  methods:{
    async signOut(){
      try{
            this.$store.commit('UPDATE_IS_LOGGED_IN',false)
            this.$store.commit('UPDATE_AUTH_TOKEN',null)
            this.$store.commit('UPDATE_SCREEN_NAME',null)
            this.$router.push({name:"SignIn"})
      }
      catch(err){
        console.log(err)
      }
    
    }
  },
  computed:{
    ...mapGetters({
      isLoggedIn:"IsLoggedIn", 
      screen_name:"ScreenName"
      }),
  },  
}
</script>

<style>
*{box-sizing: border-box;}
html,body{
  margin:0;
  padding:0;
  font-size: 100%;
  color: #212529;
  text-align: left;
  height: 100%;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3F3D56;
  width: 100%;
  position: relative;
  min-height: 100vh;
}

#nav {
  padding: 1em;
  background-color: #3F3D56;
  height:60px;
  width: 100%;
}
#nav a {
  float:left;
  color:white;
  text-align: center;
  text-decoration: none;
  font-weight:bold;
}
#nav a.router-link-exact-active {
  color: #FF6584;
}
#nav a.screen_name{
  color: #FF6584;
}
#nav a.screen_name:hover{
  font-weight: bold;
  cursor:not-allowed;
}
#nav a:hover{
  color:#FF6584;
  font-weight: normal;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color:#ffffff;
}
.nav-right{
  float: right;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  float: left;
}
li a {
  padding: 8px;
}
#nav .username{
  font-weight: bold;
  color:rgb(0, 0, 0);
  font-size: normal;
}
#nav .signout:hover{
  cursor:pointer;
}
#footer {
  position:absolute;
  bottom:0;
  background-color: #3F3D56;
  width: 100%;
  color: white;
  text-align: center;
}
#footer p{
  font-weight:normal;
}
#footer a{
  color:#FF6584;
  padding-top:10px;
  text-align: center;
  text-decoration: none;
}
#footer a:hover {
  color:#00ff4c;
  text-decoration: underline;
}
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
  }
  label {
    display: inline-block;
    margin: 5px 0 5px;
    color:rgb(0, 0, 0);
    font-weight: bold;
}
.spinner {
    margin: 20px auto;
    text-align: center;
    display:none;
  }
  
  .spinner > div {
    width: 12px;
    height: 12px;
    background-color: #3F3D56;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  
  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  
  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  
  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes sk-bouncedelay {
    0%, 80%, 100% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% { 
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
  .right-list{
    float:right
  }
</style>
