import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch, onPress, value }) => {
  const handleSearch = (text) => {
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <TouchableOpacity style={styles.searchContainer} onPress={onPress}>
      <View style={styles.searchInputContainer}>
        <Ionicons name="search" size={20} color="#A9A9A9" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={value}
          onChangeText={handleSearch}
          placeholder="Search watches, shops"
          placeholderTextColor="#A9A9A9"
          editable={false} 
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginBottom: 15,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5A9',
    borderRadius: 8,
    backgroundColor: '#F5F7FA',
    height: 40,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;