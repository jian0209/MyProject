import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function UserScreen({ navigation }) {
  return (
    <View>
      <Text>USer Screen</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('HomeScreen')
      }}>
        <Text>Go to home screen</Text>
      </TouchableOpacity>
    </View>
  );
}