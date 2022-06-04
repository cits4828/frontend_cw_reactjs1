import React, { useContext, useState } from 'react';

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink } from 'react-router-dom';
// import { ABOUT_ROUTE, ADMIN_ROUTE, BOOKS_ROUTE, BOXES_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useHistory } from 'react-router-dom';
import {Button} from "react-bootstrap";

import { observer } from "mobx-react-lite";
import { Context } from '../..';
import { APPLICATIONS_ROUTE, ABOUT_ROUTE, ADMIN_ROUTE, BOOKS_ROUTE, BOXES_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import CreateBook from '../modals/CreateBook';
import TrueAuth from './nav_components/trueAuth';
import FalseAuth from './nav_components/falseAuth';


const NavBar = observer(() => {
    const { user } = useContext(Context) // в зависимости от того, авторизован пользователь - navbar будет отображаться по разному
    const history = useHistory()
    const [bookVisible, setBookVisible] = useState(false)


    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="light">
            <Container>
                <NavLink style={{ color: 'white', fontSize: '20px' }} to={BOOKS_ROUTE}>SafeBooks</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto pl-5">
                    {user.User.role === "USER" && <NavLink style={{ color: 'white', display: 'block', marginLeft: '20px' }} to={BOXES_ROUTE}>Заказать бокс</NavLink>}
                        <NavLink style={{ color: 'white', display: 'block', marginLeft: '20px' }} to={ABOUT_ROUTE}>О сайте</NavLink>
                        <NavLink style={{ color: 'white', display: 'block', marginLeft: '20px' }} to={CONTACTS_ROUTE}>Контакты</NavLink>
                    </Nav>
                    <Nav>
                        {user.isAuth ?
                            <TrueAuth/>
                            :
                            <FalseAuth/>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar