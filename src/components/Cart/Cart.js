import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';


export const Cart = () => {

  const { data, clear } = useContext(CartContext);
  

  return (
    <div className="Cart-container">
      <div className="Cart">
        <div className="cart-return-button-container">
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
                <h5>Total: </h5><h4 style={{ marginLeft: "1rem" }}>
                  {
                    <NumberFormat value={
                      data.map((obj) => {
                        return obj.item.price * obj.amount;
                      }).reduce((x, y) => {
                        return (x + y)
                      }).toFixed(2)
                    } displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  }
                </h4>
              </div>
              <div className="cart-button-container">
                {/*<button
                  className="cart-button btn-yellow">Finalizar Compra</button>
                */}
                <Link to='/checkout/' className="cart-button btn-yellow" style={{ textDecoration: 'none'}}>
                  Continuar
                </Link>
                <button
                  className="cart-clear-button"
                  onClick={() => clear()}>Borrar Carrito</button>
              </div>
            </div>
            : <h4>No tienes productos en tu carrito.</h4>
        }

      </div>
    </div>
  )
}
