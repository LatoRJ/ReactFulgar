import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles.js';
export default function Home() {

  const navigate = useNavigation();
  const route = useRoute();
  const id    = route.params;

  return (
    <View style = {styles.container}>
      <Text>Go to About! </Text>
      <View>
        <Button
          title='Index'
          onPress={ ()=> navigate.navigate('about')}
        />
      </View>
      </View>
  )
}

