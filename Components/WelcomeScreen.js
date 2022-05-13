
import React from 'react';
import { Animated,View,Image} from 'react-native';
import Buttons from './Buttons';
import { useNavigation } from '@react-navigation/native';
// Welcome's Image
import Schedule from '../assets/Schedule.png';


export default function WelcomeScreen(){
    const navigation = useNavigation();
    return(
        
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <Image source={Schedule} style={{
             flex: 1,
             width: 400,
             height: 500,
             marginTop:100,
             resizeMode: 'contain',
             position:'absolute'
            }}></Image>
            <Animated.Text style={{
                        fontSize: 23,
                        fontWeight: 'bold',
                        color: '#191970',
                        fontFamily:'sans-serif-thin',
                        position: 'absolute',
                        height:350
            }}>         Welcome to our Booking        {'\n'}                      System      </Animated.Text>
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center',marginTop:120}}>
            <Buttons 
            btn_text={"Get Started"}
            on_press={() => navigation.replace('Home')}
            /> 
        </View>
        </View>  
        
        
    );
         
}          

              