import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet
} from 'react-native';

export default class Register extends Component {

  static navigationOptions = {
  title: 'HOME',
  headerTintColor: '#fff',

  headerStyle: {
  backgroundColor: '#1abc9c',
  borderBottomColor: 'gray',
  },
  headerTitleStyle: {
  fontSize: 18,
  fontWeight:'700'
  }
  };
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.header}>WELCOME :)

        </Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',

   },
    header: {
     fontSize: 24,
     color: '#1abc9c',
     fontWeight: '700',
     marginTop: 200,
    }

});
