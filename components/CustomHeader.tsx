import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons as Icon } from '@expo/vector-icons'
import { MaterialCommunityIcons as MaterialIcon } from '@expo/vector-icons'

export default function CustomHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.deliveryContainer}>
          <Icon name="menu" size={24} color="#000" />
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.deliverTo}>DELIVER TO</Text>
            <Text style={styles.location}>Halal Lab office ▼</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cartIconContainer}>
          <MaterialIcon name="shopping-outline" size={24} color="#fff" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Hey Halal, <Text style={styles.greetingBold}>Good Afternoon!</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTextContainer: {
    marginLeft: 10,
  },
  deliverTo: {
    fontSize: 12,
    color: '#666',
  },
  location: {
    fontSize: 14,
    fontWeight: '600',
  },
  cartIconContainer: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  greetingContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  greetingText: {
    fontSize: 16,
    color: '#333',
  },
  greetingBold: {
    fontWeight: 'bold',
  },
})