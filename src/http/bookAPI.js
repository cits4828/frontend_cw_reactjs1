//реализация функций регистрации/авторизации и проверки токена на валидность

import { $authHost, $host } from "./index"; 
import jwt_decode from "jwt-decode";

export const createBox = async (box) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $authHost.post('api/boxes', box)
    return data
}

export const fetchBoxes = async () => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/boxes')
    return data
}

export const createBook = async (book) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $authHost.post('api/book', book)
    return data
}

export const updateBook = async (id, body) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $authHost({method:'PUT', url:`api/book/${id}`, data: body});
    return data
}

export const deleteBook = async (id) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $authHost({method:'DELETE', url:'api/book/'+id})
    return data
}

export const fetchBoooks = async () => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/book')
    return data
}

export const fetchOneBoook = async (id) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/book/' + id)
    return data
}

export const createApplication = async (application) => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.post('api/applications', application)
    return data
}

export const fetchApplications = async () => {
    // помещаем ответ, который будет возвращаться от сервера
    const {data} = await $host.get('api/applications')
    return data
}

// export const createApplication = async (book) => {
//     // помещаем ответ, который будет возвращаться от сервера
//     const {data} = await $authHost.post('api/application', box)
//     return data
// }

// export const fetchApplications = async () => {
//     // помещаем ответ, который будет возвращаться от сервера
//     const {data} = await $host.get('api/applications')
//     return data
// }
