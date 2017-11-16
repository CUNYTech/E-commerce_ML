import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Button,
        Image
} from 'react-native';
export default class Feed extends React.Component{

  static navigationOptions = {
    tabBarLabel:'Feed',
    tabBarIcon: ({tintColor})=>(
      <Image
       style={styles.feedIcon}
        source={require('../../images/feed.png')}
      />
    )
  }

  render(){
    return <View style={styles.container}>
         <Text>Feed page</Text>

    </View>
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    feedIcon: {
      width: 22,
      height: 22,
      tintColor: '#1abc9c',

    }
  });
