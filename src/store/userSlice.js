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
        },
        addTranslation: (state, action) => {
            state.translations.push(action.payload);
        },
        updateTranslations: (state, action) => {
            state.translations = action.payload;
        }
    },
})

export const { login, logout, addTranslation, updateTranslations } = userSlice.actions

export default userSlice.reducer