import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './addBook';
import RenderBook from './renderBook';
import { loadBooksFromApi } from '../redux/books/books';


const Books = () => {
  const booksColl = useSelector((state) => state.booksReducer);


  return (
    <>
      <button type="button" onClick={() => console.log(booksColl)}>
        log
      </button>
      <ul>
        {booksColl.map((book) => (
          <RenderBook
            key={book.id}
            title={book.title}
            category={book.category}
            id={book.id}
          />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Books;
