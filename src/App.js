import './App.css';
//import { useEffect } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  
  const items = [
    {
      id: 'kjdnckcdnsk6594665',
      title: 'Item01',
      description: 'Espacio reservado para colocar alguna descripcion del producto',
      price: 5600,
      stock: 5,
      pageURL: 'https://picsum.photos/150/150?random=1',
      pageURLBig: 'https://picsum.photos/300/300?random=1',
      category: 'Tecnologia'
    },
    {
      id: 'jjccjdsjcd516846',
      title: 'Item02',
      description: 'Alguna descripcion aqui',
      price: 3450,
      stock: 1,
      pageURL: 'https://picsum.photos/150/150?random=2',
      pageURLBig: 'https://picsum.photos/300/300?random=2',
      category: 'Hogar y Muebles'
    },
    {
      id: 'dcajdcsdcjn651656',
      title: 'Item03',
      description: 'Alguna descripcion aqui',
      price: 10500,
      stock: 0,
      pageURL: 'https://picsum.photos/150/150?random=3',
      pageURLBig: 'https://picsum.photos/300/300?random=3',
      category: 'Vehiculos'
    },
    {
      id: 'dskdjnskfjd65165',
      title: 'Item04',
      description: 'Alguna descripcion aqui',
      price: 2600,
      stock: 20,
      pageURL: 'https://picsum.photos/150/150?random=4',
      pageURLBig: 'https://picsum.photos/300/300?random=4',
      category: 'Vehiculos'
    },
    {
      id: 'mwdijfcaiw6516156151',
      title: 'Item05',
      description: 'Alguna descripcion aqui',
      price: 1060,
      stock: 10,
      pageURL: 'https://picsum.photos/150/150?random=5',
      pageURLBig: 'https://picsum.photos/300/300?random=5',
      category: 'Inmuebles'
    },
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar items={items}/>
        <div className='home'>
          <Switch>
            <Route exact path="/">
              <ItemListContainer items={items} />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer items={items} />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer items={items} />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
