import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import BooksStore from "./books/BooksStore";
import UserBooks from "./books/UserBooks";

export const Context = createContext(null) // экспортируем createContext


// в props value передаем данные, создадим новый объект класса UserBooks
ReactDOM.render(
  <Context.Provider value={{
    user: new UserBooks(),
    book: new BooksStore()
  }}>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
);
