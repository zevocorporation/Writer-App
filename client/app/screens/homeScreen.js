import React from 'react';
import { Button, Text, View } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Cart"
        onPress={() => navigation.navigate('Cart',{name:'sam', age: 66 })}
      />
      </View>
    );
  }




