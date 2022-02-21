const state = {
    todos:[]
  };
  const getters = {
    Files: state => state.files
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
        return data
   },
  };
  const mutations = {
    UPDATE_TODOS(state,payload){
      state.files = payload
   }
  };
  export default {
    state,
    getters,
    actions,
    mutations
  };
  