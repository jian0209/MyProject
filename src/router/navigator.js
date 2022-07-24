import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import IndexScreen from '../screens/IndexScreen'
import RegisterScreen from '../screens/RegisterScreen'

const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        orientation: 'portrait'
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="UserScreen" component={UserScreen} />
    </HomeStack.Navigator>
  )
}

const SettingsStack = createNativeStackNavigator()

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        orientation: 'portrait'
      }}>
      <SettingsStack.Screen name="IndexScreen" component={IndexScreen} />
      <SettingsStack.Screen name="UserScreen" component={UserScreen} />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            title: ''
          }}
        />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
