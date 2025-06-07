import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ product, onPress }) => {
  // Adjust this base URL to your backend if images are stored there
  const imageUrl = product.image?.startsWith('http') ? product.image : `http://192.168.31.152:8000/storage/${product.image}`;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.secondaryName}>{product.brand?.name || 'Unknown Brand'}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.price}>₱{product.price}</Text>
        <TouchableOpacity style={styles.plusButton} onPress={onPress}>
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    height: 250,
    width: 160,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  secondaryName: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  plusButton: {
    backgroundColor: '#FF6200',
    borderRadius: 20,
    padding: 4,
  },
});

export default ProductCard;
