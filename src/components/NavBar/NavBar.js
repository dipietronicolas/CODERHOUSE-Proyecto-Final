import React from 'react';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { NavBarDropdown } from '../NavBarDropdown/NavBarDropdown';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const handleNavbar = () => {
    const navbar = document.querySelector('.Navbar-nav');
    console.log(navbar.classList.toggle('Navbar-active'));
  }

  return (
    <nav className="Navbar">
      <div className="Navbar-brand-container">
        <h3 className="Navbar-brand">
            <Link to={'/'} className="Navbar-brand">
              TIENDA ONLINE
            </Link>
        </h3>
        <NavBarDropdown />
      </div>
      <ul className="Navbar-nav">
        <li className="Navbar-item"><a href="/#">INGRESAR</a></li>
        <li className="Navbar-item"><a href="/#">REGISTRARSE</a></li>
        <CartWidget />
      </ul>
      <HamburgerButton handleNavbar={handleNavbar} />
    </nav>
  )
}


