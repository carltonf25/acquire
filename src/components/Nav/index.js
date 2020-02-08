import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import homeIcon from '../../assets/img/home-icon.png';
import targetIcon from '../../assets/img/target-icon.png';
import createIcon from '../../assets/img/create-icon.png';

export const Nav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li><a target="blank" href="http://github.com/carltonf25/acquire">acquire</a></li>
        <li>
          <Link to="/targets">
            <img alt="home" src={homeIcon} />
          </Link>
        </li>
        <li>
          <Link to="/targets">
            <img alt="targets" src={targetIcon} />
          </Link>
        </li>
        <li>
          <Link to="/create">
            <img alt="create-target" src={createIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
