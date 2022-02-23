import { useDispatch } from 'react-redux';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kpaI0HlFtCFYDOoa0weU/books/';

const initialState = [];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBookToApi = (payload) => {
  return function (dispatch, getState) {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: payload.title,
        category: payload.category,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }).then(dispatch(addBook(payload)));
  };
};

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const removeBookFromApi = (id) => {
  return function (dispatch) {
    const removeUrl = url + id;
    fetch(removeUrl, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'content-type': 'application/json',
      },
    }).then(dispatch(removeBook(id)));
  };
};

export const loadBooksFromApi = () => {
  return function (dispatch) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const arr = Object.keys(data);
        arr.forEach((item) => console.log({ id: item, ...data[item][0] }));
        arr.forEach((item) =>
          dispatch(addBook({ id: item, ...data[item][0] }))
        );
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
