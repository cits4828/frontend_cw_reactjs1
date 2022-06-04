import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


const About = () => {
    
    return (
        <Container className="d-flex flex-column">
            <Row>
                <Col>
                    <Card>
                        <div className="text-block-50 p-5">
                            <h3>О нас</h3>
                            
                            <br />
                            Курсовой проект студента группы ИКБО-02-19 Золотухина Святослава.
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;