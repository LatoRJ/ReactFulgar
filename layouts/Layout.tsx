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
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function Layout() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Index' component = { () => (<Index />)}/>
        <Stack.Screen name ='Home' component = { () => (<Home />)}/>
        <Stack.Screen name ='About' component = { () => (<About />)}/>
        <Stack.Screen name ='Start' component = { () => (<Start />)}
options={{ headerShown: false , header: () => (
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
              <View style={styles.deliveryContainer}>
                <Icon name="menu" size={24} color="#000" />
                <View style={styles.deliveryTextContainer}>
                  <Text style={styles.deliverTo}>DELIVER TO</Text>
                  <Text style={styles.location}>Halal Lab office ▼</Text>
                </View>
              </View>
      
              <TouchableOpacity style={styles.cartIconContainer}>
                <MaterialIcon name="shopping-outline" size={24} color="#fff" />
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
      
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>
                Hey Halal, <Text style={styles.greetingBold}>Good Afternoon!</Text>
              </Text>
            </View>
          </SafeAreaView>
)}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

