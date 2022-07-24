import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import button from '../assets/button'
import text from '../assets/text'
import container from '../assets/container'
import textInput from '../assets/textInput'
import color from '../stores/color'
import { register, checkUsername } from '../api/user'
import { Notification } from '../components/notification'
import { height, width, global } from '../assets/global'
import { validateEmail } from '../utils/validation'

export default function RegisterScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isNotification, setIsNotification] = useState(false)
  const [notificationDetails, setNotificationDetails] = useState('')
  const [registerParam, setRegisterParam] = useState({})
  const [isUsername, setIsUsername] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isFirstName, setIsFirstName] = useState(false)
  const [isLastName, setIsLastName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isFaultUsername, setIsFaultUsername] = useState(false)
  const [isFaultPassword, setIsFaultPassword] = useState(false)
  const [isFaultEmail, setIsFaultEmail] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsNotification(false)
    }, 5000)
  }, [isNotification])

  const registerFunc = async () => {
    if (!isFaultEmail) {
      setIsNotification(true)
      setNotificationDetails('Please check the email format.')
    } else if (
      isEmail &&
      isFirstName &&
      isLastName &&
      isUsername &&
      isPassword
    ) {
      setIsLoading(true)
      await checkUsername(registerParam.username)
        .then(async (res) => {
          if (!res.data.success) {
            setIsNotification(true)
            setNotificationDetails(res.data.message)
          } else {
            await register(registerParam)
              .then((res) => {
                navigation.navigate('LoginScreen', {
                  username: registerParam.username,
                  password: registerParam.password
                })
              })
              .catch((err) => {
                console.error(err)
              })
          }
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsNotification(true)
      setNotificationDetails('Please check the empty text field.')
    }
  }

  return (
    <View style={container.mainContainer}>
      <Text style={[text.title]}>Welcome to my Project</Text>
      <View style={container.centerContainer}>
        {isUsername ? (
          <Text style={text.textInputCorrectText}>Username</Text>
        ) : (
          <View style={{ height: 29 }} />
        )}
        <TextInput
          placeholder="Username"
          placeholderTextColor={color.whiteColor}
          style={[textInput.main, localStyle.verticalSpacing]}
          value={registerParam.username}
          onChangeText={(val) => {
            setRegisterParam({
              username: val,
              password: registerParam.password,
              firstName: registerParam.firstName,
              lastName: registerParam.lastName,
              email: registerParam.email
            })
            if (val !== '') {
              setIsUsername(true)
            } else {
              setIsUsername(false)
            }
          }}
        />
        {isPassword ? (
          <Text style={text.textInputCorrectText}>Password</Text>
        ) : (
          <View style={{ height: 29 }} />
        )}
        <TextInput
          placeholder="Password"
          placeholderTextColor={color.whiteColor}
          style={[textInput.main, localStyle.verticalSpacing]}
          value={registerParam.password}
          onChangeText={(val) => {
            setRegisterParam({
              username: registerParam.username,
              password: val,
              firstName: registerParam.firstName,
              lastName: registerParam.lastName,
              email: registerParam.email
            })
            if (val !== '') {
              setIsPassword(true)
            } else {
              setIsPassword(false)
            }
          }}
        />
        {isFirstName ? (
          <Text style={text.textInputCorrectText}>First Name</Text>
        ) : (
          <View style={{ height: 29 }} />
        )}
        <TextInput
          placeholder="First Name"
          placeholderTextColor={color.whiteColor}
          style={[textInput.main, localStyle.verticalSpacing]}
          value={registerParam.firstName}
          onChangeText={(val) => {
            setRegisterParam({
              username: registerParam.username,
              password: registerParam.password,
              firstName: val,
              lastName: registerParam.lastName,
              email: registerParam.email
            })
            if (val !== '') {
              setIsFirstName(true)
            } else {
              setIsFirstName(false)
            }
          }}
        />
        {isLastName ? (
          <Text style={text.textInputCorrectText}>Last Name</Text>
        ) : (
          <View style={{ height: 29 }} />
        )}
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={color.whiteColor}
          style={[textInput.main, localStyle.verticalSpacing]}
          value={registerParam.lastName}
          onChangeText={(val) => {
            setRegisterParam({
              username: registerParam.username,
              password: registerParam.password,
              firstName: registerParam.firstName,
              lastName: val,
              email: registerParam.email
            })
            if (val !== '') {
              setIsLastName(true)
            } else {
              setIsLastName(false)
            }
          }}
        />
        {isEmail ? (
          <Text style={text.textInputCorrectText}>Email</Text>
        ) : isFaultEmail ? (
          <Text style={text.textInputFaultText}>Email</Text>
        ) : (
          <View style={{ height: 29 }} />
        )}
        <TextInput
          placeholder="Email"
          placeholderTextColor={color.whiteColor}
          style={[textInput.main, localStyle.verticalSpacingRegular]}
          value={registerParam.email}
          onChangeText={(val) => {
            setRegisterParam({
              username: registerParam.username,
              password: registerParam.password,
              firstName: registerParam.firstName,
              lastName: registerParam.lastName,
              email: val
            })
            if (val !== '') {
              if (validateEmail(val)) {
                setIsEmail(true)
              } else {
                setIsFaultEmail(true)
              }
            } else {
              setIsEmail(false)
              setIsFaultEmail(false)
            }
          }}
        />

        <TouchableOpacity
          style={[button.mainBtn, localStyle.verticalSpacingRegular]}
          disabled={isLoading}
          onPress={() => {
            registerFunc()
          }}>
          {isLoading ? (
            <ActivityIndicator color={color.whiteColor} />
          ) : (
            <Text style={text.btnText}>Register Now</Text>
          )}
        </TouchableOpacity>
        <View
          style={[localStyle.registerCont, localStyle.verticalSpacingRegular]}>
          <View style={global.horizontalLine} />
          <Text style={[text.noteText, localStyle.marginText]}>Or</Text>

          <View style={global.horizontalLine} />
        </View>
        <TouchableOpacity
          style={button.mainBtn}
          onPress={() => {
            navigation.navigate('LoginScreen')
          }}>
          <Text style={text.btnText}>Have Account?</Text>
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
  verticalSpacingTextInput: {
    marginBottom: height * 0.01
  },
  verticalSpacingRegular: {
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
