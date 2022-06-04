import React, { useContext, useEffect, useState } from "react";
import { Form, Modal, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from "../..";
import { BOOKPAGE_ROUTE } from "../../utils/consts";

const ShowBookmarks = ({ show, onHide }) => {
    const { book } = useContext(Context) // получаем bookStore, c помощью хука
    const history = useHistory() // динамическое передвижение по страницам
    const [bookmarks, setBookmarks] = useState(
        JSON.parse(localStorage.getItem('bookmarks')) || []
    );
    const [bookmark, setBookmark] = useState('');
    console.log(bookmarks)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Мое избранное
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Наименование книги</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {/* {book.bookMarks.map(bookmark => { */}
                            {bookmarks.map((bookmark, index) => {
                                return (
                                    <tr>
                                        <td>{`${index+1}`}</td>
                                        <td>{`${bookmark.bookmark.title}`}</td>
                                        <td><Button
                                            className={"mr-2 btn-sm"}

                                            onClick={() => history.push(BOOKPAGE_ROUTE + '/' + bookmark.bookmark.id)}
                                        >
                                            Посмотреть
                                        </Button>   </td>
                                        
                                    </tr>
                                )
                                
                                
                            })}
                        
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                {/* <Button variant="outline-success" onClick={onHide}>Добавить</Button> */}
            </Modal.Footer>
        </Modal>
    );
};

export default ShowBookmarks;