<template>
  <div id="nav">
      <router-link :to="{ name: 'Sign Up' }">Sign Up</router-link> | 
      <router-link to="/">Login</router-link>
  </div>
  <router-view/>
</template>

<style>
*{box-sizing: border-box;}
#app {
  font-family: 'Indie Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3F3D56;
  width: 100%;
  position: relative;
}

#nav {
  padding: 10px;
  background-color: #3F3D56;
  border-radius: 5px;
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
</style>
