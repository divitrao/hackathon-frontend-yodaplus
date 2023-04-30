import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface authState {
    access_token:string | null
    refresh_token:string|null
}

const initialState : authState={
    access_token: null,
    refresh_token:null
}


const authSlice = createSlice({
    name:'access_token',
    initialState,
    reducers:{
            loginAction:(state,action:PayloadAction<authState>)=>{
                state.access_token = action.payload.access_token
                state.refresh_token = action.payload.refresh_token
            }
    }
})

export const {loginAction}  = authSlice.actions;
export default authSlice.reducer;