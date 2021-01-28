import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

  const { data, removeItem, clear } = useContext(CartContext);


  return (
    <div className="Cart">

      <h1>Esto es el componente Cart</h1>

      {
        data.map((data) => {
          return (
            <div className="cart-item-container" key={data.item.id}>
              <p className="cart-item">
                Comprar {data.amount} {data.item.title}
                <button
                  className="cart-remove-button"
                  onClick={() => removeItem(data.item.id)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </p>
            </div>
          )
        })
      }
      <div className="cart-button-container">
        <button 
          className="cart-button btn-red" 
          onClick={() => clear()}>Borrar Carrito</button>
        <button 
          className="cart-button btn-yellow" 
          onClick={() => clear()}>Finalizar Compra</button>
      </div>
    </div>
  )
}
