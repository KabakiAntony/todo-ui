import auth  from '../../src/store/modules/auth'
import todos  from '../../src/store/modules/todos'

describe('auth getters', ()=>{
    it('test getting auth token',()=>{
        const state = {
            auth_token:"r8tyw54rnwjh54sg9r9er"
        }

        const result = auth.getters.AuthToken(state)

        expect(result).toEqual("r8tyw54rnwjh54sg9r9er")
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