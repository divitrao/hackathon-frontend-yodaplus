import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cred_list_res } from "../../../types";


interface credState {
    cred_list:cred_list_res[] | null,
    list_is_loading:boolean

}

const initialState : credState={
    cred_list: null,
    list_is_loading:true
}

interface credPayload{
    cred_list_load:cred_list_res[]
}

interface credListLoading{
    list_loading_status:boolean
}


const credentialSlice = createSlice({
    name:'credential_list',
    initialState,
    reducers:{
            storeCredentialAction:(state,action:PayloadAction<credPayload>)=>{
                state.cred_list = action.payload.cred_list_load
            },
            setListLoadingStatus:(state,action:PayloadAction<credListLoading>)=>{
                state.list_is_loading = action.payload.list_loading_status
            }
    }
})

export const {storeCredentialAction,setListLoadingStatus}  = credentialSlice.actions;
export default credentialSlice.reducer;