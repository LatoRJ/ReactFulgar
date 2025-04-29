// src/screens/landing.tsx

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const LandingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('GettingStarted1');
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WATCHRAGUD</Text>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
