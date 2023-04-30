import { API_ENDPOINTS } from "../config/api";
import { client } from "./axiosClient";


export const login=(username:string,password:string)=>{
    console.log(username,password)
    return client.post(
        API_ENDPOINTS.LOGIN,
        {username,password},
        {authorization:false}
    )
}


export const credential_list = ()=>{
    return client.get(
        API_ENDPOINTS.CREATE_AND_GET_CREDENTIAL,
        {authorization:true}
    )
}