import React from 'react';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';

export const NavBar = () => {

  const handleNavbar = () => {
    const navbar = document.querySelector('.Navbar-nav');
    console.log(navbar.classList.toggle('Navbar-active'));
  }

  return (
    <nav className="Navbar">
      <div className="Navbar-brand-container">
        <h3 className="Navbar-brand">
          TIENDA ONLINE
        </h3>
        
        <div className="Navbar-dropdown">
          <button className="dropdown-button">CATEGORIAS <i className="fas fa-caret-down"></i></button>
          <ul>
            <li><a href="/#">Vehiculos</a></li>
            <li><a href="/#">Inmuebles</a></li>
            <li><a href="/#">Tecnologia</a></li>
            <li><a href="/#">Hogar y Muebles</a></li>
          </ul>
        </div>
      </div>
      <ul className="Navbar-nav">
        <li className="Navbar-item"><a href="/#">INGRESAR</a></li>
        <li className="Navbar-item"><a href="/#">REGISTRARSE</a></li>
        <CartWidget />
      </ul>
      <HamburgerButton handleNavbar={handleNavbar}/>
    </nav>
  )
}


