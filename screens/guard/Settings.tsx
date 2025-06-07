import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('loggedIn');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Start' }],
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Settings</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
