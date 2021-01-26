import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = (props) => {

  const [stock, setStock] = useState();
  const [buyAmount, setBuyAmount] = useState();
  const [showBuyButton, setShowBuyButton] = useState(false);

  const onAdd = (counter) => {
    console.log(`Productos ${counter}`);
    setBuyAmount(counter);
    setShowBuyButton(true);
  }

  useEffect(() => {
    setStock(props.item.stock);
  }, [props]);

  return (
    <div className="item-detail">
      <div className="item-detail-box">
        <div className="return-button-container">
          <Link
            to={'/'}
            className="return-button">
            Volver al listado
          </Link>
        </div>
        <div className="img-container">
          <img className="" src={props.item.pageURLBig} alt="Card cap" />
        </div>
        <div className="item-description-container">
          <h1>{props.item.title}</h1>
          <p className=''>{props.item.description}</p>
          <p>Precio: ${props.item.price}</p>
          {
            showBuyButton
              ?
              <div className="buy-button-container">
                <div className="buy-button-title">
                  <p>{props.item.title}</p>
                  <p>Cantidad: {buyAmount}</p>
                </div>
                <Link 
                  to="/cart/"
                  className="buy-button">Comprar</Link>
                <button
                  className="buy-button-cancel"
                  onClick={() => setShowBuyButton(false)}>Cancelar</button>
              </div>
              :
              <ItemCount
                product={props.item.title}
                stock={stock}
                initial={1}
                onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  )
}
