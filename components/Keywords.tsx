import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Keywords = ({ recentKeywords, onKeywordPress }) => {
  if (!recentKeywords.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Keywords</Text>
      <View style={styles.keywordsContainer}>
        {recentKeywords.map((keyword, index) => (
          <TouchableOpacity key={index} style={styles.keywordButton} onPress={() => onKeywordPress(keyword)}>
            <Text style={styles.keywordText}>{keyword}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keywordButton: {
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  keywordText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Keywords;