import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import ShopCard from '../../components/ShopCard';
import { categories, watchShops } from '../../components/Datas/data';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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