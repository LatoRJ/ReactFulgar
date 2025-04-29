import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, TabRouter, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GettingStarted1 from '../screens/GettingStarted1';
import GettingStarted2 from '../screens/GettingStarted2';
import GettingStarted3 from '../screens/GettingStarted3';
import Start from '../screens/Start';
import CustomHeader from '../components/CustomHeader';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { AntDesign, Entypo, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/guard/Home';
import Contact from '../screens/guard/Contact';
import Profile from '../screens/guard/Profile';
import Settings from '../screens/guard/Settings';

function CustomTabs() {
  const Tabs = createBottomTabNavigator();

  const screenTabOptions = ({route}: any) => ({
    header: () => <CustomHeader />,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({ focused, color, size }: any) => {
      if(route.name === "Home") {
        if(focused) {
          return <Entypo name ="home" size={20} color={color} />
        }

        return <AntDesign name = "home" size={20} color={color} />
      }else if(route.name === "Contact") {
        if(focused) {
          return <Entypo name ="phone" size={20} color={color} />
        }

        return <AntDesign name = "phone" size={20} color={color} />
        }else if(route.name === "Profile") {
          if(focused) {
            return <AntDesign name ="user" size={20} color={color} />
          }
  
          return <AntDesign name = "user" size={20} color={color} />
          }else if(route.name === "Settings") {
            if(focused) {
              return <Ionicons name ="settings" size={20} color={color} />
            }
    
            return <AntDesign name = "setting" size={20} color={color} />
            }
      }
  })

  return (
    <Tabs.Navigator 
      screenOptions = {screenTabOptions}
    >
        <Tabs.Screen 
          name = 'Home'
          component = {() => (<Home />)}
          />
        <Tabs.Screen 
          name = 'Contact'
          component = {() => (<Contact />)}
          />
          <Tabs.Screen 
          name = 'Profile'
          component = {() => (<Profile />)}
          />
        <Tabs.Screen 
          name = 'Settings'
          component = {() => (<Settings />)}
          />
      </Tabs.Navigator>
  )
}

export default function Layout() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'GettingStarted1'
      screenOptions={{
        headerShown:false
      }}
      
        >
        {/*<Stack.Screen
          name = 'HomeTab'
          component = { () => <CustomTabs />}
          options = {{
            headerShown: false}}
          /> 
          <Stack.Screen></Stack.Screen>   */}

          <Stack.Screen 
          name = 'GettingStarted1'
          component = {() => (<GettingStarted1 />)}
          />
        <Stack.Screen 
          name = 'GettingStarted2'
          component = {() => (<GettingStarted2 />)}
          />
          <Stack.Screen 
          name = 'GettingStarted3'
          component = {() => (<GettingStarted3 />)}
          />
          <Stack.Screen 
          name = 'Start'
          component = {CustomTabs}
          />    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

