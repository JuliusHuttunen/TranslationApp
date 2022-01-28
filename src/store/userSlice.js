import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "",
        translations: [],
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload
        },
    },
})

export const { login } = userSlice.actions

export default userSlice.reducer