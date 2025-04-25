import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

export default function GettingStarted1() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
            <Image
              source={require('../assets/img1.png')} // change to your image path
              style={styles.image}
              resizeMode="cover"/>
          </View>
        <Text style={styles.title}>Timeless Style, Modern Edge</Text>
        <Text style={styles.subtitle}>
        Discover watches that blend elegance with innovation{'\n'}because your time deserves more than ordinary.
        </Text>

        <View style={styles.dotContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Start')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}