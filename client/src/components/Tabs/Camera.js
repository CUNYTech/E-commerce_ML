import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Button,
        Image,
        TouchableHighlight
} from 'react-native';
import ImagePicker from 'react-native-image-picker'
export default class Camera extends React.Component{

    static navigationOptions = {
    tabBarLabel :'Camera',
    tabBarIcon: ({tintColor})=>(
      <Image
       style={styles.cameraIcon}
        source={require('../../images/camera.png')}
      />
    )
}
constructor(props){
   super(props)
   this.state = {
     imagePath: '',
     imageHeight: '',
     imageWidth: ''
   }
}

openImagePicker(){
  const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }
  ImagePicker.showImagePicker(options, (response)=>{
    if(response.didCancel){
         console.log('User cancelled image picker')
    }else if (response.error){
       console.log('Error' + response.error)
    }else if (response.customButton){
       console.log('User tabbed custom button' + response.customButton)
    }else {
      this.setState({
        imagePath: response.uri,
        imageHeight: response.height,
        imageWidth: response.width
      })
    }
  })
}
render(){
  return <View style={styles.container}>
       {this.state.imagePath ? <Image style={{width: 100, height: 100}} source={{uri: this.state.imagePath}} /> : null}
       <TouchableHighlight
        onPress={this.openImagePicker.bind(this)}
       >
        <Text>Open Camera</Text>
       </TouchableHighlight>

  </View>
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraIcon: {
    width: 22,
    height: 22,
    tintColor: '#1abc9c',
  }
});
