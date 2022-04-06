export const getTodos =  async({commit, rootState}) =>{
    const token = rootState.auth.auth_token
    try{
      const url = 'https://ka-todos.herokuapp.com/todos'
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