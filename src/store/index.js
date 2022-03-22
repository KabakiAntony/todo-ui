import { createStore } from "vuex";
import auth from './modules/auth';
import todos from './modules/todos';
import VuexPersistence from 'vuex-persist'

const store = createStore({
  modules: {
    auth,
    todos
    },
  plugins: [new VuexPersistence().plugin],
});


export default store