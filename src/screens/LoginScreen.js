import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet
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
import { height, width, global } from '../assets/global'

export default function LoginScreen({ navigation, username, password }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const [notificationDetails, setNotificationDetails] = useState('')
  const [loginParam, setLoginParam] = useState({})

  const userInfoDict = userStore.useState((s) => s.userInfoDict)

  useEffect(() => {
    setLoginParam({ username: username, password: password })
    console.log(loginParam)
  }, [navigation])

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
          setNotificationDetails('Record not found!')
        } else {
          userStore.update((s) => {
            s.userInfoDict = res.data.message
            s.token = res.data.message.token
          })
          AsyncStorage.setItem('token', res.data.message.token)
        }
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
      <Text style={[text.title]}>Welcome to my Project</Text>
      <View style={container.centerContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={color.whiteColor}
          style={[textInput.main, localStyle.verticalSpacing]}
          value={loginParam.username}
          onChangeText={(val) => {
            setLoginParam({
              username: val,
              password: loginParam.password
            })
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={color.whiteColor}
          style={[textInput.main, localStyle.verticalSpacing]}
          value={loginParam.password}
          onChangeText={(val) => {
            setLoginParam({
              username: loginParam.username,
              password: val
            })
          }}
        />
        <TouchableOpacity
          style={[button.mainBtn, localStyle.verticalSpacing]}
          disabled={isLoading}
          onPress={() => {
            // navigation.navigate('UserScreen')
            loginFunc()
          }}>
          {isLoading ? (
            <ActivityIndicator color={color.whiteColor} />
          ) : (
            <Text style={text.btnText}>Login Now</Text>
          )}
        </TouchableOpacity>
        <View style={[localStyle.registerCont, localStyle.verticalSpacing]}>
          <View style={global.horizontalLine} />
          <Text style={[text.noteText, localStyle.marginText]}>Or</Text>

          <View style={global.horizontalLine} />
        </View>
        <TouchableOpacity
          style={button.mainBtn}
          onPress={() => {
            navigation.navigate('RegisterScreen')
          }}>
          <Text style={text.btnText}>Don't have account?</Text>
        </TouchableOpacity>
      </View>
      {isNotification ? (
        <View style={container.notificationView}>
          <Notification text={notificationDetails} />
        </View>
      ) : null}
    </View>
  )
}

const localStyle = StyleSheet.create({
  verticalSpacing: {
    marginBottom: height * 0.04
  },
  registerCont: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  marginText: {
    marginHorizontal: width * 0.01
  }
})
