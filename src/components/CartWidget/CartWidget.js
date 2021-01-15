import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import './CartWidget.css';

export const CartWidget = () => {

    return (
        <React.Fragment>
            <li className="Navbar-item" id='cart-icon'><i className="fas fa-shopping-cart"></i></li>
        </React.Fragment>
    )
}