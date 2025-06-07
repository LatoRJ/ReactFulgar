import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/styles';
import api from '../api';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async () => {
  if (!name || !email || !password || !retypePassword) {
    Alert.alert('Error', 'Please fill all fields');
    return;
  }

  if (password !== retypePassword) {
    Alert.alert('Error', 'Passwords do not match');
    return;
  }

  setLoading(true);

  try {
    const response = await api.post('/register', {
      name,
      email,
      password,
      password_confirmation: retypePassword,
    });

    Alert.alert('Success', 'Account created successfully');
    navigation.goBack(); // Or go to login screen
  } catch (error) {
    const data = error.response?.data;

    if (data?.errors) {
      const messages = Object.values(data.errors)
        .map((msgArr) => msgArr.join('\n'))
        .join('\n');
      Alert.alert('Registration Failed', messages);
    } else {
      Alert.alert('Registration Failed', data?.message || 'Please try again.');
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <SafeAreaView style={styles.signupScreenContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.signupHeader}>
        <Text style={styles.signupTitle}>Sign Up</Text>
        <Text style={styles.signupSubtitle}>Please sign up to get started</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>NAME</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="#A9A9A9"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="#A9A9A9"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>PASSWORD</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="••••••••"
              placeholderTextColor="#A9A9A9"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Feather
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={20}
                color="#A9A9A9"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>RE-TYPE PASSWORD</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="••••••••"
              placeholderTextColor="#A9A9A9"
              value={retypePassword}
              onChangeText={setRetypePassword}
              secureTextEntry={!retypePasswordVisible}
            />
            <TouchableOpacity onPress={() => setRetypePasswordVisible(!retypePasswordVisible)}>
              <Feather
                name={retypePasswordVisible ? 'eye' : 'eye-off'}
                size={20}
                color="#A9A9A9"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignUp}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        )}
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}