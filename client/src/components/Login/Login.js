import React, { Component } from 'react';
import { View,
        StyleSheet,
        TextInput,
        Image,
        TouchableOpacity,
        Text,
        StatusBar,
        KeyboardAvoidingView
} from 'react-native';
 import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class Login extends Component {


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
       const {navigate} = this.props.navigation;
    return (

     

    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    

   <View style={styles.logoContainer}>
      <Image
       style={styles.logo}
       source={require('../../images/logo.png')} />
       <Text style={styles.title}>An app made for CUNY Codes using React Native</Text>
     </View>




      <View style={styles.container}> 
     <StatusBar
      barStyle="light-content"
     />
      <TextInput
       placeholder="Email"
       id="LogUserName"
       placeholderTextColor="rgba(255,255,255,0.7)"
       returnKeyType="next"
       onSubmitEditing={()=>this.passwordInput.focus()}
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={false}
       style={styles.input}
      />
      <TextInput
       placeholder="Password"
       id="LogPass"
       placeholderTextColor="rgba(255,255,255,0.7)"
       returnKeyType="go"
       secureTextEntry
       style={styles.input}
       ref={(input) => this.passwordInput = input}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Main")}>
      <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Register")}>
      <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

     </View> 



    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    padding:20
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
  },
  input: {
    borderRadius:10,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal:10
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
