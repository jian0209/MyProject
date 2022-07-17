import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Notification } from '../components/notification'
import container from '../assets/container'

export default function IndexScreen({ navigation }) {
  return (
    <View style={container.mainContainer}>
      <Text>Index Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UserScreen')
        }}>
        <Text>Go to user scre123en</Text>
      </TouchableOpacity>
      <Notification text={'asdqwe'} />
    </View>
  )
}
