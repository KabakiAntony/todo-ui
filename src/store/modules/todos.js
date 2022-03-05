const state = {
    todos:[]
  };
  const getters = {
    Todos: state => state.todos
  };
  const actions = {
    async getTodos({commit}){
        const url = `${this.$api}todos`
        const res = await fetch(url,{
        method:'GET',
        headers:{
          'auth_token':this.state.auth.auth_token
        },
        })
        const data = await res.json()
        if (data.status === 200){
            commit('UPDATE_TODOS',data.data)
        }
        else if(data.status === 404){
          commit('RESET_TODOS')
        }
        return data
   },
  };
  const mutations = {
    UPDATE_TODOS(state,payload){
      state.todos = payload
   },
   RESET_TODOS(state){
      state.todos.length = 0;
   }
  };
  export default {
    state,
    getters,
    actions,
    mutations
  };
  