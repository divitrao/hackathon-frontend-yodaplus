interface API_BASE_INTERFACE {
    BASE_URL : string
}

interface API_ENDPOINT_INTERFACE {
    LOGIN:string,
    REGISTER:string,
    REFRESH_TOKEN:string,
    CREATE_AND_GET_CREDENTIAL:string,
    WEBSITE_ICON_URL:string
}

export const API_CONFIG:API_BASE_INTERFACE = {
    BASE_URL : 'http://10.0.2.2:8000/'
}


export const API_ENDPOINTS:API_ENDPOINT_INTERFACE = {
    LOGIN: 'user/login/',
    REGISTER: 'user/register',
    REFRESH_TOKEN:'user/token/refresh/',
    CREATE_AND_GET_CREDENTIAL:'credential/create_get/',
    WEBSITE_ICON_URL:'https://besticon-demo.herokuapp.com/allicons.json'
}