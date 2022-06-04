import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { BOOKPAGE_ROUTE } from "../utils/consts";

const BookItem = ({ book }) => {
    const history = useHistory() // динамическое передвижение по страницам

    // отрисовка элемента, картинка, текст
    return (
        
        <Col md={3} className="mt-5">
            <Card className="text-center d-flex justify-content-between align-items-center" style={{ width: 150, cursor: 'pointer', margin: '0 auto'}} border={"light"} onClick={() => history.push(BOOKPAGE_ROUTE + '/' + book.id)}>
                <Image width={150} height={200} src={process.env.REACT_APP_API_URL + book.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Кол: {book.quantity}</div>
                </div>
                <div>{book.title}</div>
            </Card>
        </Col>
    );
};

export default BookItem;