import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class Splash extends Component {
  render(){
    return(
      <View style={styles.wrapper}>
         <View style={styles.titleWrapper}>
          <Text style={styles.title}>E-Commerce_ML</Text>
         </View>
         <View>
          <Text style={styles.subTitle}>Powered By React Native</Text>
         </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#1abc9c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subTitle:{
    color:'white',
    fontWeight: 'bold',
    paddingBottom: 20
  },
  titleWrapper:{
    justifyContent: 'center',
    flex: 1
  }

});
