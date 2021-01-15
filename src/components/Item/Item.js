import React from 'react';
import './Item.css';


export const Item = (props) => {
  return (
    <div className="Card">
      <img className="card-img-top" src={props.item.pageURL} alt="Card cap"></img>
      <div className='card-body'>
        <h3 className="card-title">{props.item.title}</h3>
        <p className='card-text'>{props.item.description}</p>
        <p>Price: ${props.item.price}</p>
      </div>
    </div>
  )
}
