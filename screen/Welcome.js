import { View, Text,StyleSheet,Button, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase/firebase';
import { async } from '@firebase/util';
 
import { database } from '../firebase/firebase';
import { getDatabase, ref, set } from "firebase/database";
import { useNavigation } from '@react-navigation/native';
import logo from "../assets/register.png"

const Welcome = () => { 

    const [details,setDetails]=useState({

        name:"",
        surname:"",
        mobile:"",
        emergency:"",
        adress:""

    })
    const navigation=useNavigation()
    const btnHandler=()=>{
       

        
      
        function writeUserData(userId, name, surname, mobile,emergency,adress) {
            const db = getDatabase();
            set(ref(db, 'users/' + userId), {
                name:name,
                surname:surname,
                mobile:mobile,
                emergency:emergency,
                adress:adress
            });
          }
          writeUserData(details.mobile,details.name,details.surname,details.mobile,details.emergency,details.adress)
        navigation.navigate("HomeScreen");
        console.log("sucesss")
    }
    
  return (
    <SafeAreaView>
       


      
        <View>
                 <Text style={styles.text}>Welcome OnBoard!</Text>
        </View>

        
        <View style={styles.container}>
            <TextInput   placeholder='Enter your Name'
             onChangeText={(text)=>setDetails({...details,name:text})}
             style={styles.input} 


            />
            <TextInput
            placeholder='Enter your Suraname'
            onChangeText={(text)=>setDetails({...details,surname:text})}
            style={styles.input}  
            />
            <TextInput
             placeholder='Enter your MobileNumber '  
             onChangeText={(text)=>setDetails({...details,mobile:text})}
             style={styles.input} 
             />
            <TextInput 
            placeholder='Enter your Emergency Contact '
             onChangeText={(text)=>setDetails({...details,emergency:text})}
             style={styles.input} 
              />
            <TextInput
             placeholder='Enter your Address'
             onChangeText={(text)=>setDetails({...details,adress:text})}
    
             style={styles.input} 
             />

             <Button style={styles.submit} title='Submit' onPress={btnHandler}/>
        </View>
        


    </SafeAreaView>



  )
}

export default Welcome

const styles = StyleSheet.create({
 
  container:{
      marginTop:230
  },
  text:{
    fontSize:30,
    textAlign:"center",
    marginTop:50,

  },
    input: {
      height: 40,
      margin: 15,
      width:350,
      borderWidth: 1,
      padding: 10,
      borderRadius:20,
      marginTop:20

    },
  
});