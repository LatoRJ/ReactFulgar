import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, TabRouter, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/GettingStarted1';
import Home from '../screens/GettingStarted2';
import About from '../screens/GettingStarted3';
import Start from '../screens/Start';
import CustomHeader from '../components/CustomHeader';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function CustomTabs() {
  const Tabs = createBottomTabNavigator();

  const screenTabOptions = ({route}: any) => ({
    header: () => <CustomHeader />,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({ focused, color, size }: any) => {
      if(route.name === "Index") {
        if(focused) {
          return <Entypo name ="index" size={20} color={color} />
        }

        return <AntDesign name = "index" size={20} color={color} />
      }else if(route.name === "Home") {
        if(focused) {
          return <AntDesign name ="home" size={20} color={color} />
        }

        return <Feather name = "home" size={20} color={color} />
        }else if(route.name === "About") {
          if(focused) {
            return <AntDesign name ="infocirlce" size={20} color={color} />
          }
  
          return <AntDesign name = "infocirlceo" size={20} color={color} />
          }else if(route.name === "Start") {
            if(focused) {
              return <AntDesign name ="playcircle" size={20} color={color} />
            }
    
            return <AntDesign name = "playcircle" size={20} color={color} />
            }
      }
  })

  return (
    <Tabs.Navigator 
      screenOptions = {screenTabOptions}>
        <Tabs.Screen 
          name = 'Index'
          component = {() => (<Index />)}
          />
        <Tabs.Screen 
          name = 'Home'
          component = {() => (<Home />)}
          />
          <Tabs.Screen 
          name = 'About'
          component = {() => (<About />)}
          />
          <Tabs.Screen 
          name = 'Start'
          component = {() => (<Start />)}
          />
      </Tabs.Navigator>
  )
}

export default function Layout() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'HomeTab'>
        <Stack.Screen
          name = 'HomeTab'
          component = { () => <CustomTabs />}
          options = {{
            headerShown: false}}
          />        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

