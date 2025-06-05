import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { getOrder, clearOrder } from '../cart/cartOrderStorager'; 
import { AntDesign } from '@expo/vector-icons';

const Payment = ({ navigation }) => {
  const [order, setOrder] = useState({ items: [], total: 0, deliveryAddress: '' });

  useEffect(() => {
    const orderData = getOrder();
    if (orderData) {
      setOrder(orderData);
    }
  }, []);

  const handleDone = () => {
    clearOrder(); 
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      <ScrollView style={styles.cartContent}>
        {order.items.length > 0 ? (
          order.items.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <View style={styles.itemImagePlaceholder} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
              </View>
              <View style={styles.quantityControl}>
                <Text style={styles.quantityValue}>{item.quantity}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>No items to display</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomSection}>
        <View style={styles.deliveryAddressContainer}>
          <View style={styles.addressHeader}>
            <Text style={styles.addressLabel}>DELIVERY ADDRESS</Text>
          </View>
          <TextInput
            style={styles.addressInput}
            value={order.deliveryAddress}
            editable={false}
            placeholder="Enter delivery address"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.totalSection}>
          <View style={styles.totalDetails}>
            <Text style={styles.totalLabel}>TOTAL:</Text>
            <Text style={styles.totalPrice}>${order.total}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneText}>PAY & CONFIRM</Text>
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
  doneButton: {
    backgroundColor: '#00C853', // Green color for "Done" button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  doneText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Payment;