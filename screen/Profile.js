import { View, Text ,TouchableOpacity, SafeAreaView} from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import React, { useEffect } from 'react'
import { useState } from 'react';
import VoiceHelp from '../VoiceHelp';

const Profile = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
 
  return (
    
    <SafeAreaView >
      <View>
        <VoiceHelp/>
      </View>
   
  </SafeAreaView>
  )
}

export default Profile