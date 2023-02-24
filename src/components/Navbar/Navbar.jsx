import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);






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
    
         
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fa-solid fa-bag-shopping"></i>
            As new 
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