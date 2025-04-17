import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles/styles'

export default function Index() {

  const navigate = useNavigation()

  return (
    <View style={styles.container}>
      <Text>
        Go to next Screen.
      </Text>
      <View>
        <Button 
          title='Next'
          onPress={ ()=> navigate.navigate('home')}
        />
      </View>
    </View>
  )
}
