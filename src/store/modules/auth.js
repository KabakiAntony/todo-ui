const state = {
    auth_token:null,
    isLoggedIn :false,
};
const getters = {
    AuthToken: state => state.auth_token,
    IsLoggedIn: state=> state.isLoggedIn
};
const actions = {
  async signIn({commit}, userData){
    try{
        const url = `${this.$api}users/signin`
        const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        })
        const data = await res.json()
        if (data.status === 200){
            commit('UPDATE_AUTH_TOKEN',data.data.auth_token)
            commit('UPDATE_IS_LOGGED_IN',true)
        }
        return data
    }
    catch(err){
        let error = "The server is offline or unreachable."
        return err
    }
  }

};
const mutations = {
  UPDATE_AUTH_TOKEN(state,payload){
    state.auth_token = payload
 },
 UPDATE_IS_LOGGED_IN(state,payload){
   state.isLoggedIn = payload
 }
};
export default {
  state,
  getters,
  actions,
  mutations
};
