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
const firebaseConfig = {
apikey:  "<our api key goes here>",
authDomian: "<our auth domain>",
databaseURL: "<our database url>",
storageBucket: "<our storage bucket goes here>",
};
const firebaseApp.initialize(firebaseConfig);
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
