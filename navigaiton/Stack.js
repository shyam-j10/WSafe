import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../screen/Register'
import Login from '../screen/Login'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from '../screen/Welcome'
import TabNavigation from './TabNavigation'
import Report from '../screen/Report'
import VoiceHelp from '../screen/VoiceHelp'
import Arrival from '../screen/Arrival'
import Helpline from '../screen/Helpline'
const Stack = () => {

    const Stack=createStackNavigator();
    return (
    <Stack.Navigator initialRouteName='Register'>           
              <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
              <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
              <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
              <Stack.Screen name="HomeScreen" component={TabNavigation} options={{headerShown:false}} />
              <Stack.Screen name="Report" component={Report} options={{headerShown:false}} />
              <Stack.Screen name="Voice" component={VoiceHelp} options={{headerShown:false}} />
              <Stack.Screen name="Arrival" component={Arrival} options={{headerShown:false}} />
              <Stack.Screen name="Helpline" component={Helpline} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default Stack