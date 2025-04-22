import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Start() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.deliveryContainer}>
        <View style={styles.iconWrapper}>
            <Icon name="menu" size={24} color="#000" />
        </View>
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.deliverTo}>DELIVER TO</Text>
            <Text style={styles.location}>Stralalelo Stralala ▼</Text>
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
          Hey Kupal, <Text style={styles.greetingBold}>Maayong Adlaw!</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: '#fffff',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#000',
  },
  cartIconContainer: {
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 10,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#696969',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  greetingContainer: {
    marginTop: 20,
  },
  greetingText: {
    fontSize: 16,
    color: '#000',
  },
  greetingBold: {
    fontWeight: 'bold',
  },
  iconWrapper: {
    backgroundColor: '#d1d1cf',
    padding: 8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
