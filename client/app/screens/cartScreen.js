import React from 'react';
import { Text, View, Button } from 'react-native';

export default function HomeScreen({route, navigation}) {
  const {age,name} = route.params

    return (  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> {name} and age :{age}</Text>
        <Button
        title="Cart again"
        onPress={() => navigation.push('Cart')}
      />
       <Button title="Go back" onPress={() => navigation.goBack()} />
       <Button
        title="Home"
        onPress={() => navigation.popToTop()}
      />
      </View>
    );
  }




