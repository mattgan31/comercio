import firebase from 'firebase';

const firebaseConfig = {
    //isi dengan konfigurasi realtime database kalian    
    apiKey: "AIzaSyADB8yDiobTSS1vdUl0_gmHkc90T4d24E0",
    authDomain: "damatt-520e3.firebaseapp.com",
    databaseURL: "https://damatt-520e3-default-rtdb.firebaseio.com",
    projectId: "damatt-520e3",
    storageBucket: "damatt-520e3.appspot.com",
    messagingSenderId: "56689476887",
    appId: "1:56689476887:web:db84e342128cb6b5ca2352",
    measurementId: "G-JMQR88S772"

  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
    export const dataRef = firebase.database().ref();