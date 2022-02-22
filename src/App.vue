<template>
<div>
  <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> | 
      <router-link :to="{name: 'SignIn' }">Sign In</router-link>
  </div>
  <router-view/>
  <div id="footer">
    <p>&copy; Todo App 2022&nbsp;&nbsp;<a href="https://twitter.com/kabakikiarie">find developer here.</a></p>
  </div>
</div>
</template>

<style>
*{box-sizing: border-box;}
html,body{
  margin:0;
  padding:0;
  font-size: 100%;
  font-weight: 400;
  color: #212529;
  text-align: left;
  height: 100%;
}
#app {
  font-family: 'Indie Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3F3D56;
  width: 100%;
  position: relative;
  min-height: 100vh;
}

#nav {
  padding: 10px;
  background-color: #3F3D56;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FF6584;
}

#nav a:hover{
  color:#FF6584;
  font-weight: normal;
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
  }
  label {
    display: inline-block;
    margin: 5px 0 5px;
    color:rgb(0, 0, 0);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
}
</style>
