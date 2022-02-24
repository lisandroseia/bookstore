import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookToApi } from '../redux/books/books';

const categories = ['select category', 'science', 'biography', 'action', 'romance'];

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
    if (title !== '' && category !== 'select category' && category !== '') {
      dispatch(addBookToApi(newBook));
      setTitle('');
      setCategory('select category');
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
      <select
        value={category}
        onChange={({ target }) => {
          setCategory(target.value);
        }}
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button type="submit">submit</button>
    </form>
  );
};

export default AddBook;
