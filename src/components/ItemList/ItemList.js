import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Item } from '../Item/Item';


export const ItemList = (props) => {

  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    let array = []
    new Promise((resolve, reject) => {
      setTimeout(() => {
        for (const it of props.items) {
          array.push(<Item item={it} key={it.id} />)
        }
        resolve(setItemsArray(array));
      }, 2000)
    })
  }, [props.items])

  return (
    <div className="item-list-container">
      <div className='item-list-title-container'>
        <h3 className='item-list-title'>Lista de Productos</h3>
      </div>
      <div className='item-list'>
        {
          itemsArray.map((item) => {
            return item;
          })
        }
      </div>
    </div>
  )
}
