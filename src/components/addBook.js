import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookToApi } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBook = (title, category) => {
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    if (title !== '' && category !== '') {
      dispatch(addBookToApi(newBook));
      setTitle('');
      setCategory('');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitBook(title, category);
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
          setCategory(target.value);
        }}
        type="text"
        placeholder="category"
        value={category}
        required
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddBook;
