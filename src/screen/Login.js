import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({navigation}) => {
    // const navigation = useNavigation()
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onPressSubmit = async () => {
    if(emailInput === '' && passwordInput === ''){
        await AsyncStorage.setItem("user", emailInput )
       const user = await AsyncStorage.getItem("user" )
       console.log("user ++ " , user)
       navigation.navigate('home')
    }else{
        Alert.alert("please fil required fields")
    }
    

  };
  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
      <TextInput
        placeholder="email"
        onChangeText={(e)=>setEmailInput(e)}
        value={emailInput}
      />
      <TextInput
        placeholder="password"
        onChangeText={(p)=>setPasswordInput(p)}
        value={passwordInput}
        secureTextEntry
      />
      <Button onPress={onPressSubmit} title="Login" color="#841584" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container:{
        margin:30
    }
});
