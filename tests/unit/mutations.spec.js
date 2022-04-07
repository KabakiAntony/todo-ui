import auth  from '../../src/store/modules/auth'
import todos  from '../../src/store/modules/todos'

describe('auth mutations', ()=>{
    it('sets auth token',()=>{
        const token = "49urjewsgniwp054wtt"
                
        const state = {
            auth_token:null,
        }
    auth.mutations.SET_AUTH_TOKEN(state, token)

    expect(state).toEqual({
        auth_token:token
    })
    })

    it('set logged in state', ()=>{
        const is_logged_in = true
        const state = {
            isLoggedIn :false,
        }
        auth.mutations.SET_IS_LOGGED_IN(state, is_logged_in)

        expect(state).toEqual({
            isLoggedIn:is_logged_in
        })
    })

    it('set screen name', ()=>{
        const screenName = "shaun"
        const state = {
            screen_name:null,
        }
        auth.mutations.SET_SCREEN_NAME(state, screenName)

        expect(state).toEqual({
            screen_name: screenName
        })
    })
})


describe('todos mutations', ()=>{
 it('sets todos', ()=>{
     const state = {
         todos:[]
     }
     const todo = {
         "text": "todo one",
         "id": 1,
         "completed": false
     }

     todos.mutations.SET_TODOS(state, todo)

     expect(state).toEqual({
         todos: todo
     })
 })
})

