import { React } from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import RenderBook from './renderBook';

const Books = () => {
  const booksColl = useSelector((state) => state.booksReducer);
  return (
    <>
      <button
        type="button"
        onClick={() => booksColl.map((book) => console.log(book.title))}
      >
        log
      </button>
      <ul>
        {booksColl.map((book) => (
          <RenderBook
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Books;