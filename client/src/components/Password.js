import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        TextInput,
        TouchableOpacity
} from 'react-native';

export default class Password extends Component {

static navigationOptions = {
 headerTintColor: '#fff',
 headerStyle: {
 display: 'none',
  },
 headerTitleStyle: {
 fontSize: 18
  }
};

constructor(props){
  super(props);
    this.state = {
  email: '',
};
  this.ToLogin = this.ToLogin.bind(this)
}


ToLogin(){
  const {navigate} = this.props.navigation;
  navigate("Login");
}


  render() {
    return (


        <View style={styles.container}>
        <Text style={styles.header}>Forgot Password?</Text>
        <Text style={styles.header}>No Problem!</Text>

        <TextInput
        placeholder="Email"
        placeholderTextColor="rgba(255,255,255,0.7)"
        returnKeyType="go"
        onSubmitEditing={()=>this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        style={styles.passForgot}
        onChangeText={(text) => this.setState({ email: text })}
        />

      <TouchableOpacity style={styles.buttonContainer}  onPress={this.ToLogin}>
       <Text style={styles.buttonText}>Reset Password</Text>
       </TouchableOpacity>


       </View>

    );
  }
}
const styles = StyleSheet.create({
    container: {
     flexGrow: 1,
     backgroundColor: '#1abc9c',
     justifyContent: 'center',
     alignItems: 'center'
   },
   header:{
     fontSize: 24,
     color: '#fff',
     fontWeight:'700',
     paddingBottom: 10,
     marginBottom: 10,
   },
   passForgot:{
     borderRadius:10,
     height: 50,
     backgroundColor: 'rgba(255,255,255,0.3)',
     marginBottom: 10,
     color: '#FFF',
     paddingHorizontal:10,
     width: '80%'
   },
   buttonContainer: {
     backgroundColor:'#16a085',
     paddingVertical: 13,
     marginBottom: 5,
     borderRadius:10,
     width: '80%'
   },
   buttonText: {
     textAlign:'center',
     color: '#FFFFFF',
     fontWeight: '700',
     fontSize: 15,
   }

});
