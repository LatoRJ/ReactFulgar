import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShopCard = ({ item }) => {
  return (
    <View style={styles.shopContainer}>
      <Image source={{ uri: item.image }} style={styles.shopImage} />
      <View style={styles.shopDetails}>
        <Text style={styles.shopName}>{item.name}</Text>
        <Text style={styles.shopBrand}>{item.brand}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FF6200" style={styles.icon} />
          <Text style={styles.rating}>{item.rating}</Text>
          {item.freeDelivery && (
            <>
              <MaterialCommunityIcons name="truck-fast-outline" size={16} color="#FF6200" style={styles.icon} />
              <Text style={[styles.freeDelivery, { color: 'black' }]}>Free</Text>
            </>
          )}
          <Ionicons name="time" size={16} color="#FF6200" style={styles.icon} />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
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