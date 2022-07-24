import React, { useRef, useEffect } from 'react'
import { Text, Animated } from 'react-native'
import container from '../assets/container'
import text from '../assets/text'

export const Notification = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View style={[container.notification, { opacity: fadeAnim }]}>
      <Text style={text.notificationText}>{props.text}</Text>
    </Animated.View>
  )
}
