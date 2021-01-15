import React from 'react';
import './ItemListContainer.css';
//import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = (props) => {

  const items = [
    {
      id: 'kjdnckcdnsk6594665',
      title: 'Item01',
      description: 'Alguna descripcion aqui',
      price: 5600,
      pageURL: 'https://picsum.photos/150/150?random=1'
    },
    {
      id: 'jjccjdsjcd516846',
      title: 'Item02',
      description: 'Alguna descripcion aqui',
      price: 3450,
      pageURL: 'https://picsum.photos/150/150?random=2'
    },
    {
      id: 'dcajdcsdcjn651656',
      title: 'Item03',
      description: 'Alguna descripcion aqui',
      price: 10500,
      pageURL: 'https://picsum.photos/150/150?random=3'
    },
    {
      id: 'dskdjnskfjd65165',
      title: 'Item04',
      description: 'Alguna descripcion aqui',
      price: 2600,
      pageURL: 'https://picsum.photos/150/150?random=4'
    },
    {
      id: 'mwdijfcaiw6516156151',
      title: 'Item05',
      description: 'Alguna descripcion aqui',
      price: 1060,
      pageURL: 'https://picsum.photos/150/150?random=5'
    },
  ]

  return (
    <React.Fragment>
      
      <ItemList items={items} />
      {/* 
        <ItemCount 
            product="Camisa Tiger" 
            stock="5" 
            initial={1} />
        */}
    </React.Fragment>
  )
}