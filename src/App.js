import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
