import React, {useContext } from 'react';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { NavBarDropdown } from '../NavBarDropdown/NavBarDropdown';
import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';

export const NavBar = ({handleSignIn}) => {

  const { currentUser, signOut } = useContext(AuthContext);
  

  const handleNavbar = () => {
    const navbar = document.querySelector('.Navbar-nav');
    navbar.classList.toggle('Navbar-active');
  }
  
  return (
    <nav className="Navbar">
      <div className="Navbar-brand-container">
        <h3 className="Navbar-brand">
            <Link to={'/'} className="Navbar-brand">
              TECNO TIENDA
            </Link>
        </h3>
        <NavBarDropdown />
      </div>
      {
        currentUser
          ? 
            <ul className="Navbar-nav">
              <li className="Navbar-item"><button>{currentUser.user.email}</button></li>
              <li className="Navbar-item"><button onClick={signOut}>CERRAR SESION</button></li>
              <CartWidget />
            </ul>
          : 
            <ul className="Navbar-nav">
              <li className="Navbar-item"><button onClick={() => handleSignIn('INGRESAR')}>INGRESAR</button></li>
              <li className="Navbar-item"><button onClick={() => handleSignIn('REGISTRARSE')}>REGISTRARSE</button></li>
              
              <CartWidget />
            </ul>
      }
      
      <HamburgerButton handleNavbar={handleNavbar} />
    </nav>
  )
}


