import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Context } from "../..";
import { createBook } from "../../http/bookAPI";

const CreateBook = observer(({ show, onHide }) => {
    const {book} = useContext(Context)
    // создаем состояние для каждого инпута
    const [title, setTitle] = useState('')
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState('')
    const [img, setImg] = useState(null)
    
    //функция выбора файла, будет вызываться в том случае, когда выбран файл на пк
    const selectFile = e => {
        setImg(e.target.files[0])
    } 
    
    //добавление новой книги в БД
    const addBook = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('quantity', quantity)
        formData.append('price', price)
        formData.append('img', img)
        createBook(formData).then(data => onHide()) // если запрос прошел успешно - закрываем модальное окна
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
                    Добавить книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название и автора книги"
                    />
                    <Form.Control
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите количество"
                        type="number"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="mt-3"
                        placeholder="Введите стоимость"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Выберите обложку"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBook}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBook;