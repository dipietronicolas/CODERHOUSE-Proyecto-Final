import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';

export const ItemDetailContainer = () => {

  const [itemDetail, setItemDetail] = useState();
  let { id } = useParams();
  
  // Efecto que busca un item por ID.
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    const item = itemsCollection.doc(id);

    item.get().then((doc) => {
      if(!doc.exists){
        console.log("Sin resultados");
        return;
      }
      setItemDetail(<ItemDetail item={{
        id: doc.id,
        ...doc.data()
      }} />);
    }).catch((error) => console.log("error"))

  }, [id]);

  

  return (
    <div className="item-detail-container">
      
      {
        itemDetail && itemDetail
      }
    </div>
  )
}
