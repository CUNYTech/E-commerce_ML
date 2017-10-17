import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
         KeyboardAvoidingView
} from 'react-native';
import RegisterForm from './RegisterForm';

export default class Register extends Component {
  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.Register}>

        <RegisterForm />
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
