import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function About() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer} />
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
  const styles = {
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingBottom: 24,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
    header: {
      alignItems: 'center',
      marginTop: 60,
    },
    imageContainer: {
      width: 250,
      height: 330,
      backgroundColor: '#000000',
      borderRadius: 12,
      marginBottom: 40,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 16,
      color: '#2E2E2E',
    },
    subtitle: {
      fontSize: 14,
      textAlign: 'center',
      color: '#666',
      marginBottom: 30,
    },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
    },
    dot: {
      marginHorizontal: 4,
    },
    activeDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#000000',
    },
    inactiveDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#696969',
    },
    buttonContainer: {
      alignItems: 'center',
    },
    nextButton: {
      backgroundColor: '#000000',
      paddingVertical: 14,
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
      marginBottom: 45,
    },
    nextButtonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
  };