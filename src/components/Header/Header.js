import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>txtSmart</h1>
    </div>
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/mytexts">My Texts</NavLink>
      <NavLink to="/community">Community</NavLink>
    </nav>
  </header>
);

export default Header;
