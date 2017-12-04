import React, { Component } from 'react';
import { View,
        StyleSheet,
        TextInput,
        Image,
        TouchableOpacity,
        Text,
        StatusBar,
        KeyboardAvoidingView,
        ScrollView,
        Dimensions,
} from 'react-native';
 import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import {firebaseApp} from '../../../firebase/config';

export default class Register extends Component {
constructor(props){
  super(props);
    this.state = {
  email: '',
  password: '',
  password2: '',
};
this.ToCancel = this.ToCancel.bind(this)
}




static navigationOptions = {
headerTintColor: '#fff',
headerStyle: {
display: 'none',
},
headerTitleStyle: {
fontSize: 18
}
};


ToRegister(){
  const {navigate} = this.props.navigation;
  if(this.state.password == this.state.password2){
     firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(){
       alert('success!');

           navigate("Login");
     }).catch(function(e){

      // Handle Errors here.
     alert(e);
      // ...
    })

  } else {
    alert('Password didnt matched!');
  }


}

ToCancel(){
  const {navigate} = this.props.navigation;
  navigate("Login");
}

  render() {

    return (

      <ScrollView style={{height: Dimensions.get('window').height,  backgroundColor: '#1abc9c'}}>
      <KeyboardAvoidingView behavior="padding" >
         <View style={styles.container}>
          <Text style={styles.header}>Registration</Text>


           <TextInput style={styles.textinput}
            placeholder="Enter your email"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="next"
            underlineColorIos={'transparent'}
            underlineColorAndroid={'transparent'}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}


           />

          <TextInput style={styles.textinput}
           placeholder="Enter Password"
           placeholderTextColor="rgba(255,255,255,0.5)"
           returnKeyType="next"
           underlineColorIos={'transparent'}
           underlineColorAndroid={'transparent'}
           secureTextEntry={true}
           value={this.state.password}
           onChangeText={(password) => this.setState({ password })}

           />

           <TextInput style={styles.textinput}
            placeholder="Confirm Password"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="go"
            underlineColorIos={'transparent'}
            underlineColorAndroid={'transparent'}
            secureTextEntry={true}
            value={this.state.password2}
            onChangeText={(password2) => this.setState({ password2})}


           />

           <TouchableOpacity style={styles.buttonContainer} onPress={this.ToRegister.bind(this)}>
           <Text style={styles.buttonText}>SIGN UP</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonContainer} onPress={this.ToCancel}>
           <Text style={styles.buttonText}>CANCEL</Text>
           </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
    container: {
      alignSelf: 'stretch',
       flex: 1,
       justifyContent: 'center',
       backgroundColor: '#1abc9c',
       padding:100,
       paddingLeft: 60,
       paddingRight: 60,
       marginTop: 30

    },

    header:{
      fontSize: 24,
      color: '#fff',
      fontWeight:'700',
      paddingBottom: 10,
      marginBottom: 10,

    },
    textinput:{
      alignSelf: 'stretch',
      height: 30,
      marginBottom: 35,
      color:'#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      fontSize: 16,
    },
    buttonContainer: {
      alignSelf: 'stretch',
      backgroundColor:'#16a085',
      paddingVertical: 13,
      marginBottom: 5,
      borderRadius:15
    },
    buttonText: {
      textAlign:'center',
      color: '#FFFFFF',
      fontWeight: '700'
    }


});
