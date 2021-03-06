import { React } from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import RenderBook from './renderBook';
import './booksSection.css';

const Books = () => {
  const booksColl = useSelector((state) => state.booksReducer);

  return (
    <>
      <ul className="books-container">
        {booksColl.map((book) => (
          <RenderBook
            key={book.id}
            title={book.title}
            category={book.category}
            id={book.id}
          />
        ))}
      </ul>
      <hr className="separator" />
      <AddBook />
    </>
  );
};

export default Books;
