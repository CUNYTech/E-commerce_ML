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
    activeTintColor: 'white',
    activeBackgroundColor: '#1abc9c',
    inactiveTintColor: '#1abc9c',

  labelStyle: {
      fontSize: 13,
      padding: 0,

    }
  }
 }
);

MainScreenNavigator.navigationOptions = {
  title: "E-Commerce",
  headerTintColor: '#1abc9c',

};



export default MainScreenNavigator;




/*export default class Register extends Component {

  static navigationOptions = {
  title: 'HOME',
  headerTintColor: '#fff',

  headerStyle: {
  backgroundColor: '#1abc9c',
  borderBottomColor: 'gray',
  },
  headerTitleStyle: {
  fontSize: 18,
  fontWeight:'700'
  }
};

  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.header}>WELCOME :)

        </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',

   },
    header: {
     fontSize: 24,
     color: '#1abc9c',
     fontWeight: '700',
     marginTop: 200,
    }

});
*/
