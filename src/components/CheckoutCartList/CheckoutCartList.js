import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import NumberFormat from 'react-number-format';
import './CheckoutCartList.css';

export const CheckoutCartList = () => {

  const { data } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(data.map((data) => {
      return data.item.price * data.amount
    }).reduce((x, y) => {
      return x + y;
    }))
  }, [data])

  return (
    <div className="checkout-cart-container">
      {
        data.map((data) => {
          return (
            <div className="checkout-cart-item" key={data.item.id}>
              <strong>{data.item.title}</strong>
              <p>{data.amount} x <NumberFormat value={(data.item.price * data.amount).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            </div>
          )
        })
      }
      <h3>Total: <NumberFormat value={total.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h3>
    </div>
  )
}
