import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { 
  NavigationContainer, 
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import Home from '../screens/Home';
import About from '../screens/About';


export default function Layout() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='index' component { () => (<Index />)}/>
        <Stack.Screen name ='home' component { () => (<Home />)}/>
        <Stack.Screen name ='about' component { () => (<About />)}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

