import React, { useContext, useState, useEffect } from 'react';
import './CartItem.css';
import { CartContext } from '../../context/CartContext';
import { CartItemCounter } from '../CartItemCounter/CartItemCounter';
import NumberFormat from 'react-number-format';
import { getStorageRef } from '../../firebase/firebase';

export const CartItem = () => {

  const { data, removeItem } = useContext(CartContext);
  const [picRef, setPicRef] = useState([]);

  useEffect(() => {
    if (data[0] !== undefined && data !== null) {
      const storageRef = getStorageRef();
      let array_aux = [];

      const getPictures = async () => {
        for (const obj of data) {
          const pic_name = obj.item.picture;
          const final_ref = storageRef.child(pic_name);

          // Get the download URL
          const url = await final_ref.getDownloadURL();
          array_aux.push(url);
        }
        setPicRef(array_aux);
      }
      getPictures();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cart-item-list">
      {
        data.map((data, index) => {
          return (
            <div className="cart-item-container" key={data.item.id}>
              <div className="cart-item-pic">
                <img src={picRef[index]} alt="item" />
              </div>
              <div className="cart-item-name">
                <strong>{data.item.title}</strong>
                <p>x <NumberFormat value={data.item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
              </div>
              <CartItemCounter stock={data.item.stock} dataIndex={index} />
              <div className="cart-item-price">
                <NumberFormat value={(data.item.price * data.amount).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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
