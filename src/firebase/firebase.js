import firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGER_SENDING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});
/*
const app = firebase.initializeApp({
    apiKey: "AIzaSyDHPKv6MFsCacWjzItQuD5JY_EzXc1CGxk",
    authDomain: "tienda-online-855ba.firebaseapp.com",
    projectId: "tienda-online-855ba",
    storageBucket: "tienda-online-855ba.appspot.com",
    messagingSenderId: "626916253649",
    appId: "1:626916253649:web:765880445bf4975f024af0",
    measurementId: "G-R27B37EGH7"
});
*/
export const getFirebaseAuth = () => {
    return firebase.auth();
}

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app);
}

export const getFirestorage = () => {
    return firebase.storage();
}

export const getStorageRef = () => {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    let storage = firebase.storage();

    // Create a storage reference from our storage service
    return storage.ref('tecno-tienda');
}

//Timestamp para agregar las ordenes con fecha
export const getTimestamp = () => {
    return firebase.firestore.Timestamp.fromDate(new Date());
}

export const getFirebaseObject = () => {
    return firebase;
}
