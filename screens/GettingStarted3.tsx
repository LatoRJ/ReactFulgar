import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

export default function GettingStarted3() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.imageContainer}>
            <Image
              source={require('../assets/img3.png')} // change to your image path
              style={styles.image}
              resizeMode="cover"/>
          </View>
        <Text style={styles.title}>Your Next Favorite Watch Awaits</Text>
        <Text style={styles.subtitle}>Start exploring exclusive collections,{'\n'}top brands, and limited-edition pieces — only a tap away.</Text>

        <View style={styles.dotContainer}>
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Start')}>
          <Text style={styles.nextButtonText}>EXPLORE NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}