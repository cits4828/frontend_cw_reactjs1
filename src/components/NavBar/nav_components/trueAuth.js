import {Button, Nav} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {Context} from "../../../index";
import CreateBook from "../../modals/CreateBook";
import { useHistory } from "react-router-dom";
import { APPLICATIONS_ROUTE } from "../../../utils/consts";
import { observer } from "mobx-react-lite";
import ShowBookmarks from "../../modals/ShowBookmarks";
const TrueAuth = () => {
    const {user} = useContext(Context);
    const history = useHistory()
    const [bookVisible, setBookVisible] = useState(false)
    const [bookmarksVisible, setBookmarksVisible] = useState(false)

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }
    console.log("Авторизация: " + user.isAuth)
    
    console.log(user.User.role === "ADMIN")
    console.log(user.User.role)

    return (
        <Nav className="ml-auto" style={{color: "white"}}>
            {user.isAuth && user.User.role === "ADMIN" && <Button
                className={"mr-2"}
                variant={"outline-light"}
                onClick={() => {setBookVisible(true)}}
            >
                Добавить книгу
            </Button>}
            {(user.isAuth && user.User.role === "ADMIN") && <Button
                className={"mr-2"}
                variant={"outline-light"}
                onClick={() => history.push(APPLICATIONS_ROUTE)}
            >
                Заказы
            </Button>}

            {/* {user.User.role === "USER" && <Button
                className={"mr-2"}
                variant={"outline-light"}
                onClick={() => {setBookmarksVisible(true)}}
            >
                Мое избранное
            </Button>} */}

            <Button
                variant={"outline-light"}
                className="ml-2"
                onClick={() => logOut()}
            >
                Выйти
            </Button>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            <ShowBookmarks show={bookmarksVisible} onHide={() => setBookmarksVisible(false)}/>
        </Nav>
    );
};

export default TrueAuth;