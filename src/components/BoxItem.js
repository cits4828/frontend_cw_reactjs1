import React, { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
//import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import boxes from '../assets/boxes.png'
import ReceiveBox from '../components/modals/ReceiveBox';

//import { BOOKPAGE_ROUTE } from "../utils/consts";

const BoxItem = ({ box }) => {
    // два состояния, отвечающие за то, видим ли мы модокно или нет
    //const [boxVisible, setBookVisible] = useState(false)
    const [boxVisible, setBoxVisible] = useState(false)

    const history = useHistory() // динамическое передвижение по страницам
    console.log(history)
    // отрисовка элемента, картинка, текст
    return (
        <Container>
            <Row className="d-flex flex-column">
                <Col>
                    <Card>
                        <div className="text-block-50 p-5">
                            <h3>Что такое индивидуальный бокс?</h3>
                            Бокс на складе индивидуального хранения – это комната, ячейка с дверью. Стены бокса сделаны из профлиста очень прочный материал. Дверь бокса также металлическая и закрывается на замок клиента. Когда клиент арендует бокс, доступ к хранящимся вещам в нем есть только у клиента.
                            <br />
                            При необходимости в боксе можно установить стеллажи, провести освещение, установить розетки. Бокс можно использовать не только как склад, но и как мини-офис установив там стол и стул.
                        </div>
                    </Card>
                </Col>
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <Image fluid src={boxes} />
                    </div>
                </Col>
            </Row>
            <Row className="d-flex flex-column justify-content-between align-items-center">
                <Button variant="outline-info" className="mt-4 p-2" size="lg" onClick={() => setBoxVisible(true)}>Заказать бокс!</Button>
                <ReceiveBox show={boxVisible} onHide={() => setBoxVisible(false)}/>
            </Row>
        </Container>
        // <Col md={3} className="mt-5" onClick={() => history.push(BOOKPAGE_ROUTE + '/' + book.id)}>
        //     <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
        //         <Image width={150} height={200} src={book.img}/>
        //         <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
        //             <div>Кол: {book.quantity}</div>
        //             <div className="d-flex align-items-center">
        //                 <div>{book.price}</div>
        //             </div>


        //         </div>
        //         <div>{book.title}</div>
        //     </Card>
        // </Col>
    );
};

export default BoxItem;