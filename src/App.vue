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
</style>
