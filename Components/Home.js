import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Choose from '../assets/Choose.png';


export default function App({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ justifyContent: 'flex-start', padding: 20,marginTop:10 }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            paddingLeft: 15,
            marginTop:10,
            color:'#22292F'
          }}>
            Home
          </Text>
          <Image source={Choose} style={{
              flex: 1,
              width: 355,
              height: 200,
              marginTop:100,
              marginLeft:0,
              position: 'absolute'
            }}></Image>

          

      </View>
      <View>
      <TouchableOpacity onPress={() => {navigation.navigate('Form')}} 
            style={styles.button}>
         <Text style={{fontSize:20,letterSpacing:0.75,textAlign:'center',
          fontFamily:'monospace',color:'white',marginBottom:-11,marginTop:-15}}>Booking Form</Text></TouchableOpacity>         
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}} 
            style={styles.button1}>
         <Text style={{fontSize:20,letterSpacing:0.75,textAlign:'center',
          fontFamily:'monospace',color:'white',marginBottom:-11,marginTop:-15}}>Chat System</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  button: {
    borderRadius:25,flex:0,
    width:'80%',
    justifyContent:'center',
    backgroundColor:'#40B5AD',
    height:45,
    zIndex:3,
    paddingVertical: 24,
    paddingHorizontal: 39,
    marginTop:270,
    marginLeft:70,
    marginBottom:80
  },
  button1 : {
    padding:0,
    marginLeft:70,
    justifyContent:'center',
    backgroundColor:'#40B5AD',
    borderRadius:25,
    width:'77%',
    height:'10%',flexDirection:'column',
    paddingVertical: 24,
    marginTop:-20,
    paddingHorizontal: 44,
  }
});