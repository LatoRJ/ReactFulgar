import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShopCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.shopContainer} onPress={() => onPress(item)}>
      <View style={styles.shopDetails}>
        <Text style={styles.shopName}>{item.shop || 'Unknown Brand'}</Text>
        <Text style={styles.shopBrand}>{item.name || 'No Shop Info'}</Text>
        <View style={styles.ratingContainer}>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  shopImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  shopDetails: {
    flex: 1,
  },
  shopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  shopBrand: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    marginRight: 2,
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  freeDelivery: {
    fontSize: 14,
    color: '#FF6200',
    marginRight: 10,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default ShopCard;