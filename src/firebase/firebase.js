import firebase from 'firebase';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDHPKv6MFsCacWjzItQuD5JY_EzXc1CGxk",
    authDomain: "tienda-online-855ba.firebaseapp.com",
    projectId: "tienda-online-855ba",
    storageBucket: "tienda-online-855ba.appspot.com",
    messagingSenderId: "626916253649",
    appId: "1:626916253649:web:765880445bf4975f024af0",
    measurementId: "G-R27B37EGH7"
});

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app);
}