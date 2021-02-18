import React, { useState } from 'react';
import { getFirebaseAuth, getFirebaseObject } from '../firebase/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);


  const createUser = (user) => {
    setCurrentUser(user);
    getFirebaseAuth().onAuthStateChanged(currentUser => console.log(currentUser));
  }

  const logInUser = (user) => {
    setCurrentUser(user);
  }

  const signOut = () => {
    getFirebaseAuth().signOut()
      .then(() => {
        console.log('SIGN OUT');
        setCurrentUser(null);
      })
  }

  const registerWithGoogle = () => {
    let firebase = getFirebaseObject();
    let provider = new firebase.auth.GoogleAuthProvider();
    getFirebaseAuth()
      .signInWithPopup(provider)
      .then((result) => {
        var new_user = result.user;
        const user = {
          user: {...new_user}
        }
        setCurrentUser(user);
        // ...
      }).catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        createUser,
        logInUser,
        signOut,
        registerWithGoogle
      }}>
      { children}
    </AuthContext.Provider>
  )
}
