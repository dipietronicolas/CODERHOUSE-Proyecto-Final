import firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';

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