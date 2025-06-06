import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/styles';
import { useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);

  const ApiKey = 'http://192.168.0.221:8000/api/store';

      const handleRegister = async () => {
        try {
          const response = await axios.post(ApiKey, { 
            name,
            email,
            password,
            password_confirmation: password,
          });

          if (response.status === 200 || response.status === 201 || response.status === 204) {
            Alert.alert('Success', 'Registration successful!');
    
          } else {
            Alert.alert('Error', 'Unexpected response from server');
          }
        } catch (error) {
        console.log("error send",error);
        Alert.alert('Registration Failed', 'Please check your inputs or try again later.')
        }
      };


  const navigation = useNavigation();

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

        <TouchableOpacity onPress={handleRegister} style={styles.signupButton}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}