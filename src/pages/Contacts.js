import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


const Contacts = () => {
    
    return (
        <Container className="d-flex flex-column">
            <Row>
                <Col>
                    <Card>
                        <div className="text-block-50 p-5">
                            <h3>Наши контакты</h3>
                            Адрес офиса: ул. Светлая, дом 41, к1.
                            <br />
                            Номер телефона: 8 495 123 55 55.
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contacts;