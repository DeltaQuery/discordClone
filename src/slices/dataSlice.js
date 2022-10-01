import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    globalUser: null,
    nickname: "",
    avatarImg: null,
    activeChannel: null,
    messageList: [],
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setGlobalUser: (state, action) => {
            state.globalUser = action.payload
        },
        setNickname: (state, action) => {
            state.nickname = action.payload
        },
        setAvatarImg: (state, action) => {
            state.avatarImg = action.payload
        },
        setActiveChannel: (state, action) => {
            state.activeChannel = action.payload
        },
        setMessageList: (state, action) => {
            state.messageList = action.payload
        }
    }
})

export const { setGlobalUser, setNickname, setAvatarImg, setActiveChannel, setMessageList } = dataSlice.actions

export default dataSlice.reducer