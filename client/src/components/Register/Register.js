import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
         KeyboardAvoidingView
} from 'react-native';
import RegisterForm from './RegisterForm';

export default class Register extends Component {

  navToLogin = () => {
    const {navigate} = this.props.navigation
    navigate('Login')
  }

  static navigationOptions = {
headerTintColor: '#fff',
headerStyle: {
backgroundColor: '#1abc9c',
},
headerTitleStyle: {
fontSize: 18
}
};

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.Register}>

        <RegisterForm  navSubmit={this.navToLogin}/>
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

    }

});
