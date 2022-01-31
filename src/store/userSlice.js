import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "",
        translations: [],
        id: ""
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username
            state.translations = action.payload.translations
            state.id = action.payload.id
        },
        logout: (state) => {
            state.username = ""
            state.translations = []
            state.id = ""
        }
    },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer