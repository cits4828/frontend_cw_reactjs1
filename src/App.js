import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { Context } from "./index";
import { check } from './http/userApi';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(false)// отвечает за то, идет ли загрузка страницы
  // // отправляем запрос только один раз при первом открытии приложения
  // useEffect(() => {
  //   check().then(data => {
  //     user.setUser(true)
  //     user.setIsAuth(true)
  //   }).finally(() => setLoading(false)) // если масив записимостей пустой, то функция отработает единожды при первом запуске
  // }, [])

  useEffect(() => {
    if(localStorage.getItem('token')) {
        setLoading(true);
        check().then(data => {
            user.setUser(data);
            user.setIsAuth(true);
        }).finally(() => {
            setLoading(false);
        })
    }
}, [user]);

  if (loading) {
    return <Spinner animation={"grow"} />
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;

