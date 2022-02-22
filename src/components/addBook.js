import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const submitBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    if (title !== '' && author !== null) {
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form>
      <input
        onChange={({ target }) => {
          setTitle(target.value);
        }}
        type="text"
        placeholder="title"
        required
      />
      <input
        onChange={({ target }) => {
          setAuthor(target.value);
        }}
        type="text"
        placeholder="author"
        required
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          submitBook(title, author);
        }}
      >
        submit
      </button>
    </form>
  );
};

export default AddBook;
