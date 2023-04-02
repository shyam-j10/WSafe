import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../screen/Register'
import Login from '../screen/Login'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../screen/Welcome'
import TabNavigation from './TabNavigation'
const Stack = () => {

    const Stack=createStackNavigator();
  return (


    
   

  <Stack.Navigator initialRouteName='Register'> 
              
              <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
              <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
              <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
              <Stack.Screen name="HomeScreen" component={TabNavigation} options={{headerShown:false}} />



            

    </Stack.Navigator>



     



    
  )
}

export default Stack