import React, { useState, useContext } from 'react';
import { CheckoutCartList } from '../CheckoutCartList/CheckoutCartList';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/firebase';
import './CheckoutForm.css';

export const CheckoutForm = () => {

  const { data } = useContext(CartContext);

  const [datos, setDatos] = useState({
    buyer_name: '',
    buyer_phone: '',
    buyer_email: ''
  })

  const [order, setOrder] = useState({})

  const handleInput = e => {
    //console.log(`${e.target.name}: ${e.target.value}`);

    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const firebase = getFirestore();
    const cartItems = data.map((item) => {
      return {
        id: item.item.id,
        title: item.item.title,
        price: item.item.price,
        quantity: item.amount
      }
    })
    const total = data
      .map((obj) => {
        return obj.item.price * obj.amount;
      }).reduce((x, y) => {
        return (x + y)
      }).toFixed(2);

    const new_order = {
      buyer: {
        name: datos.buyer_name,
        phone: datos.buyer_phone,
        email: datos.buyer_email
      },
      items: cartItems,
      total:total
    }

    setOrder(new_order);
    /*
    console.log(datos.buyer_name);
    console.log(datos.buyer_phone);
    console.log(datos.buyer_email);
    */
  }

  return (
    <div className="checkout-form-container">

      <div className='checkout-form-header'>
        <h3 className='checkout-form-title'>Datos del comprador</h3>
      </div>

      <div className="checkout-box">
        <CheckoutCartList />
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-form-input-container">
            <label htmlFor="buyer_name" className="checkout-form-label">Nombre y Apellido</label>
            <input
              onChange={handleInput}
              name="buyer_name"
              type="text"
              placeholder="Nombre"
              className="checkout-input" autoFocus />
          </div>

          <div className="checkout-form-input-container">
            <label htmlFor="buyer_phone" className="checkout-form-label">Telefono </label>
            <input
              onChange={handleInput}
              name="buyer_phone"
              type="text"
              placeholder="011 5823 XXXX"
              className="checkout-input" />
          </div>

          <div className="checkout-form-input-container">
            <label htmlFor="buyer_email" className="checkout-form-label">Email </label>
            <input
              onChange={handleInput}
              name="buyer_email"
              type="email"
              placeholder="Ejemplo: xxx@mail.com"
              className="checkout-input" />
          </div>

          <div className="checkout-submit-container">
            <button
              type="submit"
              className="cart-button btn-yellow">Finalizar Compra</button>
          </div>

        </form>
      </div>
    </div>
  )
}
