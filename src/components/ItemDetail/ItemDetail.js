import React from 'react';
import './ItemDetail.css';

export const ItemDetail = (props) => {
  return (
    <div className="item-detail">
      <div className="item-detail-box">
        <img className="card-img-top" src={props.item.pageURLBig} alt="Card cap"></img>
        <div className='card-body'>
          <h3 className="card-title">{props.item.title}</h3>
          <p className='card-text'>{props.item.description}</p>
          <p>Precio: ${props.item.price}</p>
        </div>
      </div>
    </div>
  )
}
