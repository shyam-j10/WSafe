import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import Stack from './navigaiton/Stack';
import VoiceHelp from './VoiceHelp';
 

 
export default function App() {
  return (
      <VoiceHelp/>
      // <NavigationContainer>
     

      //   <Stack />

 
      // </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
