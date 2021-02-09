import React, { useState, useEffect, useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { getStorageRef } from '../../firebase/firebase';

export const ItemDetail = (props) => {

  // Estado del componente
  const [stock, setStock] = useState();
  const [buyAmount, setBuyAmount] = useState();
  const [showBuyButton, setShowBuyButton] = useState(false);
  const [picRef, setPicRef] = useState(null);

  const onAdd = (counter) => {
    setBuyAmount(counter);
    setShowBuyButton(true);
  }

  useEffect(() => {
    setStock(props.item.stock);
    if(props.item.picture){
      const storageRef = getStorageRef();
      const pic_name = props.item.picture;
      const final_ref = storageRef.child(pic_name);
        
      // Get the download URL
      final_ref.getDownloadURL()
        .then((url) => {
          setPicRef(url);
        }).catch((error) => {
          console.log(error);
        });
    }
  }, [props]);

  // Contexto de CartContext
  const { addItem } = useContext(CartContext);
  const handleContext = () => {
    const { item } = props;
    addItem(item, buyAmount);
  }


  return (
    <div className="item-detail">
      <div className='item-detail-header'>
        <h3 className='item-detail-title'>Detalle de {props.item.title}</h3>

      </div>
      <div className="item-detail-box">
        <div className="return-button-container">
          <Link
            to={'/'}
            className="return-button">
            Volver al listado
          </Link>
          <Link
            to={`/category/${props.item.category}`}
            className="return-button">
            {props.item.category}
          </Link>

        </div>
        <div className="img-container">
          <img className="item-detail-picture" src={picRef} alt="Card cap" />
        </div>
        <div className="item-description-container">
          <h1 className="item-detail-description-title">{props.item.title}</h1>
          <p className='item-detail-description'>{props.item.description}</p>
          <p className='item-detail-description negrita'>Precio:
            &nbsp;<NumberFormat value={props.item.price.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </p>
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
                  className="buy-button"
                  onClick={() => handleContext()}>Comprar</Link>
                <button
                  className="buy-button-cancel"
                  onClick={() => setShowBuyButton(false)}>Cancelar</button>
              </div>
              :
              <div className="item-detail-count-container">
                <ItemCount
                  product={props.item.title}
                  stock={stock}
                  initial={1}
                  onAdd={onAdd} />
              </div>
          }
        </div>
      </div>
    </div>
  )
}
