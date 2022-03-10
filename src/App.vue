<template>
<div>
  <ul id="nav">
    <li class="logo">Todos App</li>
      <div class="nav-right">
        <li v-if="isLoggedIn">
          <router-link :to="{ name: 'Dashboard' }">Hello {{ screen_name }}</router-link>
          <a  class="signout" @click="signOut">Sign Out</a>
        </li>
        <li v-else>
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> 
          <router-link :to="{name: 'SignIn' }">Sign In</router-link>
        </li>
      </div>
    </ul>
  <router-view/>
  <footer>
    <p>&copy; Todo APP 2022&nbsp;&nbsp;<a href="https://twitter.com/kabakikiarie">find the developer here.</a></p>
  </footer>
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
