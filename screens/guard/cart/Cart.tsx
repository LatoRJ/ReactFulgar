import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { getCartItems, updateQuantity } from '../cart/cartStorage';
import { AntDesign } from '@expo/vector-icons';
import { storeOrder } from '../cart/cartOrderStorager'; 

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('2118 Thornridge Cir, Syracuse');

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    const calculatedTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(calculatedTotal);
  }, []); 

  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    if (item && item.quantity < item.stocks) {
      updateQuantity(itemId, item.quantity + 1);
      const updatedItems = getCartItems();
      setCartItems(updatedItems);
      setTotal(updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    if (item && item.quantity > 0) {
      updateQuantity(itemId, item.quantity - 1);
      const updatedItems = getCartItems();
      setCartItems(updatedItems);
      setTotal(updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0));
    }
  };

  const handlePlaceOrder = () => {
    const orderData = { items: cartItems, total, deliveryAddress };
    storeOrder(orderData); // Store the order in the temporary backend
    navigation.navigate('Payment');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cart</Text>
        <Text style={styles.editText}>EDIT ITEMS</Text>
      </View>

      <ScrollView style={styles.cartContent}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <View style={styles.itemImagePlaceholder} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>
              <View style={styles.quantityControl}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleDecreaseQuantity(item.id)}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityValue}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleIncreaseQuantity(item.id)}
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomSection}>
        <View style={styles.deliveryAddressContainer}>
          <View style={styles.addressHeader}>
            <Text style={styles.addressLabel}>DELIVERY ADDRESS</Text>
            <TouchableOpacity>
              <Text style={styles.editAddress}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.addressInput}
            value={deliveryAddress}
            onChangeText={setDeliveryAddress}
            placeholder="Enter delivery address"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.totalSection}>
          <View style={styles.totalDetails}>
            <Text style={styles.totalLabel}>TOTAL:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.breakdownText}>Breakdown</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E2F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#1E1E2F',
  },
  backButton: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#333',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  editText: {
    color: '#FF6200',
    fontSize: 14,
    fontWeight: '500',
  },
  cartContent: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  itemImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  itemPrice: {
    color: '#FF6200',
    fontSize: 16,
    fontWeight: '600',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#FF6200',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  quantityText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  quantityValue: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  bottomSection: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 40,
  },
  deliveryAddressContainer: {
    marginBottom: 20,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addressLabel: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  addressInput: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    color: '#666',
    fontSize: 14,
  },
  editAddress: {
    color: '#FF6200',
    fontSize: 14,
    fontWeight: '500',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 5,
  },
  totalPrice: {
    color: '#333',
    fontSize: 24,
    fontWeight: '600',
  },
  breakdownText: {
    color: '#FF6200',
    fontSize: 14,
    fontWeight: '500',
  },
  placeOrderButton: {
    backgroundColor: '#FF6200',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Cart;