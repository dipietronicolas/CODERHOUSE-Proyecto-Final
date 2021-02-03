import './App.css';
import { CartDataProvider } from './context/CartContext'
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  
  const items = [
    {
      id: 'kjdnckcdnsk6594665',
      title: 'Item01',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 5600,
      stock: 5,
      pageURLBig: 'https://picsum.photos/300/300?random=1',
      category: 'Tecnologia'
    },
    {
      id: 'jjccjdsjcd516846',
      title: 'Item02',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 3450,
      stock: 1,
      pageURLBig: 'https://picsum.photos/300/300?random=2',
      category: 'Hogar y Muebles'
    },
    {
      id: 'dcajdcsdcjn651656',
      title: 'Item03',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 10500,
      stock: 0,
      pageURLBig: 'https://picsum.photos/300/300?random=3',
      category: 'Vehiculos'
    },
    {
      id: 'dskdjnskfjd65165',
      title: 'Item04',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 2600,
      stock: 20,
      pageURLBig: 'https://picsum.photos/300/300?random=4',
      category: 'Vehiculos'
    },
    {
      id: 'mwdijfcaiw6516156151',
      title: 'Item05',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 1060,
      stock: 10,
      pageURLBig: 'https://picsum.photos/300/300?random=5',
      category: 'Inmuebles'
    },
    {
      id: 'kñjncwkbjcwbe51654645',
      title: 'Item06',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 1300,
      stock: 20,
      pageURLBig: 'https://picsum.photos/300/300?random=6',
      category: 'Tecnologia'
    },
    {
      id: 'vdasbtbtrashb45457347',
      title: 'Item07',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 1100,
      stock: 13,
      pageURLBig: 'https://picsum.photos/300/300?random=7',
      category: 'Hogar y Muebles'
    },
    {
      id: 'dfbasefgssew5225725753',
      title: 'Item08',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 990,
      stock: 50,
      pageURLBig: 'https://picsum.photos/300/300?random=8',
      category: 'Vehiculos'
    },
    {
      id: 'fgnsrhnshghasbtg52363562',
      title: 'Item09',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 54.90,
      stock: 495,
      pageURLBig: 'https://picsum.photos/300/300?random=9',
      category: 'Inmuebles'
    },
    {
      id: 'sdgfbsfjgjkdi7856789678',
      title: 'Item10',
      description: 'Lugar reservado para dejar alguna descripcion del producto.',
      price: 120,
      stock: 432,
      pageURLBig: 'https://picsum.photos/300/300?random=10',
      category: 'Inmuebles'
    },
  ]

  return (
    <BrowserRouter>
      <CartDataProvider>
        <div className="App">
          <NavBar items={items} />
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
              <Route path="/cart/">
                <Cart />
              </Route>
            </Switch>
          </div>
        </div>
      </CartDataProvider>
    </BrowserRouter>
  );
}

export default App;
