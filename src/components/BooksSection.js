import { React } from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import RenderBook from './renderBook';

const Books = () => {
  const booksColl = useSelector((state) => state.booksReducer);

  return (
    <>
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
