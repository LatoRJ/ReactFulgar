import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GettingStarted1 from '../screens/GettingStarted1';
import GettingStarted2 from '../screens/GettingStarted2';
import GettingStarted3 from '../screens/GettingStarted3';
import Start from '../screens/Start';
import SignUp from '../screens/SignUp';
import CustomHeader from '../components/CustomHeader';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/guard/Home';
import Contact from '../screens/guard/Contact';
import Profile from '../screens/guard/Profile';
import Settings from '../screens/guard/Settings';
import Landing from '../screens/landing';

function CustomTabs() {
  const Tabs = createBottomTabNavigator();

  const screenTabOptions = ({ route }: any) => ({
    header: () => <CustomHeader />,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({ focused, color, size }: any) => {
      if (route.name === "Home") {
        return focused 
          ? <Entypo name="home" size={20} color={color} />
          : <AntDesign name="home" size={20} color={color} />;
      } else if (route.name === "Contact") {
        return focused 
          ? <Entypo name="phone" size={20} color={color} />
          : <AntDesign name="phone" size={20} color={color} />;
      } else if (route.name === "Profile") {
        return <AntDesign name="user" size={20} color={color} />;
      } else if (route.name === "Settings") {
        return focused
          ? <Ionicons name="settings" size={20} color={color} />
          : <AntDesign name="setting" size={20} color={color} />;
      }
    },
  });

  return (
    <Tabs.Navigator screenOptions={screenTabOptions}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Contact" component={Contact} />
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
}

export default function Layout() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing" // 👈 Start with the splash screen
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="GettingStarted1" component={GettingStarted1} />
        <Stack.Screen name="GettingStarted2" component={GettingStarted2} />
        <Stack.Screen name="GettingStarted3" component={GettingStarted3} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CustomTabs" component={CustomTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}