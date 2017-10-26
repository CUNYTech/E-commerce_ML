import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {

  navToRegister = () => {
    const {navigate} = this.props.navigation
    navigate('Register')
  }

  navToMain = () =>{
   const {navigate} = this.props.navigation
   navigate('Main')
  }

  static navigationOptions = {
headerTintColor: '#fff',
headerStyle: {
backgroundColor: '#1abc9c',
borderBottomColor: 'gray',
},
headerTitleStyle: {
fontSize: 18
}
};

  render() {

    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
     <View style={styles.logoContainer}>
      <Image
       style={styles.logo}
       source={require('../../images/logo.png')} />
       <Text style={styles.title}>An app made for CUNY Codes using React Native</Text>
     </View>
     <View style={styles.formContainer}>

      <LoginForm navRegister={this.navToRegister}
                 navMain= {this.navToMain}
       />

     </View>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title:{
    color:'#FFF',
    marginTop: 20,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
  }
});
