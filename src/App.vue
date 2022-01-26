<template>
  <div id="nav">
      <router-link to="/">Sign Up</router-link> | 
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

#nav a.router-link-exact-active {
  color: #ffffff;
}

#nav a:hover{
  color:rgb(38, 252, 31);
  font-weight: normal;
}
</style>
