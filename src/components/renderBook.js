import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const RenderBook = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <li>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" id={id} onClick={removeBookFromStore}>
        remove
      </button>
    </li>
  );
};

RenderBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RenderBook;
