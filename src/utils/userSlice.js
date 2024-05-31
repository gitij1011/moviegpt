import { createSlice } from "@reduxjs/toolkit";
// creating a userslice for appstore with actions addusers and remove users
const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUsers:(state,action)=>{
            return action.payload;
        },
        removeUsers:(state,action)=>{
           return null;
        }
    }
})

export const{addUsers,removeUsers}=userSlice.actions;
export default userSlice.reducer;