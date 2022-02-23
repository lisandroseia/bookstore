import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const RenderBook = ({ title, category, id }) => {
  const dispatch = useDispatch();
  const removeBookFromStore = (e) => {
    dispatch(removeBookFromApi(e.target.id));
  };

  return (
    <li>
      <p>{title}</p>
      <p>{category}</p>
      <button type="button" id={id} onClick={removeBookFromStore}>
        remove
      </button>
    </li>
  );
};

RenderBook.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RenderBook;
