import React from 'react';
import { StyleSheet,Text,TouchableOpacity} from 'react-native';

const Buttons = ({btn_text,on_press}) => {
    return (
        
        <TouchableOpacity style={{
            borderRadius:25,
            width:'100%',
            justifyContent:'center',
            backgroundColor:'#40B5AD',
            height:45,
            zIndex:3,
            paddingVertical: 10,
            paddingHorizontal: 45,
            marginLeft:20,
            marginBottom:60}}
            onPress={on_press}
        > 
            <Text style={{fontSize:20,letterSpacing:0.75,textAlign:'center',
            fontFamily:'monospace',color:'white',marginBottom:-3,marginTop:-4}}
            >{btn_text}</Text>

        </TouchableOpacity>
    
    )
}
export default Buttons

const styles = StyleSheet.create({})
