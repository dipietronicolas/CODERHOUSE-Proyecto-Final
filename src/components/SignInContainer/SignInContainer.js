import React, { useState, useContext, useRef } from 'react';
import { getFirebaseAuth } from '../../firebase/firebase';
import { AuthContext } from '../../context/AuthContext';
import './SignInContainer.css';

export const SignInContainer = ({ handleSignIn, signInOptions }) => {

  const passwordRef = useRef(null);
  const { createUser, logInUser, registerWithGoogle } = useContext(AuthContext);
  const [datos, setDatos] = useState('');

  const handleAuth = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = datos.buyer_email;
    const password = passwordRef.current.value;
    const auth = getFirebaseAuth();

    if (signInOptions === 'INGRESAR') {
      auth.signInWithEmailAndPassword(email, password)
        .then((e) => {
          logInUser(e)
          console.log('EXITO!')
        })
        .catch(e => console.log(e))
    } else {
      auth.createUserWithEmailAndPassword(email, password)
        .then(e => createUser(e))
        .catch(e => console.log(e))
    }
    setTimeout(() => {
      handleSignIn();
    }, 500);
  }

  const handleGoogleLogIn = () => {
    registerWithGoogle();
    setTimeout(() => {
      handleSignIn();
    }, 500);
  }

  return (
    <div className="SignInContainer">
      <div className="SignIn">
        <button
          className="btn-close"
          onClick={handleSignIn}>
          <i className="fas fa-times"></i>
        </button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="buyer_email" className="SignInLabel">Email </label>
          <input
            onChange={handleAuth}
            name="buyer_email"
            type="email"
            placeholder="Ejemplo: xxx@mail.com"
            className="SignInInput"
            autoFocus />
          <label htmlFor="buyer_email" className="SignInLabel">Password</label>
          <input
            ref={passwordRef}
            onChange={handleAuth}
            name="buyer_password"
            type="password"
            className="SignInInput"
            min="6" />
          {
            signInOptions === 'INGRESAR'
              ?
              <button
                type="submit"
                className="SignInForm-LogIn">LogIn</button>
              :
              <button
                type="submit"
                className="SignInForm-SignIn">Registrarse</button>
          }


        </form>
        <div className="SignInWithGoogleContainer">
          {
            signInOptions === 'INGRESAR'
              ?
              <button
                className="btn-SignInGoogle"
                onClick={handleGoogleLogIn}>
                <i className="fab fa-google"></i>
                  &nbsp;LogIn with Google
                </button>
              :
              <button
                className="btn-SignInGoogle"
                onClick={handleGoogleLogIn}>
                <i className="fab fa-google"></i>
                  &nbsp;Register with Google
                </button>
          }

        </div>
      </div>
    </div>
  )
}
