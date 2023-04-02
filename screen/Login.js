import { View, Text,StyleSheet,Button,TextInput,SafeAreaView, Image } from 'react-native'
import React,{ useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
 
import logo from "../assets/login.png"

const Login = () => {

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    //navigaiton

    const navigation=useNavigation();
    const  submitHandler=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user)

            navigation.navigate("Welcome")
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
  return (
    <SafeAreaView>

        {/* <Image source={logo} />  */}
        <Image
         
         source={logo}
         style={{height:400,width:400}}
        />
      
        <TextInput 
        placeholder='Enter your Email'  s
        style={styles.input} 

        onChangeText={((text)=>setEmail(text))}
        />
   
        <TextInput 
        placeholder='Enter your password' 
        style={styles.input}
        onChangeText={((text)=>setPassword(text))}
         />

        {/* button */}
        <View>
            <Button title="Sumbit" onPress={submitHandler}/>
            
            <Button title="SiginUp"/>

        </View>
      
    </SafeAreaView> 
  )
}

export default Login

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      width:350,
      borderBottomWidth: 1,
      padding: 10,
      borderRadius:20
    },
  });
  