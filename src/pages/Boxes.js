import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import BoxItem from '../components/BoxItem';

const Boxes = () => {

    return (
        <Container className="d-flex flex-column mt-5">
            <BoxItem />
        </Container>
    );
};

export default Boxes;