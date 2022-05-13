import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorScreen from './Components/ErrorScreen';
import Confirmation from './Components/Confirmation';
import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import Form from './Components/Form';
import LoginScreen from './Components/LoginScreen';
import StudySpace from './Components/StudySpace';
import ChatScreen from './Components/ChatScreen';
import WelcomeScreen from './Components/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}> 
        
        <Stack.Screen name="Splash" component={SplashScreen} /> 
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="StudySpace" component={StudySpace} />
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen  name="Chat" component={ChatScreen} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Error" component={ErrorScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
