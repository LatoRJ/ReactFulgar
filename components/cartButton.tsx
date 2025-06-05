import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CartButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.addToCartButton} onPress={onPress}>
      <Text style={styles.addToCartText}>ADD TO CART</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addToCartButton: {
    backgroundColor: '#FF6200',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CartButton;