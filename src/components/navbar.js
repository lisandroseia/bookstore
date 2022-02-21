import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <main>
    <h1>Bookstore</h1>

    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            books
          </Link>
        </li>
        <li>
          <Link className="link" to="categories">
            categories
          </Link>
        </li>
      </ul>
    </nav>
  </main>
);

export default NavBar;
