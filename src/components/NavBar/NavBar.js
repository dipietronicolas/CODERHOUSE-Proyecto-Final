import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { Link } from 'react-router-dom';


export const NavBar = (props) => {

  const [categories, setCategories] = useState();

  const handleNavbar = () => {
    const navbar = document.querySelector('.Navbar-nav');
    console.log(navbar.classList.toggle('Navbar-active'));
  }

  useEffect(()=>{
    let filteredCategories = [];
    for (const item of props.items) {
      const itemCategory = item.category;
      if(filteredCategories.indexOf(itemCategory) === -1){
        filteredCategories.push(itemCategory);
      }
    }
    filteredCategories = filteredCategories.map((item, index) => {
      return <li key={index}><Link to={`/category/${item}`} className="dropdown-link">{item}</Link></li>
      
    })
    setCategories(filteredCategories);
  }, [props]);

  return (
    <nav className="Navbar">
      <div className="Navbar-brand-container">
        <h3 className="Navbar-brand">
            <Link to={'/'} className="Navbar-brand">
              TIENDA ONLINE
            </Link>
        </h3>

        <div className="Navbar-dropdown">
          <button className="dropdown-button">CATEGORIAS <i className="fas fa-caret-down"></i></button>
          <ul>
            {
              categories && categories
            }
          </ul>
        </div>
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


