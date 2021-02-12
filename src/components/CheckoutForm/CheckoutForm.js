import React, { useState, useContext } from 'react';
import { CheckoutCartList } from '../CheckoutCartList/CheckoutCartList';
import { CartContext } from '../../context/CartContext';
//firebase
import firebase from 'firebase';
import { getFirestore } from '../../firebase/firebase';
import { getTimestamp } from '../../firebase/firebase';
//react-router
import { Link } from 'react-router-dom';
//Css
import './CheckoutForm.css';

export const CheckoutForm = () => {

  const { data, clear } = useContext(CartContext);

  const [datos, setDatos] = useState({
    buyer_name: '',
    buyer_phone: '',
    buyer_email: ''
  })

  // eslint-disable-next-line
  const [orderId, setOrderId] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleInput = e => {
    //console.log(`${e.target.name}: ${e.target.value}`);

    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orders = db.collection("orders");
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
      date: getTimestamp().toDate(),
      total: total
    }
    
    orders.add(new_order)
      .then(({ id }) => {
        setOrderId(id); //SUCCESS
      }).catch((err) => {
        console.log(err);
      })

    // aca hago el update del stock  
    updateItemsDatabaseStock(new_order);
  }

  const updateItemsDatabaseStock = async ({ items }) => {
    const db = getFirestore();
    const itemsToUpdate = db.collection("items")
      .where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.id));

    const query = await itemsToUpdate.get();
    const batch = db.batch();

    const outOfStock = [];
    query.docs.forEach((docSnapshot, idx) => {
      if (docSnapshot.data().stock >= items[idx].quantity) {
        batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].quantity });
      } else {
        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
      }
    })

    if (outOfStock.length === 0) {
      await batch.commit();
      setTimeout(() => {
        setRedirect(true);
        clear();
      }, 200);
    }
  }


  return (
    <div className="checkout-form-container">
      <div className='checkout-form-header'>
        <h3 className='checkout-form-title'>Datos del comprador</h3>
      </div>
      {
        redirect
          ?
            <Link 
              to='/' 
              className="cart-button btn-yellow" 
              style={{ textDecoration: 'none' }}>Home</Link>
          :
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
      }
    </div>
  )
}
