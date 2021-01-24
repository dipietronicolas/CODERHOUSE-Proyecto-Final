import React, { useEffect } from 'react';
import './ItemListContainer.css';
//import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {

  const { categoryId } = useParams();

  useEffect(() => {

  })

  return (
    <React.Fragment>
      {
        categoryId
          ? <ItemList items={props.items.filter((item) => {
              return item.category === categoryId;
            })} />
          : <ItemList items={props.items} />
      }
      
      
    </React.Fragment>
  )
}