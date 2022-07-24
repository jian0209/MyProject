import { StyleSheet } from 'react-native'
import color from '../stores/color'

export default StyleSheet.create({
  title: {
    color: color.blackColor,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnText: {
    color: color.whiteColor,
    fontSize: 16
  },
  notificationText: {
    fontSize: 16,
    color: color.whiteColor
  },
  noteText: {
    fontSize: 12
  },
  textInputCorrectText: {
    fontSize: 16,
    color: color.correctColor,
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  textInputFaultText: {
    fontSize: 16,
    color: color.faultColor,
    paddingVertical: 5,
    paddingHorizontal: 20
  }
})
