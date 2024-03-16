import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import Home from './src/screen/Home';
import AddForm from './src/screen/AddForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const handleUserAction = async () => {
    const user = await AsyncStorage.getItem('user');
    if(user){
      navigationRef.resetRoot({
      index: 0,
      routes: [{name: 'login'}],
    });
    }
    
  };
  React.useEffect(() => {
   
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
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="post" component={AddForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
