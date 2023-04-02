import React, { useEffect, useState } from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {

  const[longitudeSet,setLongitude]=useState();
  const[latitudeSet,setLatitude]=useState()
  useEffect(()=>{
    (async () => {
      
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
       
      setLongitude(location.coords.longitude); 

       
   
    })();
 
   },[])
  
  return (
    <View style={styles.container}>

    
      <MapView 
      style={styles.map}
        initialRegion={{
        latitude:10.9379,
        longitude:76.9583,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      
      >
        <Marker title="college "   coordinate={{latitude:  10.9379, longitude: 76.9592}}  onDrag={e=>console.log(e.nativeEvent.coordinate)}>


        </Marker>
        <Circle   center={{latitude:  10.9379, longitude: 76.9592}}    radius = { 1000 }></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


