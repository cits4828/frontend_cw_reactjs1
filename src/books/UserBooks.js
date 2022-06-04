import {makeAutoObservable} from "mobx";

export default class UserBooks { // экспорт одноименного класса, работа с Mobx
    constructor(){
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this) // при изменении переменных они будут обновляться
    }

    setIsAuth(bool) { // фукнция, изменяющая состояние 
        this._isAuth = bool
    }

    //action для изменения пользователя
    setUser(user) { // фукнция, изменяющая состояние 
        this._user = user
    }

    //геттер для получения состояния
    get isAuth() {
        return this._isAuth
    }

    get User() {
        return this._user
    }
}