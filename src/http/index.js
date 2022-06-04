import axios from "axios";

//для обычных запросов, не требующих авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//в данный запрос будет автоматически подставляться header auth
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL // передаем системную переменную
})

//в случае системного инстанса нужно автоматически подставлять токен
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor) // отрабатвыает перед каждым запросом

export {
    $host,
    $authHost
}