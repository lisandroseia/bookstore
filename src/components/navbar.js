import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'boxicons';

const NavBar = () => (
  <main>
    <div className="main">
      <div className="nav-container">
        <h1>Bookstore</h1>

        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                books
              </Link>
            </li>
            <li>
              <Link className="link cat" to="categories">
                categories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <box-icon className="user" name="user-circle" />
    </div>
  </main>
);

export default NavBar;
