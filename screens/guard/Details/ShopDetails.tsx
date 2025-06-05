import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { products } from '../../../components/Datas/data';
import ProductCard from '../../../components/ProductCard';

const ShopDetails = ({ route, navigation }) => {
  const { shop } = route.params;

  const shopProducts = products.filter(product => product.brand === shop.brand);

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>

      <Image source={{ uri: shop.image }} style={styles.image} />

      <View style={styles.infoSection}>
        <Text style={styles.name}>{shop.name}</Text>
        <Text style={styles.brand}>{shop.brand}</Text>
        <Text style={styles.description}>{shop.description}</Text>

        <View style={styles.detailsRow}>
          <View style={styles.iconDetail}>
            <AntDesign name="star" size={16} color="#FFB800" />
            <Text style={styles.detailText}>{shop.rating}</Text>
          </View>
          <View style={styles.iconDetail}>
            <MaterialCommunityIcons name="truck-fast-outline" size={16} color="#666" />
            <Text style={styles.detailText}>{shop.freeDelivery ? 'Free' : 'Paid'}</Text>
          </View>
          <View style={styles.iconDetail}>
            <Ionicons name="time" size={16} color="#666" />
            <Text style={styles.detailText}>{shop.time}</Text>
          </View>
        </View>

        <View style={styles.productsHeader}>
          <Text style={styles.sectionTitle}>Products</Text>
        </View>

        <FlatList
          data={shopProducts}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => handleProductPress(item)} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          contentContainerStyle={styles.productsList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 16,
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ccc',
  },
  infoSection: {
    padding: 16,
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  brand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    marginBottom: 20,
  },
  iconDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#444',
  },
  productsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  productsList: {
    paddingBottom: 15,
  },
  productRow: {
    justifyContent: 'space-between',
  },
});

export default ShopDetails;