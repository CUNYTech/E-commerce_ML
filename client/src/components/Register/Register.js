import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
         TextInput,
        TouchableOpacity,
         KeyboardAvoidingView
} from 'react-native';
 import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

export default class Register extends Component {

state = {
  name: '',
  username:'',
  email: '',
  password: '',
  password2: '',
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
        const {navigate} = this.props.navigation;
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.Register}>


         <View style={styles.container}>
          <Text style={styles.header}>Registration</Text>

          <TextInput style={styles.textinput}
           placeholder="Your name"
           placeholderTextColor="rgba(255,255,255,0.5)"
           returnKeyType="next"
           underlineColorIos={'transparent'}
           autoCorrect={false}
          
          />

          <TextInput style={styles.textinput}
           placeholder="Username"
           placeholderTextColor="rgba(255,255,255,0.5)"
           returnKeyType="next"
           underlineColorIos={'transparent'}
           autoCorrect={false}
           
          />

           <TextInput style={styles.textinput}
            placeholder="Your email"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="next"
            underlineColorIos={'transparent'}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            
           />

          <TextInput style={styles.textinput}
           placeholder="Password"
           placeholderTextColor="rgba(255,255,255,0.5)"
           returnKeyType="next"
           underlineColorIos={'transparent'}
           secureTextEntry={true}
           
           />

           <TextInput style={styles.textinput}
            placeholder="Confirm Password"
            placeholderTextColor="rgba(255,255,255,0.5)"
            returnKeyType="go"
            underlineColorIos={'transparent'}
            secureTextEntry={true}
            
           />

           <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate("Login")}>
           <Text style={styles.buttonText}>SIGN UP</Text>
           </TouchableOpacity>
        </View>


        </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
    Register: {
       flex: 1,
       justifyContent: 'center',
       backgroundColor: '#1abc9c',
       paddingLeft: 60,
       paddingRight: 60,

    },
        container: {
      alignSelf: 'stretch',

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
