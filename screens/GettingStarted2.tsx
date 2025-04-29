import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles';

export default function GettingStarted2() {
  
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.imageContainer}>
            <Image
              source={require('../assets/img2.png')}
              style={styles.image}
              resizeMode="cover"/>
          </View>
        <Text style={styles.title}>Crafted for Every Moment</Text>
        <Text style={styles.subtitle}>From classic designs to bold statements,{'\n'}find the perfect watch for every mood and milestone.</Text>

        <View style={styles.dotContainer}>
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('GettingStarted3')}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Start')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}