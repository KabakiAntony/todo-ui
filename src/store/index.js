import { createStore } from "vuex";
import auth from './modules/auth';
import todos from './modules/todos';
import VuexPersistence from 'vuex-persist'


// we can create a vuexpersisted state object
// or use it directly as  below in store
// object
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

const store = createStore({
  modules: {
    auth,
    todos
    },
  plugins: [new VuexPersistence().plugin],
});


export default store