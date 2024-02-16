import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        isPopularVideos:null
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
        }
    }
});

export const {toggleMenu,addPopularVideos,closeMenu} = appSlice.actions;
export default appSlice.reducer