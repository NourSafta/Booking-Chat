import React from 'react';
import { Animated, View,Image } from 'react-native';
import Accept from '../assets/Accept.png';
import Buttons from './Buttons';

export default function Confirmation({navigation}){
    return(
        <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            backgroundColor:'#FAFAFA'
        }}>
            <Image source={Accept} style={{
             flex: 1,
             width: 100,
             height: 100,
             justifyContent: 'space-between',
             position:'absolute',
             top:0,
             bottom:0,
             marginTop:100
            }}></Image>
            <Animated.Text style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#22292F',
                        fontFamily:'sans-serif-thin',
                        position: 'absolute',
                        height:320,
                        marginTop:250
            }}>Booking Confirmed</Animated.Text>
            <Animated.Text style={{
                        fontSize: 16,
                        fontWeight: 'normal',
                        color: '#808080',
                        fontFamily:'sans-serif-thin',
                        position: 'absolute',
                        height:300,
                        marginTop:320
            }}> You'll get an email along with {"\n"}   your booking confirmation </Animated.Text>
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
            <Buttons btn_text={"Back to Home"} on_press={() => navigation.navigate('Home')}/>
        </View>
        </View>  
    );
}