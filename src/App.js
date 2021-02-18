import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { SignInContainer } from './components/SignInContainer/SignInContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CheckoutForm } from './components/CheckoutForm/CheckoutForm';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import './App.css';
import { CartDataProvider } from './context/CartContext'


function App() {

  const [showSignIn, setShowSignIn] = useState(false);
  const [signInOptions, setSignInOptions] = useState('LOGIN');

  const handleSignIn = (value) => {
    setTimeout(() => {
      setSignInOptions(value);
      setShowSignIn(!showSignIn);
    }, 400)

  }
  
  return (
    <BrowserRouter>
      <CartDataProvider>
        <AuthProvider>
          <div className="App">
            <NavBar handleSignIn={handleSignIn} />
            {
              showSignIn &&
              <SignInContainer
                handleSignIn={handleSignIn}
                signInOptions={signInOptions} />
            }
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
                <PrivateRoute path="/cart/">
                  <Cart />
                </PrivateRoute>
                <PrivateRoute path="/checkout/">
                  <CheckoutForm />
                </PrivateRoute>
              </Switch>
            </div>
          </div>
        </AuthProvider>
      </CartDataProvider>
    </BrowserRouter>
  );
}

export default App;
