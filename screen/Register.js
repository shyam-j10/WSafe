import { View, Text,TextInput,StyleSheet,Button, SafeAreaView,Keyboard ,Image,TouchableWithoutFeedback} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
 import { auth } from '../firebase/firebase';
 import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import logo from "../assets/register.png"


const Register = () => {
  
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();


   useEffect(()=>{
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    })();
   })
    //navigaiton

    const navigaiton=useNavigation();


    const submitHandler=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
           
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
             
        });


    }

  return (
    <SafeAreaView>
           <Image
        style={styles.Image}
        source={logo}
      />
      
    

      
            <TextInput 
              placeholder='Enter your Email'  
              style={styles.input} 

            
              />

              <TextInput 
              placeholder='Enter your password' 
              style={styles.input}    />
              



       

      
   
      

   

    
      

     
        
       
        <View>
            <Button title="SUBMIT"   style = {{color:'red'}}  onPress={submitHandler}  />
           
            <Button title="LOGIN" style={styles.button} onPress={()=>navigaiton.navigate("Login")}/>

    </View> 
    </SafeAreaView>

  )
}

export default Register;

const styles = StyleSheet.create({
    input: {
      height: 40,
    
      margin: 12,
      width:330,
      borderBottomWidth: 1,
      padding: 10,
       
      borderRadius:10,
      
    
    },
    Image:{
      height:450,
      width:400
    },
    button:{
      color:'red'
    }
  });
  