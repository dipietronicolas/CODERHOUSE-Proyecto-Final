import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase'; 

export const ItemListContainer = () => {

  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection.get().then((querySnapshot) => {
      querySnapshot.size === 0 && console.log("Sin resultados!");
      setItems(querySnapshot.docs.map((doc) =>{
        return {
          id: doc.id,
          ...doc.data()
        };
      }))
    }).catch((error) => console.log("error"))
  }, [])

  return (
    <React.Fragment>
      {
        categoryId
          ? <ItemList items={items.filter((item) => {
              return item.category === categoryId;
            })} />
          : <ItemList items={items} />
      }
    </React.Fragment>
  )
}