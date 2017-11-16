import React, { Component } from 'react';
import { AppRegistry
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';

import Splash from './Splash';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import Main from './src/components/Main';
import Password from './src/components/Password';


export const App = StackNavigator({

  Login: { screen: Login },
  Register: { screen: Register },
  Main: { screen: Main },
  Password: { screen: Password }

});



export default class AwesomeProject extends Component {


  render() {
    return (

      < App/>


    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
