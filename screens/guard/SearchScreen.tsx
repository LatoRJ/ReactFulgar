import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ShopCard from '../../components/ShopCard';
import { watchShops } from '../../components/Datas/data';
import Categories from '../../components/Categories';
import Keywords from '../../components/Keywords';

const SearchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { searchQuery: initialSearchQuery, setSearchQuery } = route.params || {};
  
  const [searchQuery, setLocalSearchQuery] = useState(initialSearchQuery || '');
  const [filteredShops, setFilteredShops] = useState([]);
  const [recentKeywords, setRecentKeywords] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const filterShops = () => {
      const filtered = watchShops.filter(shop =>
        (shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.brand.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategory === 'All' || shop.brand.toLowerCase() === selectedCategory.toLowerCase())
      );
      setFilteredShops(filtered);
    };
    filterShops();
  }, [searchQuery, selectedCategory]);

  const handleSearch = (text) => {
    setLocalSearchQuery(text);
  };

  const handleBackPress = () => {
    if (setSearchQuery) setSearchQuery(''); 
    navigation.goBack();
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    if (category !== 'All' && !recentKeywords.includes(category)) {
      setRecentKeywords([category, ...recentKeywords]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder="Search watches, shops"
        />
        
        <Categories
          categories={['All', 'Rolex', 'Cartier', 'Omega', 'Breitling', 'Casio']}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryPress}
        />
        
        <Keywords
          recentKeywords={recentKeywords}
          onKeywordPress={handleCategoryPress}
        />

        <FlatList
          data={filteredShops}
          renderItem={({ item }) => <ShopCard item={item} onPress={() => {}} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.shopsList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E5E5A9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  shopsList: {
    paddingBottom: 15,
  },
});

export default SearchScreen;
