import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
// import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
// import { Context } from '..';
import Apps from '../components/Apps';
import { fetchApplications } from '../http/bookAPI';
// import { fetchApplications } from '../http/bookAPI';

const Applications = observer(() => {
    const {user, book} = useContext(Context)
    
    //единожды при откртии страницы с книгами подгружаем массив
    useEffect(() => {
        fetchApplications().then(data => book.setApplications(data))
    }, [])
    return (
        <Container className="d-flex flex-column mt-5">
            <Row>
                <Col>
                    <h2 className="text-center">Заказы посетителей</h2>
                    <Apps/>
                </Col>
            </Row>
        </Container>
    );
});

export default Applications;