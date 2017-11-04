import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Button,
        Image
} from 'react-native';
export default class Camera extends React.Component{

    static navigationOptions = {
    tabBarLabel :'Camera',
    tabBarIcon: ({tintColor})=>(
      <Image
       style={styles.cameraIcon}
        source={require('../../images/camera.png')}
      />
    )
}
render(){
  return <View style={styles.container}>
       <Text>Camera page</Text>

  </View>
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraIcon: {
    width: 22,
    height: 22,
    tintColor: 'white',
  }
});
