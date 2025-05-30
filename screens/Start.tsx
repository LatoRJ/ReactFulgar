import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/styles';

export default function Start() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginTitle}>Log In</Text>
        <Text style={styles.loginSubtitle}>Please sign in to your existing account</Text>
      </View>

      <View style={styles.formContainer}>
        {/* Email Input */}
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

        {/* Password Input */}
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
              <Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={20}
                color="#A9A9A9"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Remember Me and Forgot Password */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && <Icon name="check" size={14} color="#FFF" />}
            </View>
            <Text style={styles.checkboxText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        {/* Log In Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <Text style={styles.orText}>Or</Text>

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3B5998' }]}>
            <FontAwesome name="facebook" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}>
            <FontAwesome name="twitter" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#000' }]}>
            <FontAwesome name="apple" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}