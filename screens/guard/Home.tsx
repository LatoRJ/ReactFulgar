import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import ShopCard from '../../components/ShopCard';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: '1', name: 'All', image: 'https://via.placeholder.com/30/808080' },
    { id: '2', name: 'Rolex', image: 'https://via.placeholder.com/30/808080' },
    { id: '3', name: 'Cartier', image: 'https://via.placeholder.com/30/808080' },
    { id: '4', name: 'Omega', image: 'https://via.placeholder.com/30/808080' },
    { id: '5', name: 'Breitling', image: 'https://via.placeholder.com/30/808080' },
    { id: '6', name: 'Casio', image: 'https://via.placeholder.com/30/808080' },
  ];

  const watchShops = [
    { id: '1', name: 'Rose Garden Watch Shop', brand: 'Rolex', rating: 4.7, freeDelivery: true, time: '20 min', image: 'https://via.placeholder.com/100/808080' },
    { id: '2', name: 'Halal Lob Watch Emporium', brand: 'Cartier', rating: 4.5, freeDelivery: false, time: '15 min', image: 'https://via.placeholder.com/100/808080' },
    { id: '3', name: 'Chikan-Richa Watch Boutique', brand: 'Omega', rating: 4.2, freeDelivery: true, time: '25 min', image: 'https://via.placeholder.com/100/808080' },
    { id: '4', name: 'Wings Watch Haven', brand: 'Breitling', rating: 4.8, freeDelivery: false, time: '30 min', image: 'https://via.placeholder.com/100/808080' },
    { id: '5', name: 'Burger Timepiece Store', brand: 'Casio', rating: 4.0, freeDelivery: true, time: '18 min', image: 'https://via.placeholder.com/100/808080' },
    { id: '6', name: 'Luxury Time Shop', brand: 'Rolex', rating: 4.6, freeDelivery: false, time: '22 min', image: 'https://via.placeholder.com/100/808080' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleShopPress = (shop) => {
    Alert.alert('Shop Selected', `You clicked on ${shop.name}`);
  };

  const filteredShops = watchShops.filter(shop =>
    (selectedCategory === 'All' || shop.brand === selectedCategory) &&
    (shop.name.toLowerCase().includes(searchQuery) ||
    shop.brand.toLowerCase().includes(searchQuery))
  );

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Categories 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <View style={styles.shopsHeader}>
        <Text style={styles.shopsTitle}>Open Watch Shops</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredShops}
        renderItem={({ item }) => <ShopCard item={item} onPress={handleShopPress} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.shopsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  shopsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  shopsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#FF6200',
    fontWeight: '500',
  },
  shopsList: {
    paddingBottom: 15,
  },
});

export default Home;