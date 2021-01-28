import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartBadge } from '../CartBadge/CartBadge';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import './CartWidget.css';


export const CartWidget = () => {

  const { data } = useContext(CartContext);



  return (
    <React.Fragment>
      <li className="Navbar-item" id='cart-icon'>
        <Link to={"/cart/"}>
          <i className="fas fa-shopping-cart"></i>
          {
            data.length > 0 && <CartBadge amount={data.length} />
          }
        </Link>
      </li>
    </React.Fragment>
  )
}