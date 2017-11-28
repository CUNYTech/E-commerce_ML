import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Feed from './Tabs/Feed';
import Camera from './Tabs/Camera';
import About from './Tabs/About';

var MainScreenNavigator = TabNavigator({
  Feed: {screen: Feed},
  Camera: {screen: Camera},
  About: {screen: About},
},{
  tabBarPosition:'bottom',
  swipeEnabled: true,

  tabBarOptions:{
    activeTintColor: '#1abc9c',
    activeBackgroundColor: 'transparent',
    inactiveTintColor: '#1abc9c',

  labelStyle: {
      fontSize: 13,
      padding: 0,
    }
  }
 }
);

MainScreenNavigator.navigationOptions = {
  title: "TaDaa",
  headerTintColor: 'white',
  headerStyle: {
  backgroundColor: '#1abc9c',
  borderBottomColor: 'lightgray',
  }

};



export default MainScreenNavigator;
