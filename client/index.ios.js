import React, { Component } from 'react';
import { AppRegistry
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';


import Splash from './Splash';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import Main from './src/components/Main';
import * as firebase from 'firebase';
export const App = StackNavigator({

  Login: { screen: Login },
  Register: { screen: Register },
  Main: { screen: Main },

});

//initialize firebase 
//src="https://www.gstatic.com/firebasejs/4.6.1/firebase.js

const firebaseConfig = {
apikey:  "AIzaSyACl7ur6GdzKJrWCXrGHwVkhJFMAlX5fWU",
authDomian: "<ecommerce-bbcfb.firebaseapp.com",
databaseURL: "https://ecommerce-bbcfb.firebaseio.com",
projectId: "ecommerce-bbcfb",
storageBucket: "",
messagingSenderId: "826579844780"
};
//const firebaseApp.initialize(firebaseConfig);
//end method
 
export default class AwesomeProject extends Component {
  render() {
    return (

      < App/>


    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
