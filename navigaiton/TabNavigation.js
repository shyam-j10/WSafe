import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';


 
import Map from '../screen/Map';
 
const TabNavigation = () => {

    const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} >

        <Tab.Screen component={Home} 
        name='Home'
         options={{
          tabBarLabel:"Home",
            tabBarIcon:({size,color})=>{
                <Icon  name="Home" color={color} size={20}/>
            }}}
      
       />
        <Tab.Screen component={Profile} name='Profile' />
        <Tab.Screen component={Map} name='Map' />

    </Tab.Navigator>
  )
}

export default TabNavigation