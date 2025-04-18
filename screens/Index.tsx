import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles/styles'

export default function Index() {

  const navigate = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 200, height: 200, backgroundColor: '#A3B1C6', borderRadius: 16 }} />
        <Text style={styles.title}>All your favorites</Text>
        <Text style={styles.subtitle}>This is the subtitle of index</Text>
      </View>

      <View style={{ width: '100%' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate.navigate('home')}
        >
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate.navigate('start')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
