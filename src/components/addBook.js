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
    if (title !== '' && author !== '') {
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitBook(title, author);
      }}
    >
      <input
        onChange={({ target }) => {
          setTitle(target.value);
        }}
        type="text"
        placeholder="title"
        value={title}
        required
      />
      <input
        onChange={({ target }) => {
          setAuthor(target.value);
        }}
        type="text"
        placeholder="author"
        value={author}
        required
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddBook;
