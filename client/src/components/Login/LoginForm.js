import React, { Component } from 'react';
import { View,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Text,
        StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {
  render() {
    return (
     <View style={styles.container}>
     <StatusBar
      barStyle="light-content"
     />
      <TextInput
       placeholder="Username or Email"
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
      <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navRegister()}>
      <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navMain()}>
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
