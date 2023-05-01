import { API_ENDPOINTS } from "../config/api";
import { client } from "./axiosClient";
import axios from "axios";


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


export const  website_url =async  <T>(website_url: string): Promise<T>=> {
    const { data } = await axios.get(`${API_ENDPOINTS.WEBSITE_ICON_URL}?url=${website_url}`)
    return data
}

export const add_credentials = (credential:string,website:string,password1:string,password2:string)=>{
    return client.post(
        API_ENDPOINTS.CREATE_AND_GET_CREDENTIAL,
        {credential,website,password1,password2},
        {authorization:true}
    )
}