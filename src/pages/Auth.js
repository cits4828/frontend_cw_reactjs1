import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Card, Container, Form, Button, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Context } from '../index';
import { login, registration } from "../http/userApi";
import { BOOKS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation() // получаем маршрут в строке запроса
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE // истина в случае совпадения маршрута с LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const click = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(BOOKS_ROUTE) // если функция успешна редирект на главную страницу
            window.location.reload();
        } catch (e) {
            alert(e.response.data.message)
        }
        
        
    }
    return (
        <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                     <Form.Control 
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form>
                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться!</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                    }
                    <Button  
                        variant={"outline-success"}
                        onClick={click}
                        >
                        {isLogin ? 'Войти' : 'Регистрация'} 
                    </Button>
                </Row>
            </Card>
        </Container>
    );
});

export default Auth;