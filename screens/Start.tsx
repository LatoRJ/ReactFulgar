import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles.js';


export default function Start() {
  return (
    <View style = {styles.container}>
      <Text>Starting page.</Text>
    </View>
  )
}
