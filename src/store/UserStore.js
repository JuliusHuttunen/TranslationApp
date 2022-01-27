import { createStore } from 'redux'

export default () => {
    const UserStore = createStore((state = {
         user: {
             userName: "",
             translations: [],
         }
        }, action) => {
        switch (action.type) {
            case 'INITUSER':
                return {
                    user: {
                        userName: "NEWUSER",
                        translations: ["TEST", "TEST"]
                    }
                }
            default: {
                return state
            }
        }
    })
    return UserStore
}

