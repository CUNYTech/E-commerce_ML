import * as firebase from 'firebase';

  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDfku7WtjLU8BviEm5zM3fdNCXpL8T19mc",
    authDomain: "e-commerce-340f5.firebaseapp.com",
    databaseURL: "https://e-commerce-340f5.firebaseio.com",
    projectId: "e-commerce-340f5",
    storageBucket: "e-commerce-340f5.appspot.com",
    messagingSenderId: "720727235568"
  };

export const firebaseApp = firebase.initializeApp(config);
