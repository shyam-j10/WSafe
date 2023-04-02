import { View, Text, SafeAreaView ,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import logo from "../assets/sos.png"
import { Image } from 'react-native';

 
const Home = () => {

 
  return (
    <SafeAreaView style={Styles.cointainer}>   

      <View >
      

          <Image source={logo}  style={Styles.sos}/>

      </View>

    </SafeAreaView>
  )
}



export default Home

const Styles=StyleSheet.create({
  cointainer:{
    backgroundColor:"white",
    height:1000
  },
  sos:{
      height:300,
      width:400,
      marginTop:200
  
  }
})