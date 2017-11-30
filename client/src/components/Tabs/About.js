import React from 'react';
import { Text,
        View,
        StyleSheet,
        Button,
        Image,
        TouchableOpacity,
        TouchableHighlight
} from 'react-native';
export default class About extends React.Component{

  static navigationOptions = {
    tabBarLabel :'Me',
    tabBarIcon: ({tintColor})=>(
      <Image
       style={styles.aboutIcon}
        source={require('../../images/about.png')}
      />
    )
}
render(){
  return <View style={styles.container}>
      <Image style={styles.aboutBack} source={require('../../images/aboutback.jpg')}>
       <Image style={styles.aboutFace} source={require('../../images/aboutface.gif')}/>
      </Image>
       <Text>Me page</Text>

       <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
     <Text style={styles.buttonText}>Delete Account</Text>
     </TouchableOpacity>

  </View>
}
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aboutIcon: {
    width: 22,
    height: 22,
    tintColor: '#1abc9c',
  },
  aboutBack: {
    height: 300,
    width:null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  aboutFace: {
    width: 80,
    height: 80,
    tintColor: 'gray',
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor:'#ADADAD',
    paddingVertical: 13,
    marginBottom: 5,
    borderRadius:10,
    marginRight: 40,
    marginLeft: 40,
  },
  buttonText: {
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
