import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        isPopularVideos:null,
        comments:null,
        chatData:[]
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu:(state,action)=>{
            state.isMenuOpen = action.payload;
        },
        addPopularVideos:(state,action)=>{
            state.isPopularVideos = action.payload
        },
        addComments:(state,action)=>{
            state.comments = action.payload
        },
        addChat:(state,action)=>{
            if(state.chatData.length>200) state.chatData.splice(1,100);
            state.chatData.push(action.payload)
        }
    }
});

export const {toggleMenu,addPopularVideos,closeMenu,addComments,addChat} = appSlice.actions;
export default appSlice.reducer