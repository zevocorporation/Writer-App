import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
  );
}




  const styles = StyleSheet.create({
    // ...
    buttonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12,
      maxWidth: 180
    },
    buttonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  })