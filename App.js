import React, { useEffect } from 'react'
import { View } from 'react-native'
import Navigator from './src/router/navigator'
import NavigatorWithoutToken from './src/router/navigatorWithoutToken'
import { userStore } from './src/stores/user'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const token = userStore.useState((s) => s.token)
  useEffect(() => {
    AsyncStorage.getItem('token')
      .then((val) => {
        userStore.update((s) => {
          s.token = val
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <View style={{ flex: 1 }}>
      {token ? <Navigator /> : <NavigatorWithoutToken />}
    </View>
  )
}
export default App
