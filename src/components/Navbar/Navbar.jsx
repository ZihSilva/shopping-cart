import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from '../Dropdown/Dropdown.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className="items">
          <li className='nav-item'>
            <Link to='/' className='nav-links' 
            onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
          </div>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {dropdown}
          </li>
         
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fa-solid fa-bag-shopping"></i>
            Minimalist Shop
          </Link>
          <div className="icons">
          <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links-icon'
              onClick={closeMobileMenu}
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/cart'
              className='nav-links-icon'
              onClick={closeMobileMenu}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              </Link>
          </li>
          </div>
        </ul>
    
      </nav>
    </>
  );
}

export default Navbar;