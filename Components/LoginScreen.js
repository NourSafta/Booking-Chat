import React ,{useState} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {Input} from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';


const updateError = (error,stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater('')
    },2500);
  }
const isValidEmail = (value) => {
    const regx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return regx.test(value)
  }
const isValidPassword = (value) => {
    const regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ ;
    return regx.test(value)
  }

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [focus,setFocus]= useState(false);
    const [hidePassword,setHidePassword]= useState(password);
    const [error,setError] = useState('');
     
    const validate = () =>{
        
        if(!isValidEmail(email)) return updateError('Invalid email!',setError)
        if(!isValidPassword(password)) return updateError('Invalid password!',setError)
        return true;
    }
    const submit = () => {
        if(validate()){
          navigation.navigate('Chat');
        }}
    return (
        
        <View style={{marginTop:130,padding:10,alignItems:'center',flex:1}}>
            {error ? <Text style={{color:'red',fontSize:18,textAlign:'center',position:'absolute',top:65}}>{error}</Text> : null}
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginRight:250,
                marginTop:-20,
                color:'#22292F'
            }}>Login</Text>
            <Text style={{
                fontSize: 15,
                flex:1,
                marginLeft:-152,
                paddingLeft: 15,
                color:'grey'
            }}>Enter Your Details to Login</Text>
            
            <Input 
                placeholder="Enter your email" 
                label="Email"
                leftIcon={{ type:'material',name:'email'}}
                value={email}
                onChangeText={text => setEmail(text)} 
            />
            
            <View style={{flexDirection:'row',justifyContent: 'center',
                alignItems: 'center',paddingBottom: 10}}>
            <KeyboardAwareScrollView>
            <Input 
                placeholder="Enter your password" 
                label="Password"
                setFocus={focus}
                style={{ flex: 1,
                    paddingTop: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    paddingLeft: 0}}
                leftIcon={{ type:'material',name:'lock'}}
                value={password}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={text => setPassword(text)} 
                secureTextEntry={!hidePassword ? true : false}
            />
            <Ionicons style={{fontSize:22,position:'absolute',right:10,top:38}}
                name={hidePassword ? "eye-outline" : "eye-off-outline"}
                size={20} color='black' 
                onPress={() => setHidePassword(!hidePassword)} />
            </KeyboardAwareScrollView>  
            </View>
            
            <TouchableOpacity style={{
                borderRadius:25,
                width:'80%',
                justifyContent:'center',
                backgroundColor:'#40B5AD',
                height:45,
                zIndex:3,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginLeft:13,
                marginBottom:80
            }} onPress={submit}><Text style={{fontSize:22,letterSpacing:0.75,textAlign:'center',
            fontFamily:'monospace',color:'white',marginBottom:-4,top:-5}}>Log in</Text>
            </TouchableOpacity>
            
        </View>
        
    )    
    
}
export default LoginScreen