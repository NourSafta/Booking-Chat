import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import smu1 from '../assets/smu1.png';
import { StatusBar } from 'expo-status-bar';
import {Text, StyleSheet, View,Image,TouchableOpacity} from 'react-native'; 
import DropDownPicker from 'react-native-dropdown-picker';


const StudySpace = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 'A1B01', value: 'A1B01'},
        {label: 'A1B02', value: 'A1B02'},
        {label: 'A1B03', value: 'A1B03'},
        {label: 'B1B01', value: 'B1B01'},
        {label: 'B1B02', value: 'B1B02'},
        {label: 'B1B03', value: 'B1B03'},  
        
    ])
    const [value, setValue] = useState(null);
return (
    
    <View style={styles.container} >
      <StatusBar style="dark" />
      <Image source={smu1} style={{
        width: 140,
        height: 50,
        top:40,
        backgroundColor:'#FAF9F6',
        right:0

      }}></Image>
      <Text style={styles.formLabel} > Choose your box </Text>
      <DropDownPicker
          open={open}
          setValue={setValue}
          value={value}
          style={styles.inputStyle}
          items={items}
          setOpen={setOpen}
          placeholder="Boxes"
          defaultIndex={0}
          setItems={setItems}
          containerStyle={{height:20,marginBottom:60,marginLeft:30,marginTop:20,width:'83.6%'}}
      />
      
      <TouchableOpacity onPress={() => {navigation.navigate('Confirmation')}} 
            style={styles.button}>
        <Text style={{fontSize:20,letterSpacing:0.75,textAlign:'center',
          fontFamily:'monospace',color:'white',marginBottom:-11,marginTop:-15}}>Confirm</Text></TouchableOpacity>
      
    </View>
)}
const styles = StyleSheet.create({
    button: {
        borderRadius:25,flex:0,
        width:'80%',
        justifyContent:'center',
        backgroundColor:'#40B5AD',
        height:45,
        zIndex:3,
        paddingVertical: 24,
        paddingHorizontal: 39,
        marginTop:40,
        marginLeft:40,
        marginBottom:80
      },
    formLabel: {
        fontSize: 22,
        color: '#22292F',
        fontFamily:'sans-serif-thin',
        fontWeight: 'bold',
        marginTop:190,
        marginLeft:95,
        marginBottom:0
      }
})
export default StudySpace;