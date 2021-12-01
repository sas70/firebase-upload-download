import { initializeApp }  from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 

const firebaseApp = initializeApp({
    apiKey: "xxxxxx",
    authDomain: "frb-upl-dwnld-x-738ca.firebaseapp.com",
    projectId: "frb-upl-dwnld-x-738ca",
    storageBucket: "frb-upl-dwnld-x-738ca.appspot.com",
    messagingSenderId: "557890484375",
    appId: "1:557890484375:web:22ace26a9e5dd508a6d1d2",
    measurementId: "G-R0XVTJN00D"
});

const db = getFirestore( firebaseApp );

// Add data to the database

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


    
