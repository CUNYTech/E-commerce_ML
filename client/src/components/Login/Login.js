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



export default class Login extends Component {
constructor(props){
  super(props);
    this.state = {
  email: '',
  password: '',
};
  this.ToRegister = this.ToRegister.bind(this)
}



_login(){
  const {navigate} = this.props.navigation;
  firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(){
<<<<<<< HEAD
=======
    alert('success');

>>>>>>> 322be4b6629e90838bc0ada3bcbe575924380984
    navigate("Main");
  }).catch(function(e) {
  // Handle Errors here

 // var errorCode = error.code;
  //var error Message = error.message;
  alert(e);

  });

}

ToRegister(){
  const {navigate} = this.props.navigation;
  navigate("Register");
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

  render() {

    return (
     



<<<<<<< HEAD
    <ScrollView style={{height: Dimensions.get('window').height,  backgroundColor: '#1abc9c'}}>

    
    
=======
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

>>>>>>> 322be4b6629e90838bc0ada3bcbe575924380984

   <View style={styles.logoContainer}>
      <Image
       style={styles.logo}
       source={require('../../images/logo.png')} />
       <Text style={styles.title}>Ta-Da!</Text>
     </View>




      <View style={styles.container}>
     <StatusBar
      barStyle="light-content"
     />
      <TextInput
       placeholder="Email"
       placeholderTextColor="rgba(255,255,255,0.7)"
       returnKeyType="next"
       onSubmitEditing={()=>this.passwordInput.focus()}
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={false}
       underlineColorAndroid={'transparent'}
       style={styles.input}
       value={this.state.email}
       onChangeText={(text) => this.setState({ email: text })}

      />
      <TextInput
       placeholder="Password"
       placeholderTextColor="rgba(255,255,255,0.7)"
       returnKeyType="go"
       secureTextEntry
       style={styles.input}
       underlineColorAndroid={'transparent'}
       ref={(input) => this.passwordInput = input}
       value={this.state.password}
       onChangeText={(text) => this.setState({ password: text })}

      />

      <TouchableOpacity style={styles.buttonContainer} onPress={this._login.bind(this)}>
      <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.buttonContainer} onPress={this.ToRegister}>
      <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

     </View>



   
    </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    padding:20,
    marginTop: 30
  },


  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    padding:100
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
    opacity: 0.9,
    fontSize: 30,
    fontWeight: 'bold'
  },
  input: {
    borderRadius:10,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal:10,
  },
  buttonContainer: {
    backgroundColor:'#16a085',
    paddingVertical: 13,
    marginBottom: 5,
    borderRadius:10
  },
  buttonText: {
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
