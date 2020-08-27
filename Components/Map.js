import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet,TouchableOpacity, Dimensions } from 'react-native'; 
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Map extends Component {
    render() {
        return (
         <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        
      </MapView>
    </View>
          
        )}}


const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });