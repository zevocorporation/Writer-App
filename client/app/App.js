
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Image,Touchable, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homeScreen'
import CartScreen from './screens/cartScreen'

import Button from './components/button'

import Logo from './assets/favicon.png'

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={Logo}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen initialParams={{ name: 'demo' }} name="Home" component={HomeScreen} 
        options={{
          headerTitle:  props => <LogoTitle/>, 
          
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: props => <Button title="Login" />
        }} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


