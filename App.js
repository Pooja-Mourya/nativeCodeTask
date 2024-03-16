import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import Home from './src/screen/Home';
import AddForm from './src/screen/AddForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const handleUserAction = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'home' }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: 'login' }],
          });
        }
      } catch (error) {
        console.error('Error checking user:', error);
      }
    };

    handleUserAction();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="post" component={AddForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
