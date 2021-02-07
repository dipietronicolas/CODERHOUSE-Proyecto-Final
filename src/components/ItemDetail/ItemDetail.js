import React, { useState, useEffect, useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

export const ItemDetail = (props) => {

  // Estado del componente
  const [stock, setStock] = useState();
  const [buyAmount, setBuyAmount] = useState();
  const [showBuyButton, setShowBuyButton] = useState(false);

  const onAdd = (counter) => {
    setBuyAmount(counter);
    setShowBuyButton(true);
  }

  useEffect(() => {
    setStock(props.item.stock);
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
          <img className="" src={props.item.pageURLBig} alt="Card cap" />
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
