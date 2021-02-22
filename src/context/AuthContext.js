import React, { useState, useEffect } from 'react';
import { getFirebaseAuth, getFirebaseObject } from '../firebase/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    getFirebaseAuth().onAuthStateChanged(currentUser => {
      if(currentUser !== null) {
        const user = {
          user: { ...currentUser }
        }
        setCurrentUser(user);
      }
    });
  }, [])

  const createUser = (user) => {
    setCurrentUser(user);
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
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return getFirebaseAuth().signInWithPopup(provider)
      }).then((result) => {
        let new_user = result.user;
        const user = {
          user: { ...new_user }
        }
        setCurrentUser(user);
        // ...
      }).catch((error) => {
        let errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
  }
  /*
        .signInWithPopup(provider)
        .then((result) => {
          var new_user = result.user;
          const user = {
            user: { ...new_user }
          }
          setCurrentUser(user);
          // ...
        */
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
