import React, { useEffect, useRef }  from 'react';
import { Animated, View, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from './Logo.png';

import WelcomeScreen from './WelcomeScreen';


export default function SplashScreen(){
    

    // SafeArea Value...
    const edges = useSafeAreaInsets();

    //Animation Values...
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down logo 
    const scaleLogo = useRef(new Animated.Value(1)).current;
    
    // Offset Animation...
    const moveLogo = useRef(new Animated.ValueXY({x: 0, y:0})).current;

     
    
    // Animation Done
    useEffect(()=>{

        // Starting Animation after 500ms...
        setTimeout(()=>{
            // Parallel Animation...  
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {   // For same height for non safe Area Devices...
                        toValue: -Dimensions.get('window').height + (edges.top+65),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {   // Scaling to 0.35
                        toValue: 0.35,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {   // Moving to Right Most...
                        toValue: {
                            x : (Dimensions.get("window").width / 2) - 35,
                            y : (Dimensions.get('window').height / 2) - 20
                        },
                        useNativeDriver: true
                    }
                )
                
            ])
            .start();
            
        },650);
        
        
    },[]);
    
    return(
        
        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Animated.View style={{
             flex: 1,
             backgroundColor:'#057999',
             zIndex: 1,
             transform: [
                { translateY: startAnimation}
             ]
            }}>

               <Animated.View style={{
                 flex:1,
                 alignItems:'center',
                 justifyContent:'center'
               }}>
                  <Animated.Image source={Logo} style={{
                    width: 250,
                    height: 250,
                    resizeMode: 'cover',
                    position:'absolute',
                    marginBottom: 20,
                    transform:[
                       {translateX: moveLogo.x},
                       {translateY: moveLogo.y },
                       {scale: scaleLogo}
                    ]
                  }}></Animated.Image>
            </Animated.View>
            </Animated.View>
            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                
            }}>
                
            <WelcomeScreen></WelcomeScreen>  

            </Animated.View>
            
        </View>
        
    );
}