import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import CartButton from '../../../components/cartButton';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>

      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.infoSection}>
        <View style={styles.shopInfo}>
          <Ionicons name="storefront" size={16} color="#FF6200" />
          <Text style={styles.shopText}>{product.brand || 'Watch Shop'}</Text>
        </View>

        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.detailsRow}>
          {product.rating && (
            <View style={styles.iconDetail}>
              <AntDesign name="star" size={16} color="#FFB800" />
              <Text style={styles.detailText}>{product.rating}</Text>
            </View>
          )}

          {product.freeDelivery && (
            <View style={styles.iconDetail}>
              <MaterialIcons name="delivery-dining" size={16} color="#666" />
              <Text style={styles.detailText}>Free</Text>
            </View>
          )}

          {product.time && (
            <View style={styles.iconDetail}>
              <Ionicons name="time" size={16} color="#666" />
              <Text style={styles.detailText}>{product.time}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.priceQuantity}>
          <Text style={styles.price}>₱{product.price * quantity}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.qtyButton} onPress={decreaseQuantity}>
              <AntDesign name="minus" size={16} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.qtyButton} onPress={increaseQuantity}>
              <AntDesign name="plus" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <CartButton onPress={handleAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ccc',
  },
  infoSection: {
    padding: 16,
  },
  shopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  shopText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#FF6200',
    fontWeight: '500',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  iconDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#444',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f3f3f3',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  priceQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  qtyButton: {
    padding: 6,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default ProductDetails;