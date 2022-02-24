import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookFromApi } from '../redux/books/books';

const RenderBook = ({ title, category, id }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    dispatch(removeBookFromApi(e.target.id));
  };

  return (
    <li className="li-book">
      <div className="book-info">
        <p className="category">{category}</p>
        <h3 className="book-title">{title}</h3>
        <p className="author">Author unknown</p>
        <div className="book-options">
          <button className="btn-book" type="button">
            Comment
          </button>
          <button
            className="btn-book midle"
            type="button"
            id={id}
            onClick={removeBookFromStore}
          >
            Remove
          </button>
          <button className="btn-book" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book-circle">
        <div className="circle">
          <CircularProgressbar value={1} text="" />
        </div>
        <div>
          <p className="percentage">1%</p>
          <p className="completed">completed</p>
        </div>
      </div>
      <div className="book-progress">
        <p className="current-chapter">Current chapter</p>
        <p className="chapter">introduction</p>
        <button className="update-btn" type="button">
          Update progress
        </button>
      </div>
    </li>
  );
};

RenderBook.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RenderBook;
