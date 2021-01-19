import React from 'react';
import './ItemListContainer.css';
//import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = (props) => {

  const items = [
    {
      id: 'kjdnckcdnsk6594665',
      title: 'Item01',
      description: 'Espacio reservado para colocar alguna descripcion del producto',
      price: 5600,
      stock: 5,
      pageURL: 'https://picsum.photos/150/150?random=1',
      pageURLBig: 'https://picsum.photos/300/300?random=1'
    },
    {
      id: 'jjccjdsjcd516846',
      title: 'Item02',
      description: 'Alguna descripcion aqui',
      price: 3450,
      stock: 1,
      pageURL: 'https://picsum.photos/150/150?random=2',
      pageURLBig: 'https://picsum.photos/300/300?random=2'
    },
    {
      id: 'dcajdcsdcjn651656',
      title: 'Item03',
      description: 'Alguna descripcion aqui',
      price: 10500,
      stock: 0,
      pageURL: 'https://picsum.photos/150/150?random=3',
      pageURLBig: 'https://picsum.photos/300/300?random=3'
    },
    {
      id: 'dskdjnskfjd65165',
      title: 'Item04',
      description: 'Alguna descripcion aqui',
      price: 2600,
      stock: 20,
      pageURL: 'https://picsum.photos/150/150?random=4',
      pageURLBig: 'https://picsum.photos/300/300?random=4'
    },
    {
      id: 'mwdijfcaiw6516156151',
      title: 'Item05',
      description: 'Alguna descripcion aqui',
      price: 1060,
      stock: 10,
      pageURL: 'https://picsum.photos/150/150?random=5',
      pageURLBig: 'https://picsum.photos/300/300?random=5'
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