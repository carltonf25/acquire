import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/targets">Targets</Link>
        </li>
        <li>
          <Link to="/create">Create Target</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
