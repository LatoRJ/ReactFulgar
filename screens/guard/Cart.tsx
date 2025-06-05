import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from '../../styles/styles'; 

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>This is the Cart Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
