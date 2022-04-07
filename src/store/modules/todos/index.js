const state = {        
    todos:[]
}

const getters = {
    Todos(state){
        return state.todos
    }
}

const actions = {
   async getTodos ({commit, rootState}){
        const token = rootState.auth.auth_token
        try{
          const url = `${this.$api}todos`
          const res = await fetch(url,{
          method:'GET',
          headers:{
            'auth_token': token
          },
          })
          const data = await res.json()
          if (data.status === 200){
              commit('SET_TODOS',data.data)
          }
          else if(data.status === 404){
            commit('RESET_TODOS')
          }
          return data
        }
        catch(err)
        {
          return err
    
        }
     }
}

const mutations = {
    SET_TODOS (state,payload){
        state.todos = payload
     },

    RESET_TODOS(state){
        state.todos.length = 0;
     }
}



export default{
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}