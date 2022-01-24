<template>
  <div id="nav">
      <router-link to="/">Sign Up</router-link> | 
      <router-link to="/">Login</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3F3D56;
}

#nav {
  padding: 10px;
  background-color: #3F3D56;
  border-radius: 5px;
}

#nav a {
  font-weight: bold;
  color: #3F3D56;
  text-decoration: none;
}
#nav a:hover{
  color:aqua;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
