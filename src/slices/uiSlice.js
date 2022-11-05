import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    height: window.innerHeight <= 600 ? window.innerHeight : "100vh",
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setHeight: (state, action) => {
            state.height = action.payload
        }
    }
})

export const { setLoading, setHeight } = uiSlice.actions

export default uiSlice.reducer