import React from 'react';
import { Text,
        View,
        StyleSheet,
        Button,
        Image
} from 'react-native';
export default class About extends React.Component{

  static navigationOptions = {
    tabBarLabel :'About',
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
       <Text style={styles.aboutname}>Your Name Here</Text>
      </Image>
       <Text>About page</Text>

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
    tintColor: 'white',
  },
  aboutBack: {
    height: 200,
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
  aboutname: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: 'gray'
  }
});
