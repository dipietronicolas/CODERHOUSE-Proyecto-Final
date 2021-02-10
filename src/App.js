import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CheckoutForm } from './components/CheckoutForm/CheckoutForm';
import './App.css';
import { CartDataProvider } from './context/CartContext'


function App() {

  return (
    <BrowserRouter>
      <CartDataProvider>
        <div className="App">
          <NavBar/>
          <div className='home'>
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="/category/:categoryId">
                <ItemListContainer />
              </Route>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart/">
                <Cart />
              </Route>
              <Route path="/checkout/">
                <CheckoutForm />
              </Route>
            </Switch>
          </div>
        </div>
      </CartDataProvider>
    </BrowserRouter>
  );
}

export default App;
