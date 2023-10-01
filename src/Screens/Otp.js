import { View, Text, StyleSheet, Pressable, TextInput, CheckBox, Image } from 'react-native'
import React, {useState,} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const OtpScreen = () => {
  return (  
        <View>
        <Text style={styles.otp}>OTP</Text>
        <TextInput
          placeholder='Enter Otp' 
          style={styles.textBox}>
        </TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>VERIFY OTP</Text>
      </TouchableOpacity>
        </View>
      )
} 
export default OtpScreen
const styles = StyleSheet.create({
     button: {
        height: 40,
        borderRadius:6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'darkblue',
        marginBottom: 30,
     },
     buttontext: {
      fontSize: 18,
      color:'white',
      marginBottom: 0,
      fontWeight:'bold'
     },
     textBox: {
        borderColor:"#2bc4ff",
        borderWidth:1.5,
        borderRadius:6,
        padding:6,
        marginTop: 6,
        marginBottom: 10,
      },
      otp:{
       fontWeight:'bold'
      }
})