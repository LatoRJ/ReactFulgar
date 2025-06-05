import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import ShopCard from '../../components/ShopCard';
import ProductCard from '../../components/ProductCard';
import { categories, watchShops, products } from '../../components/Datas/data';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleShopPress = (shop) => {
    navigation.navigate('ShopDetails', { shop }); 
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  const handleSearchBarPress = () => {
    navigation.navigate('SearchScreen', { searchQuery, setSearchQuery });
  };

  useFocusEffect(
    useCallback(() => {
      setSearchQuery('');
    }, [])
  );

  const filteredShops = watchShops.filter(shop =>
    (selectedCategory === 'All' || shop.brand === selectedCategory) &&
    (shop.name.toLowerCase().includes(searchQuery) ||
    shop.brand.toLowerCase().includes(searchQuery))
  );

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'All' || product.brand === selectedCategory) &&
    (product.name.toLowerCase().includes(searchQuery) ||
    product.brand.toLowerCase().includes(searchQuery))
  );

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} onPress={handleSearchBarPress} value={searchQuery} />
      <Categories 
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <View style={styles.productsHeader}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handleProductPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productsList}
      />
      <View style={styles.shopsHeader}>
        <Text style={styles.sectionTitle}>Open Watch Shops</Text>
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
  productsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  shopsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  sectionTitle: {
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
  productsList: {
    paddingBottom: 15,
  },
  productRow: {
    justifyContent: 'space-between',
  },
});

export default Home;