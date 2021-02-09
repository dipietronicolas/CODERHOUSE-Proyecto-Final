import React, { useContext, useState, useEffect } from 'react';
import './CartItem.css';
import { CartContext } from '../../context/CartContext';
import { CartItemCounter } from '../CartItemCounter/CartItemCounter';
import NumberFormat from 'react-number-format';
import { getStorageRef } from '../../firebase/firebase';

export const CartItem = () => {

  const { data, removeItem } = useContext(CartContext);
  const [showPic, setShowPic] = useState(false);
  const [picRef, setPicRef] = useState(null);
/*
  useEffect(() => {
    if(showPic){
      const storageRef = getStorageRef();
      const pic_name = data.item.picture;
      const final_ref = storageRef.child(pic_name);
        
      // Get the download URL
      final_ref.getDownloadURL()
        .then((url) => {
          setPicRef(url);
        }).catch((error) => {
          console.log(error);
        });
    }
  }, [showPic]);
*/
  return (
    <div className="cart-item-list">
      {
        data.map((data, index) => {
          return (
            <div className="cart-item-container" key={data.item.id}>
              <div className="cart-item-pic">
                <img src={picRef ? picRef : data.item.pageURLBig} alt="item"/>
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
