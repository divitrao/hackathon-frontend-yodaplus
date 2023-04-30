import {AxiosRequestHeaders} from "axios"


interface axios_headers extends AxiosRequestHeaders {
'Content-Type': 'application/json'
}

export interface axios_options{
    baseURL:string,
    timeout:number,
    headers:{'Content-Type': 'application/json'},
}


export interface login_response{
    refresh:string,
    access:string
}


export interface cred_list_res {
    credential:string
    website:string
    password:string
}