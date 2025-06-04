import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../components/SearchBar';

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

  const filteredShops = watchShops.filter(shop =>
    shop.name.toLowerCase().includes(searchQuery) ||
    shop.brand.toLowerCase().includes(searchQuery)
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.name && styles.categoryButtonSelected,
      ]}
      onPress={() => {
        setSelectedCategory(item.name);
        navigation.navigate('WatchList', { category: item.name });
      }}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.name && styles.categoryTextSelected,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderShop = ({ item }) => (
    <View style={styles.shopContainer}>
      <Image source={{ uri: item.image }} style={styles.shopImage} />
      <View style={styles.shopDetails}>
        <Text style={styles.shopName}>{item.name}</Text>
        <Text style={styles.shopBrand}>{item.brand}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FF6200" style={styles.icon} />
          <Text style={styles.rating}>{item.rating}</Text>
          {item.freeDelivery && (
            <>
              <MaterialCommunityIcons name="truck-fast-outline" size={16} color="#FF6200" style={styles.icon} />
              <Text style={[styles.freeDelivery, { color: 'black' }]}>Free</Text>
            </>
          )}
          <Ionicons name="time" size={16} color="#FF6200" style={styles.icon} />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.categoriesHeader}>
        <Text style={styles.categoriesTitle}>All Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <View style={styles.shopsHeader}>
        <Text style={styles.shopsTitle}>Open Watch Shops</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredShops}
        renderItem={renderShop}
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
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoriesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#FF6200',
    fontWeight: '500',
  },
  categoriesContainer: {
    marginBottom: 15,
  },
  categoriesList: {
    paddingHorizontal: 0,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F7FA',
    marginRight: 10,
  },
  categoryButtonSelected: {
    backgroundColor: '#FF6200',
  },
  categoryImage: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  categoryTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
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
  shopsList: {
    paddingBottom: 15,
  },
  shopContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  shopImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  shopDetails: {
    flex: 1,
  },
  shopName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  shopBrand: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    marginRight: 2,
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  freeDelivery: {
    fontSize: 14,
    color: '#FF6200',
    marginRight: 10,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default Home;