import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const watchShops = [
  { id: '1', name: 'Rose Garden Watch Shop', brand: 'Rolex', rating: 4.7, price: '$40', image: 'https://via.placeholder.com/100/808080' },
  { id: '2', name: 'Halal Lob Watch Emporium', brand: 'Cartier', rating: 4.5, price: '$60', image: 'https://via.placeholder.com/100/808080' },
  { id: '3', name: 'Chikan-Richa Watch Boutique', brand: 'Omega', rating: 4.2, price: '$75', image: 'https://via.placeholder.com/100/808080' },
  { id: '4', name: 'Wings Watch Haven', brand: 'Breitling', rating: 4.8, price: '$94', image: 'https://via.placeholder.com/100/808080' },
  { id: '5', name: 'Burger Timepiece Store', brand: 'Casio', rating: 4.0, price: '$30', image: 'https://via.placeholder.com/100/808080' },
  { id: '6', name: 'Luxury Time Shop', brand: 'Rolex', rating: 4.6, price: '$50', image: 'https://via.placeholder.com/100/808080' },
];

const WatchList = () => {
  const route = useRoute();
  const { category } = route.params;

  const filteredShops = category === 'All' ? watchShops : watchShops.filter(shop => shop.brand === category);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{category === 'All' ? 'Popular Watches' : `${category} Watches`}</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredShops}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.shopCard}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.shopName}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.openSection}>
              <Text style={styles.sectionTitle}>Open Watch Shops</Text>
              <View style={styles.shopCard}>
                <Image source={{ uri: 'https://via.placeholder.com/100/808080' }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.shopName}>Tasty Treat Gallery</Text>
                  <Text style={styles.subText}>⭐ {4.5} • 30 min</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
  shopCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#E0E0E0', 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 10,
    height: 100,
    justifyContent: 'space-between'
  },
  image: { width: 80, height: 80, marginRight: 10 },
  infoContainer: { flex: 1, justifyContent: 'space-between' },
  shopName: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 16, color: '#FF6200' },
  addButton: { 
    backgroundColor: '#FF6200', 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  addText: { color: '#fff', fontSize: 20 },
  openSection: { marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  subText: { fontSize: 14, color: '#666' },
});