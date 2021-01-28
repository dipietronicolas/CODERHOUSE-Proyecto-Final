import React from 'react';
import './CartBadge.css';

export const CartBadge = ({ amount }) => {
    return (
        <div className="cart-badge">
            {amount}
        </div>
    )
}
