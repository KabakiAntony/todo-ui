import auth  from '../../src/store/modules/auth'
import todos from '../../src/store/modules/todos'
// import axios from 'axios'

console.log(process.env.VUE_APP_TESTING_TOKEN)

describe('auth mutations', ()=>{
    it('sets auth token',()=>{
        const token = process.env.VUE_APP_TESTING_TOKEN
                
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

describe('auth getters', ()=>{
    it('test getting auth token',()=>{
        const state = {
            auth_token:process.env.VUE_APP_TESTING_TOKEN
        }

        const result = auth.getters.AuthToken(state)

        expect(result).toEqual(process.env.VUE_APP_TESTING_TOKEN)
    })

    it('test getting logged in state',()=>{
        const state = {
            isLoggedIn :false,
        }

        const result = auth.getters.IsLoggedIn(state)

        expect(result).toEqual(false)
    })

    it('test getting screen name',()=>{
        const state = {
            screen_name:"alba",
        }

        const result = auth.getters.ScreenName(state)

        expect(result).toEqual("alba")
    })
})

describe('todo getters', ()=>{
    it('test getting todos', ()=>{
        const state = {
            todos:[{
                "text":"todo one",
                "id":1
            }]
        }
        const result = todos.getters.Todos(state)

        expect(result).toEqual([{
            "text":"todo one",
            "id":1
        }])
    })
})

// describe('sign in', ()=>{
//     let url = ''
//     let body = {}

//     jest.mock("axios", () => ({
//     post: (_url, _body) => { 
//         return new Promise((resolve) => {
//         url = _url
//         body = _body
//         resolve(true)
//         })
//     }
//     }))


//     it("signing a user", async ()=>{
//         const commit = jest.fn()
//         const userdata = {
//             "email":"test@email.com",
//             "password":"passwordemaildata"
//         }

//         await auth.actions.signIn({ commit }, userdata)

//         expect(url).toBe("/users/signin")
//         expect(body).toEqual(userdata)
//         expect(commit).toHaveBeenCalledWith(
//             'SET_IS_LOGGED_IN',true
//         )
//     })
// })