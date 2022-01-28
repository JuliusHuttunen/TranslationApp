import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "",
        translations: [],
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = {
                username: "",
                translations: []
            }
        }
    },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer