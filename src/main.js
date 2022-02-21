import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/css/style.css' /* this will be used incase I use a site style file*/

const app = createApp(App)
app.use(store).use(router).mount("#app");

// app.config.globalProperties.$api = "http://127.0.0.1:5000/"
// store.$api = "http://127.0.0.1:5000/"
app.config.globalProperties.$api = "https://ka-todos.herokuapp.com/"
store.$api = "https://ka-todos.herokuapp.com/"