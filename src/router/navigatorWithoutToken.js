import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const HomeStack = createNativeStackNavigator()

export default function NavigatorWithoutToken() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          orientation: 'portrait',
          headerShown: false
        }}>
        <HomeStack.Screen name="LoginScreen" component={LoginScreen} />
        <HomeStack.Screen name="RegisterScreen" component={RegisterScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}
