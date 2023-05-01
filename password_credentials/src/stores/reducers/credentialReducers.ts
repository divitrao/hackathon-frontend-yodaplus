import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cred_list_res } from "../../../types";


interface credState {
    cred_list:cred_list_res[] | null,
    list_is_loading:boolean,
    new_data_added:boolean

}

const initialState : credState={
    cred_list: null,
    list_is_loading:true,
    new_data_added:false
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
            },
            setNewDataLoaded:(state)=>{
                state.new_data_added = !state.new_data_added
            }
    }
})

export const {storeCredentialAction,setListLoadingStatus,setNewDataLoaded}  = credentialSlice.actions;
export default credentialSlice.reducer;