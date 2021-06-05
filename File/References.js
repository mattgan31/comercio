import firebase from 'firebase';

const firebaseConfig = {
    //isi dengan konfigurasi realtime database kalian    
    apiKey: "AIzaSyBVZV5kvISe4Ful_MnYMUwfwywhFUoVFfs",
    authDomain: "comercio-52028.firebaseapp.com",
    databaseURL: "https://comercio-52028-default-rtdb.firebaseio.com",
    projectId: "comercio-52028",
    storageBucket: "comercio-52028.appspot.com",
    messagingSenderId: "401336815236",
    appId: "1:401336815236:web:8fc042b8ab0c431ad43cd1",
    measurementId: "G-4JN5X79VPE"


  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
    export const dataRef = firebase.database().ref();