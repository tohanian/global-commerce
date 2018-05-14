import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="logo-container">
          <Link to="/">
            <h1>Global Commerce</h1>
          </Link>
        </div>
        <div className="nav-menu-container">
          <ul className="nav-menu">
            <li>Property Search</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
