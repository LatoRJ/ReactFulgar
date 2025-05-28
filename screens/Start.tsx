import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Start() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.title}>Log In</Text>
        <Text style = {styles.subtitle}>Please sign in to your existing account</Text>
      </View>

      <View style = {styles.formcontainer}>
        <View style = {styles.inputContaier}>
          <Text style = {styles.label}>EMAIL</Text>
          <TextInput style = {styles.input}
          placeholder='example@gmail.com'
          placeholderTextColor='#A9A9A9'
          /> 
        </View>

        <View style = {styles.inputContaier}>
          <Text style = {styles.label}>PASSWORD</Text>
          <View style = {styles.passwordContainer}>
            <TextInput
              style = {[styles.input, { flex: 1 }]}
              placeholder='••••••••'
              placeholderTextColor= "#A9A9A9"
            />
            <TouchableOpacity style = {styles.eyeIcon}>
              <MaterialIcon name='eye-off' 
              size={20} 
              color='#A9A9A9' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle:{
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  formcontainer: {
    marginTop: 30,
  },
  inputContaier: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F5F7FA',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    backgroundColor: '#F5F7FA',
  },
  eyeIcon: {
    padding: 12,
  }
  });
