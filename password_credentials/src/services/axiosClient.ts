import { createAxiosClient } from "./createAxiosClient";
import { store } from "../stores/store";
import { API_ENDPOINTS,API_CONFIG } from "../config/api";

const REFRESH_TOEKN_URL : string =  `${API_CONFIG.BASE_URL}${API_ENDPOINTS.REFRESH_TOKEN}`
const BASE_URL = `${API_CONFIG.BASE_URL}`

export interface refresh_token_response{
    accessToken: string
    refreshToken:string
}


const getCurrentAccessToken =():(string|null)=>{
    
           return store.getState().auth.access_token
    
}


const getCurrentRefreshToken =():(string|null)=>{
    
    return store.getState().auth.refresh_token

}


const setRefreshedTokens = (token:refresh_token_response):void=>{

}

const logout = async():Promise<void>=>{

}


export const client  = createAxiosClient({
    options:{
        baseURL:API_CONFIG.BASE_URL,
        timeout:300000,
        headers:{
            'Content-Type': 'application/json',
        }
    },
    getCurrentAccessToken,
    getCurrentRefreshToken,
    refreshTokenUrl: REFRESH_TOEKN_URL,
    logout,
    setRefreshedTokens
})