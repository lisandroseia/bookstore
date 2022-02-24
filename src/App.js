import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import NavBar from './components/navbar';
import Books from './components/BooksSection';
import Categories from './components/CategoriesSection';
import './App.css';
import store from './redux/configStore';
import { loadBooksFromApi } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksFromApi());
  }, []);
  return (
    <>
      <Router>
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
