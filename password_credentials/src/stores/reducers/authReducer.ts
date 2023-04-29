import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface authState {
    access_token:string | null
}

const initialState : authState={
    access_token: null
}


const authSlice = createSlice({
    name:'access_token',
    initialState,
    reducers:{
            login:(state,action:PayloadAction<authState>)=>{
                state.access_token = action.payload.access_token
            }
    }
})

export const {login}  = authSlice.actions;
export default authSlice.reducer;