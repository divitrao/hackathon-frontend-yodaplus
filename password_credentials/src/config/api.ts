interface API_BASE_INTERFACE {
    BASE_URL : string
}

export const API_CONFIG:API_BASE_INTERFACE = {
    BASE_URL : 'http://127.0.0.1:8000/'
}


export const API_ENDPOINTS:Object = {
    LOGIN:()=>'user/login/',
    REGISTER:()=>'user/register',
    REFRESH_TOKEN:()=>'user/token/refresh/',
    CREATE_AND_GET_CREDENTIAL:()=>'credential/create_get/'
}