import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Context } from "../..";
import { createApplication, createBox, fetchBoxes } from "../../http/bookAPI";

const ReceiveBox = observer(({ show, onHide }) => {
    const {book} = useContext(Context)
    // const [box_size, setBoxSize] = useState(null)
    // const [location, setBoxLocation] = useState(null)
    const [fio, setFIO] = useState('')
    const [email, setEmail] = useState('')
    //console.log("Локация: " + location)
    useEffect(() => {
        fetchBoxes().then(data => book.setBoxes(data))
    }, [])

    //добавляем запись в бд
    const addApplication = () => {
        const formData = new FormData()
        formData.append('fio', fio)
        formData.append('email', email)
        formData.append('boxId', book.selectedBox.id)
        createApplication(formData).then(data => onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Заказ бокса
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{"Выберите бокс"}</Dropdown.Toggle>
                        
                        <DropdownMenu>
                            {book.boxes.map(box =>
                                <Dropdown.Item onClick={() => book.setSelectedBox(box)} key={box.id}>{box.id} - {box.box_size} - {box.location} - {box.price}</Dropdown.Item>
                            )}
                        </DropdownMenu>
                        {book.selectedBox.id >=1 && " Вы выбрали " + book.selectedBox.id + "-ый бокс"}
                   </Dropdown>
                   {/* <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{book.selectedBox.location || "Выберите локацию"}</Dropdown.Toggle>
                        <DropdownMenu>
                            {book.boxes.map(box =>
                                <Dropdown.Item onClick={() => book.setSelectedBox(box)} key={box.id}>{box.location}</Dropdown.Item>
                            )}
                        </DropdownMenu>
                   </Dropdown> */}
                   <Form.Control
                        value={fio}
                        onChange={e => setFIO(e.target.value)}
                        className="mt-3"
                        placeholder="Введите Ваше ФИО"
                   />
                   <Form.Control
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите Ваш E-mail"
                        type="email"
                   />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addApplication}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ReceiveBox;