import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = (props) => {

  const [itemDetail, setItemDetail] = useState();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setItemDetail(<ItemDetail item={props.item} />));
      }, 2000)
    })
  }, [props])

  return (
    <div className="item-detail-container">
      <div className="close-button-container">
        <button className="close-button" onClick={props.handleCloseButton}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      {
        itemDetail && itemDetail
      }
    </div>
  )
}
