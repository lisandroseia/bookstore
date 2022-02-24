import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookToApi } from '../redux/books/books';

const categories = [
  'select category',
  'science',
  'biography',
  'action',
  'romance',
];

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
      <h2>Add new book</h2>
      <input
        onChange={({ target }) => {
          setTitle(target.value);
        }}
        type="text"
        placeholder="Book title"
        value={title}
        required
      />
      <select
        className="sel-css"
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
      <button className="submit-btn" type="submit">
        Add book
      </button>
    </form>
  );
};

export default AddBook;
