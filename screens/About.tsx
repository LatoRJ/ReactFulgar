import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles.js';

export default function About() {

  const navigate = useNavigation();

  return (
    <View style = {{ flex: 1 }}>
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style = {{width: 200, height: 200, backgroundColor: '#A3B1C6', borderRadius: 16}} />
        <Text style = {styles.title}>Free delivery offers</Text>
        <Text style = {styles.subtitle}>This is the subtitle of about</Text>
      </View>

      <View style = {{ width: '100%' }}>
        <TouchableOpacity
        style = {styles.button}
        onPress = { () => navigate.navigate('start') }
        >
          <Text style = {styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        <Text style = {styles.skipText}> </Text>
      </View>
    </View>
  )
}
