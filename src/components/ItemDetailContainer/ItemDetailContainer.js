import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = (props) => {

  const [itemDetail, setItemDetail] = useState();
  let { id } = useParams();
  
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = props.items.filter((item) => {
          return item.id === id;
        })
        resolve(setItemDetail(<ItemDetail item={item[0]} />));
      }, 2000)
    })
  }, [props, id]);

  

  return (
    <div className="item-detail-container">
      
      {
        itemDetail && itemDetail
      }
    </div>
  )
}