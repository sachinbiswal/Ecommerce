import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className={`navbarcontent ${menuOpen ? 'menu-open' : ''}`}>
        <div>
          <img
            src="https://i.pinimg.com/736x/0a/24/2a/0a242a98d4140e6c9cdc4fef6d025c74.jpg"
            alt=""
          />
        </div>
        <div className='menu-toggle' onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'animate' : ''}`}></div>
        </div>
        <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
          <li>
            <NavLink exact to='/home' activeClassName='active' onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' activeClassName='active' onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact-us' activeClassName='active' onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink style={{ color: 'red', fontSize: 'x-large' }} to='/' onClick={toggleMenu}>
              <FaPowerOff />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
