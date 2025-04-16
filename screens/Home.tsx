import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigate  =useNavigation();

  return (
    <view style={ styles.container }>
      <text>
        Go to next Screen.
      </text>
      <view>
        <button 
          title='Next'
          onProgress={ ()=> navigate.navigate('About', 2)}
        />
      </view>
    </view>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})