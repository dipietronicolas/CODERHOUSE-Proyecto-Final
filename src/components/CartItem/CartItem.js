import React, { useContext } from 'react';
import './CartItem.css';
import { CartContext } from '../../context/CartContext';
import { CartItemCounter } from '../CartItemCounter/CartItemCounter';
import NumberFormat from 'react-number-format';

export const CartItem = () => {

  const { data, removeItem } = useContext(CartContext);
  
  return (
    <div className="cart-item-list">
      {
        data.map((data, index) => {
          return (
            <div className="cart-item-container" key={data.item.id}>
              <div className="cart-item-pic">
                <img src={data.item.pageURLBig} alt="item"/>
              </div>
              <div className="cart-item-name">
                <strong>{data.item.title}</strong>
                <p>x <NumberFormat value={data.item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}/></p>
              </div>
              <CartItemCounter stock={data.item.stock} dataIndex={index}/>
              <div className="cart-item-price">
              <NumberFormat value={(data.item.price * data.amount).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
              </div>
              <button
                className="cart-remove-button"
                onClick={() => removeItem(data.item.id)}>
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          )
        })
      }
    </div>
  )
}
