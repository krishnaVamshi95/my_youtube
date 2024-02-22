import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{

    },
    reducers:{
        addSerchSuggestions:(state,action)=>{
            return {...state,...action.payload}
        }
    }
});

export const {addSerchSuggestions} = searchSlice.actions;
export default searchSlice.reducer