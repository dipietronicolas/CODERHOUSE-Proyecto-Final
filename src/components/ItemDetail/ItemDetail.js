import React from 'react';
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = (props) => {
  return (
    <div className="item-detail">
      <div className="item-detail-box">
        <img className="card-img-top" src={props.item.pageURLBig} alt="Card cap"></img>
        <div className='card-body d-flex justify-content-center flex-column align-items-center'>
          <p className='card-text'>{props.item.description}</p>
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
