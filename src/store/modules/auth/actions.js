export const signIn = async({commit}, userData) =>{
    try{
        const url = 'https://ka-todos.herokuapp.com/users/signin' 
        const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        })
        const data = await res.json()
        if (data.status === 200){
            commit('SET_AUTH_TOKEN',data.data.auth_token)
            commit('SET_SCREEN_NAME', data.data.screen_name)
            commit('SET_IS_LOGGED_IN',true)
        }
        return data
    }
    catch(err){
        let error = "The server is offline or unreachable."
        return err
    }
  }