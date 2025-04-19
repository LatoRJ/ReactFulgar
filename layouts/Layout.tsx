import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { 
  NavigationContainer, 
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import Home from '../screens/Home';
import About from '../screens/About';
import Start from '../screens/Start';


export default function Layout() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Index' component = { () => (<Index />)}/>
        <Stack.Screen name ='Home' component = { () => (<Home />)}/>
        <Stack.Screen name ='About' component = { () => (<About />)}/>
        <Stack.Screen name ='Start' component = { () => (<Start />)}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

