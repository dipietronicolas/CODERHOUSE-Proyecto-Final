import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

export const Cart = () => {

  const { data, clear } = useContext(CartContext);


  return (
    <div className="Cart">
      <div className="return-button-container">
        <Link
          to={'/'}
          className="return-button">
          Volver al listado
        </Link>
      </div>
      <h3>Tus productos</h3>
      <CartItem />
      {
        data.length > 0
          ?
          <div className="cart-checkout">
            <div className="cart-total-price">
              <h4>Total: $
                {
                  data.map((obj) => {
                    return obj.item.price * obj.amount;
                  }).reduce((x, y) => {

                    return (x + y)
                  })
                }
              </h4>
            </div>
            <div className="cart-button-container">
              <button
                className="cart-button btn-yellow">Finalizar Compra</button>
              <button
                className="cart-clear-button"
                onClick={() => clear()}>Borrar Carrito</button>
            </div>
          </div>
          : <h4>No tienes productos en tu carrito.</h4>
      }

    </div>
  )
}
