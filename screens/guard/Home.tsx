import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import ShopCard from '../../components/ShopCard';
import ProductCard from '../../components/ProductCard';

const API_BASE_URL = 'http://192.168.31.152:8000/api'; // <-- Replace with your backend IP


const Home = () => {
  const navigation = useNavigation();
const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
const [products, setProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('All');  
const [searchQuery, setSearchQuery] = useState('');
const [loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/brands`);
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    const data = await response.json();
    setCategories(data);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

useEffect(() => {
  fetch(`${API_BASE_URL}/categories`)
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(err => console.error('Failed to fetch categories:', err));
}, []);

useEffect(() => {
  fetch(`${API_BASE_URL}/brands`)
    .then(res => res.json())
    .then(data => setBrands(data))
    .catch(err => console.error(err));
}, []);


  
  useEffect(() => {
    setLoading(true);
    Promise.all([fetchBrands(), fetchProducts(), fetchCategories()]).then(() => setLoading(false));
  }, []);


  useFocusEffect(
    useCallback(() => {
      setSearchQuery('');
    }, [])
  );

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleShopPress = (brand) => {
    navigation.navigate('ShopDetails', { brand }); 
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  const handleSearchBarPress = () => {
    navigation.navigate('SearchScreen', { searchQuery, setSearchQuery });
  };

  // Filter brands by selectedCategory and search query
  const filteredBrands = brands.filter((brand) =>
    (selectedCategory === 'All' || brand.name === selectedCategory) &&
    (
      brand.name.toLowerCase().includes(searchQuery) ||
      brand.shop.toLowerCase().includes(searchQuery)
    )
  );

  // Filter products similarly
  const filteredProducts = products.filter((product) =>
    (selectedCategory === 'All' || product.brand === selectedCategory) &&
    (
      product.name.toLowerCase().includes(searchQuery) ||
      product.brand.toLowerCase().includes(searchQuery)
    )
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF6200" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SearchBar onSearch={handleSearch} onPress={handleSearchBarPress} value={searchQuery} />
      <Categories
        categories={[ ...categories.map(b => b.name)]}
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
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsList}
      />

      <View style={styles.shopsHeader}>
        <Text style={styles.sectionTitle}>Open Watch Shops</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
  {Array.from(new Set(filteredBrands.map(brand => brand.shop))).map((shopName, index) => {
    const shopBrand = filteredBrands.find(b => b.shop === shopName);

    return (
      <ShopCard
        key={index}
        item={shopBrand}
        onPress={() => handleShopPress(shopBrand)}
      />
    );
  })}
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  productsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 20 },
  shopsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  seeAllText: { fontSize: 14, color: '#FF6200', fontWeight: '500' },
  productsList: { paddingLeft: 4, paddingRight: 4, marginBottom: 4, marginTop: 4 },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Home;
