import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomHeader() {
  return (
    <SafeAreaView style={styles.safeAreaHeader}>
      <View style={styles.headerContainer}>
        <View style={styles.deliveryContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="menu" size={24} color="#fff" />
          </View>
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.deliverTo}>DELIVER TO</Text>
            <Text style={styles.location}>Stralalelo Stralala ▼</Text>
          </View>
        </View>

        <View style={styles.cartIconContainer}>
          <MaterialIcon name="shopping-outline" size={24} color="#fff" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>0</Text>
          </View>
        </View>
      </View>

      <View style={styles.headerGreetingContainer}>
        <Text style={styles.headerGreetingText}>
          Hey Kupal, <Text style={styles.headerGreetingBold}>Good Afternoon!</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaHeader: {
    backgroundColor: '#FFF',
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTextContainer: {
    marginLeft: 8,
  },
  deliverTo: {
    color: '#000',
    fontSize: 12,
  },
  location: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartIconContainer: {
    backgroundColor: '#4f4f4f',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: '#3d3d3d',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
  },
  iconWrapper: {
    backgroundColor: '#4f4f4f',
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerGreetingContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
  headerGreetingText: {
    fontSize: 20,
    color: '#000',
  },
  headerGreetingBold: {
    fontWeight: 'bold',
    color: '#333',
  },
});
