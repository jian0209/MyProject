import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import button from '../assets/button'
import text from '../assets/text'
import container from '../assets/container'
import textInput from '../assets/textInput'
import color from '../stores/color'
import { userStore } from '../stores/user'
import { login, logout } from '../api/user'
import { Notification } from '../components/notification'

export default function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const [notificationDetails, setNotificationDetails] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginParam, setLoginParam] = useState({})

  const userInfoDict = userStore.useState((s) => s.userInfoDict)
  const token = userStore.useState((s) => s.token)

  useEffect(() => {
    setTimeout(() => {
      setIsNotification(false)
    }, 5000)
  }, [isNotification])

  const loginFunc = async () => {
    setIsLoading(true)
    await login(loginParam)
      .then((res) => {
        if (!res.data.success) {
          setIsNotification(true)
          setNotificationDetails('Username or password is not allowed!')
        } else {
          userStore.update((s) => {
            s.userInfoDict = res.data.message
          })
        }
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const logoutFunc = async () => {
    setIsLoading(true)
    await logout(userInfoDict.UserId)
      .then((res) => {
        // clear token and user info
        userStore.update((s) => {
          s.token = ''
          s.userInfoDict = {}
        })
        AsyncStorage.clear()
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <View style={container.mainContainer}>
      <Text style={text.title}>Home Screen</Text>
      <TouchableOpacity
        style={button.mainBtn}
        disabled={isLoading}
        onPress={() => {
          // navigation.navigate('UserScreen')
          loginFunc()
        }}>
        {isLoading ? (
          <ActivityIndicator color={color.whiteColor} />
        ) : (
          <Text style={text.btnText}>Login Button</Text>
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Enter your username"
        placeholderTextColor={color.whiteColor}
        style={textInput.main}
        value={loginParam.username}
        onChangeText={(val) => {
          setLoginParam({
            username: val,
            password: loginParam.password
          })
        }}
      />
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor={color.whiteColor}
        style={textInput.main}
        value={loginParam.password}
        onChangeText={(val) => {
          setLoginParam({
            username: loginParam.username,
            password: val
          })
        }}
      />
      <TouchableOpacity
        style={button.mainBtn}
        onPress={() => {
          logoutFunc()
        }}>
        <Text>logout</Text>
      </TouchableOpacity>
      {isNotification ? <Notification text={notificationDetails} /> : null}
    </View>
  )
}
