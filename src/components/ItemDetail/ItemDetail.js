import React from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = (props) => {

  
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
          <ItemCount
            product={props.item.title}
            stock={props.item.stock}
            initial={1} />
        </div>
      </div>
    </div>
  )
}
