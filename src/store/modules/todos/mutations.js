export const SET_TODOS = (state,payload) =>{
    state.todos = payload
 }

 export const RESET_TODOS = (state) =>{
    state.todos.length = 0;
 }