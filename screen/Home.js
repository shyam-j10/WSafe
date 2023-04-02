import { View, Text, SafeAreaView ,StyleSheet,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera';
import logo from "../assets/sos.png"
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

 
const Home = () => {
  const navigaiton=useNavigation();
  return (
    <SafeAreaView style={Styles.cointainer}>   
      <View >
        <Image source={logo}  style={Styles.sos}/>
      </View>
      <View>
        <View style={Styles.row1}>
          <Pressable onPress={()=>{navigaiton.navigate("Report")}}>
            <Text>Anonymous Reporting</Text>
          </Pressable>
          <Pressable onPress={()=>{navigaiton.navigate("Voice")}} style={ Styles.left}>
            <Text>Voice recognization</Text>
          </Pressable>
        </View>
        <View style={Styles.row2}>
          <Pressable onPress={()=>{navigaiton.navigate("Arrival")}}>
            <Text>Schedule your arrival</Text>
          </Pressable>
          <Pressable onPress={()=>{navigaiton.navigate("Helpline")}} style={ Styles.left}>
            <Text>Emergency Helpline</Text>
          </Pressable>
        </View>
        <View>

        </View>
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
  row1:{
    top:30,
    alignItems:'center',
    left:50,
    display:'flex',
    flexDirection:'row'
  },
  row2:{
    top:60,
    left:50,
    display:'flex',
    flexDirection:'row'
  },
  sos:{
      height:300,
      width:400,
  },
  left:{
    left:30
  }
})