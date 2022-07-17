import * as React from 'react'
import { View } from 'react-native'
import Navigator from './src/router/navigator'
import LoginScreen from './src/screens/LoginScreen'
import { userStore } from './src/stores/user'

const App = () => {
  const token = userStore.useState((s) => s.token)
  return (
    <View style={{ flex: 1 }}>{token ? <Navigator /> : <LoginScreen />}</View>
  )
}
export default App
