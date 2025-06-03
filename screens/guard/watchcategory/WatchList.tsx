import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const watchShops = [
  { id: '1', name: 'Rose Garden Watch Shop', brand: 'Rolex', rating: 4.7, image: 'https://via.placeholder.com/100/808080' },
  { id: '2', name: 'Halal Lob Watch Emporium', brand: 'Cartier', rating: 4.5, image: 'https://via.placeholder.com/100/808080' },
  { id: '3', name: 'Chikan-Richa Watch Boutique', brand: 'Omega', rating: 4.2, image: 'https://via.placeholder.com/100/808080' },
  { id: '4', name: 'Wings Watch Haven', brand: 'Breitling', rating: 4.8, image: 'https://via.placeholder.com/100/808080' },
  { id: '5', name: 'Burger Timepiece Store', brand: 'Casio', rating: 4.0, image: 'https://via.placeholder.com/100/808080' },
  { id: '6', name: 'Luxury Time Shop', brand: 'Rolex', rating: 4.6, image: 'https://via.placeholder.com/100/808080' },
];

const WatchList = () => {
  const route = useRoute();
  const { category } = route.params;

  const filteredShops = category === 'All' ? watchShops : watchShops.filter(shop => shop.brand === category);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Watches</Text>
      <FlatList
        data={filteredShops}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.shopCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.shopName}>{item.name}</Text>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default WatchList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  shopCard: { flexDirection: 'row', marginBottom: 10, backgroundColor: '#F5F5F5', padding: 10, borderRadius: 8 },
  image: { width: 80, height: 80, marginRight: 10 },
  shopName: { fontSize: 16, fontWeight: 'bold' },
  brand: { fontSize: 14, color: '#666' },
  rating: { fontSize: 14, color: '#FF6200' },
});
