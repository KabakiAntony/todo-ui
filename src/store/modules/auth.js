const state = {
    auth_token:null,
    isLoggedIn :false,
    screen_name:null,
};
const getters = {
    AuthToken: state => state.auth_token,
    IsLoggedIn: state => state.isLoggedIn,
    ScreenName: state => state.screen_name,
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
            commit('UPDATE_SCREEN_NAME', data.data.screen_name)
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
 },
 UPDATE_SCREEN_NAME(state, payload){
   state.screen_name = payload
 }
};
export default {
  state,
  getters,
  actions,
  mutations
};
