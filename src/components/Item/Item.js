import React, { useState } from 'react';
import './Item.css';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';


export const Item = (props) => {

  const [renderDetail, setRenderDetail] = useState(false);

  const handleRenderDetail = () =>{
    setRenderDetail(true);
    window.scroll(0, 0);
  }

  const handleCloseButton = () => {
    setRenderDetail(false);
  }

  return (
    <div className="Card">
      <img className="card-img-top" src={props.item.pageURLBig} alt="Card cap"></img>
      <div className='card-body px-2'>
        <h3 className="card-title">{props.item.title}</h3>
        <p>Precio: ${props.item.price}</p>
        <button 
          className="btn btn-warning"
          onClick={handleRenderDetail}>Ver detalle</button>
          {
            renderDetail && <ItemDetailContainer handleCloseButton={handleCloseButton} item={props.item}/>
          }
      </div>
    </div>
  )
}
