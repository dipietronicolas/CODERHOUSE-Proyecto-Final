import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format';
import './CheckoutCartList.css';

export const CheckoutCartList = () => {

  const { data } = useContext(CartContext);


  return (
    <div className="checkout-cart-container">
      {
        data.map((data) => {
          return (
            <div key={data.item.id}>
              <strong>{data.item.title}</strong>
              <p>x <NumberFormat value={(data.item.price * data.amount).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            </div>
          )
        })
      }

    </div>
  )
}
