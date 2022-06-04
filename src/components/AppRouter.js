import React, { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { BOOKS_ROUTE } from "../utils/consts";
import { Context } from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context) // авторизован пользователь или нет
    
    console.log(user)
    return ( //импорт массива с роутами и просмотр его с помощью map, вытаскиваем из объекта путь и компонент
    // если пользователь авторизован и компонент найден код выполняется
        <Switch> 
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )} 
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/> //для публичных роутов маршруты отрабатывают
            )}
            <Redirect to={BOOKS_ROUTE}/> 
        </Switch>
        //если не отрабатывают никакой из маршрутов - идет редирект на страницу с книгами
    );
});

export default AppRouter;