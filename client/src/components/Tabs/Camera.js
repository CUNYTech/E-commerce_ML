import React, { Component } from 'react';
import { Text,
        View,
        StyleSheet,
        Button,
        Image,
        TouchableHighlight,
        TextInput,
        TouchableOpacity
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
    title: 'Camera Roll',
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


      <TextInput
       placeholder="Search"
       placeholderTextColor="gray"
       returnKeyType="search"
       keyboardType="email-address"
       autoCapitalize="none"
       autoCorrect={false}
       underlineColorAndroid={'transparent'}
       style={styles.searchInput}
      />

       {this.state.imagePath ? <Image style={{width: 380, height: 380, marginBottom: 10}} source={{uri: this.state.imagePath}} /> : null}
       <TouchableHighlight style={styles.openCameraContainer}
        onPress={this.openImagePicker.bind(this)}
       >
       <Text style ={styles.textContainer}>Open Camera</Text>
       </TouchableHighlight>

       <TouchableOpacity style={styles.submitContainer}>
       <Text style ={styles.textContainer}>Submit</Text>
       </TouchableOpacity>



  </View>

 }
};

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer:{
  color:'white',
  textAlign: 'center',
  fontWeight: '700',
  fontSize: 16,
  },
  openCameraContainer:{
    width: 350,
    height: 50,
    backgroundColor: '#7DBFEB',
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 13,
  },
  submitContainer:{
    width: 350,
    height: 50,
    backgroundColor: '#39D4DE',
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 13,
  },
  searchInput:{
    height: 50,
    width: 350,
    borderRadius:10,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    backgroundColor: 'rgb(255,255,255)',
    paddingHorizontal:10,
  },
  cameraIcon: {
    width: 22,
    height: 22,
    tintColor: '#1abc9c',
  }
});
