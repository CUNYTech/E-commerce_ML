import React, { Component } from 'react';
import { View,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Text,
        StatusBar
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
     <View style={styles.container}>
     <StatusBar
      barStyle="light-content"
     />
      <TextInput
       placeholder="Username or Email"
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
       placeholderTextColor="rgba(255,255,255,0.7)"
       returnKeyType="go"
       secureTextEntry
       style={styles.input}
       ref={(input) => this.passwordInput = input}
      />
      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding:20
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
